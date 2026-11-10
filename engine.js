/* Quiz engine for the CLF-C02 practice site.
 *
 * Question shape (unchanged from the original class bank, extra keys added):
 *   { q, choices[], answer (int | int[]), explain,
 *     why_others_are_not_correct { index: text }, domain, task, topic }
 *
 * Banks register themselves on window.quizBanks as domain1..domain4.
 */
(function () {
  'use strict';

  var DOMAINS = {
    1: { name: 'Cloud Concepts',                weight: 24 },
    2: { name: 'Security and Compliance',       weight: 30 },
    3: { name: 'Cloud Technology and Services', weight: 34 },
    4: { name: 'Billing, Pricing, and Support', weight: 12 }
  };
  var EXAM_SIZE = 65;        // the real CLF-C02 exam is 65 questions
  var PASS_PERCENT = 70;     // 700 of 1000 scaled

  var banks = window.quizBanks || {};
  var all = [];
  [1, 2, 3, 4].forEach(function (d) {
    (banks['domain' + d] || []).forEach(function (q) { all.push(q); });
  });

  // ---------- elements ----------
  var el = {};
  ['startScreen','quizScreen','resultScreen','modeList','shuffleToggle','backBtn',
   'counter','score','bar','tagDomain','tagTask','tagTopic','qText','multiNote',
   'qChoices','qExplain','prevBtn','nextBtn','finalScore','finalTotal','verdict',
   'breakdown','reviewBtn','againBtn'].forEach(function (id) {
    el[id] = document.getElementById(id);
  });

  // ---------- state ----------
  var questions = [];   // current set
  var answers = [];     // per question: int, int[], or null
  var order = [];       // shuffled choice order per question
  var idx = 0;
  var lastMode = null;

  // ---------- helpers ----------
  function shuffle(a) {
    var c = a.slice();
    for (var i = c.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var x = a.slice().sort(), y = b.slice().sort();
    return x.every(function (v, i) { return v === y[i]; });
  }

  function isAnswered(i) {
    var a = answers[i];
    if (a === null || a === undefined) return false;
    var q = questions[i];
    if (Array.isArray(q.answer)) return Array.isArray(a) && a.length === q.answer.length;
    return true;
  }

  function isCorrect(i) {
    if (!isAnswered(i)) return false;
    var q = questions[i], a = answers[i];
    return Array.isArray(q.answer) ? sameSet(a, q.answer) : a === q.answer;
  }

  /* An exam-weighted sample: the full bank is heavier on networking than the
     real exam, so the simulation draws per domain at the published weights. */
  function examSample() {
    var out = [];
    [1, 2, 3, 4].forEach(function (d) {
      var want = Math.round(EXAM_SIZE * DOMAINS[d].weight / 100);
      out = out.concat(shuffle(banks['domain' + d] || []).slice(0, want));
    });
    return shuffle(out).slice(0, EXAM_SIZE);
  }

  // ---------- start screen ----------
  function buildModes() {
    var modes = [{
      key: 'exam', featured: true,
      name: 'Exam simulation',
      desc: EXAM_SIZE + ' questions drawn at the real exam’s domain weighting',
      count: EXAM_SIZE + ' questions',
      get: examSample
    }, {
      key: 'all', name: 'Every question',
      desc: 'The whole bank, all four domains',
      count: all.length + ' questions',
      get: function () { return all.slice(); }
    }];

    [1, 2, 3, 4].forEach(function (d) {
      var bank = banks['domain' + d] || [];
      modes.push({
        key: 'd' + d,
        name: 'Domain ' + d + ': ' + DOMAINS[d].name,
        desc: DOMAINS[d].weight + '% of the exam',
        count: bank.length + ' questions',
        get: function () { return bank.slice(); }
      });
    });

    el.modeList.innerHTML = '';
    modes.forEach(function (m) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'mode-btn' + (m.featured ? ' featured' : '');
      var wrap = document.createElement('span');
      var n = document.createElement('span');
      n.className = 'mode-name'; n.textContent = m.name;
      var d = document.createElement('span');
      d.className = 'mode-desc'; d.textContent = m.desc;
      wrap.appendChild(n); wrap.appendChild(d);
      var c = document.createElement('span');
      c.className = 'mode-count'; c.textContent = m.count;
      b.appendChild(wrap); b.appendChild(c);
      b.addEventListener('click', function () { start(m); });
      el.modeList.appendChild(b);
    });
  }

  function start(mode) {
    lastMode = mode;
    var set = mode.get();
    questions = el.shuffleToggle.checked ? shuffle(set) : set;
    answers = new Array(questions.length).fill(null);
    order = new Array(questions.length).fill(null);
    idx = 0;
    show('quizScreen');
    render();
  }

  function show(which) {
    el.startScreen.hidden = which !== 'startScreen';
    el.quizScreen.hidden = which !== 'quizScreen';
    el.resultScreen.hidden = which !== 'resultScreen';
    window.scrollTo(0, 0);
  }

  // ---------- rendering ----------
  function render() {
    var q = questions[idx];
    if (!q) return;
    var multi = Array.isArray(q.answer);

    el.counter.textContent = 'Question ' + (idx + 1) + ' of ' + questions.length;
    var right = questions.reduce(function (n, _, i) { return n + (isCorrect(i) ? 1 : 0); }, 0);
    el.score.textContent = right + ' correct';
    el.bar.style.width = ((idx + 1) / questions.length * 100) + '%';

    el.tagDomain.textContent = 'Domain ' + q.domain + ': ' + DOMAINS[q.domain].name;
    el.tagTask.textContent = 'Task ' + q.task;
    el.tagTopic.textContent = q.topic;

    el.qText.textContent = q.q;
    el.multiNote.hidden = !multi;
    if (multi) el.multiNote.textContent = 'Choose ' + q.answer.length + '.';

    if (!order[idx]) {
      var base = q.choices.map(function (_, i) { return i; });
      order[idx] = el.shuffleToggle.checked ? shuffle(base) : base;
    }

    el.qChoices.innerHTML = '';
    var locked = isAnswered(idx);
    order[idx].forEach(function (orig, pos) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice';
      var picked = multi
        ? (Array.isArray(answers[idx]) && answers[idx].indexOf(orig) >= 0)
        : answers[idx] === orig;
      btn.setAttribute('aria-pressed', picked ? 'true' : 'false');

      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.textContent = String.fromCharCode(65 + pos) + '.';
      var text = document.createElement('span');
      text.textContent = q.choices[orig];
      btn.appendChild(letter); btn.appendChild(text);

      if (locked) {
        btn.disabled = true;
        var correctSet = multi ? q.answer : [q.answer];
        if (correctSet.indexOf(orig) >= 0) btn.classList.add('is-correct');
        else if (picked) btn.classList.add('is-wrong');
      } else {
        btn.addEventListener('click', function () { pick(orig); });
      }
      el.qChoices.appendChild(btn);
    });

    el.prevBtn.disabled = idx === 0;
    el.nextBtn.textContent = (idx === questions.length - 1) ? 'See results' : 'Next';
    explain();
  }

  function pick(orig) {
    var q = questions[idx];
    if (Array.isArray(q.answer)) {
      var cur = Array.isArray(answers[idx]) ? answers[idx].slice() : [];
      var at = cur.indexOf(orig);
      if (at >= 0) cur.splice(at, 1);
      else if (cur.length < q.answer.length) cur.push(orig);
      answers[idx] = cur;
    } else {
      answers[idx] = orig;
    }
    render();
  }

  function explain() {
    var q = questions[idx];
    el.qExplain.className = 'explanation';
    el.qExplain.textContent = '';
    if (!isAnswered(idx)) return;

    var good = isCorrect(idx);
    el.qExplain.classList.add(good ? 'correct' : 'wrong');

    var head = document.createElement('span');
    head.className = 'verdict-line';
    head.textContent = good ? 'Correct.' : 'Not quite.';
    el.qExplain.appendChild(head);

    var body = document.createElement('span');
    body.className = 'detail';
    if (good) {
      body.textContent = q.explain || '';
    } else {
      var picked = Array.isArray(q.answer) ? answers[idx] : [answers[idx]];
      var right = Array.isArray(q.answer) ? q.answer : [q.answer];
      var why = q.why_others_are_not_correct || {};
      var notes = picked.filter(function (p) { return right.indexOf(p) < 0; })
                        .map(function (p) { return why[p]; })
                        .filter(Boolean);
      body.textContent = (notes.join(' ') + ' ' + (q.explain || '')).trim();
    }
    el.qExplain.appendChild(body);
  }

  // ---------- results ----------
  function results() {
    var total = questions.length;
    var right = questions.reduce(function (n, _, i) { return n + (isCorrect(i) ? 1 : 0); }, 0);
    var pct = total ? Math.round(right / total * 100) : 0;

    el.finalScore.textContent = right;
    el.finalTotal.textContent = total;
    el.verdict.className = 'verdict ' + (pct >= PASS_PERCENT ? 'pass' : 'fail');
    el.verdict.textContent = pct + '% — ' + (pct >= PASS_PERCENT
      ? 'at or above the 70% you need on the real exam'
      : 'below the 70% you need on the real exam');

    var byDomain = {};
    questions.forEach(function (q, i) {
      var d = byDomain[q.domain] || (byDomain[q.domain] = { right: 0, total: 0 });
      d.total++; if (isCorrect(i)) d.right++;
    });

    el.breakdown.innerHTML = '';
    [1, 2, 3, 4].forEach(function (d) {
      var s = byDomain[d];
      if (!s) return;
      var row = document.createElement('div');
      row.className = 'bd-row';
      var name = document.createElement('span');
      name.className = 'bd-name';
      name.textContent = 'Domain ' + d + ': ' + DOMAINS[d].name;
      var track = document.createElement('span');
      track.className = 'bd-track';
      var fill = document.createElement('span');
      fill.className = 'bd-fill';
      fill.style.width = (s.total ? s.right / s.total * 100 : 0) + '%';
      track.appendChild(fill);
      var num = document.createElement('span');
      num.className = 'bd-num';
      num.textContent = s.right + '/' + s.total;
      row.appendChild(name); row.appendChild(track); row.appendChild(num);
      el.breakdown.appendChild(row);
    });

    var missed = questions.filter(function (_, i) { return !isCorrect(i); });
    el.reviewBtn.disabled = missed.length === 0;
    el.reviewBtn.textContent = missed.length
      ? 'Review the ' + missed.length + ' I missed'
      : 'Nothing missed';
    show('resultScreen');
  }

  // ---------- wiring ----------
  el.prevBtn.addEventListener('click', function () { if (idx > 0) { idx--; render(); } });
  el.nextBtn.addEventListener('click', function () {
    if (idx < questions.length - 1) { idx++; render(); } else { results(); }
  });
  el.backBtn.addEventListener('click', function () { show('startScreen'); });
  el.againBtn.addEventListener('click', function () { show('startScreen'); });
  el.reviewBtn.addEventListener('click', function () {
    var missed = questions.filter(function (_, i) { return !isCorrect(i); });
    if (!missed.length) return;
    questions = missed;
    answers = new Array(questions.length).fill(null);
    order = new Array(questions.length).fill(null);
    idx = 0;
    show('quizScreen');
    render();
  });

  document.addEventListener('keydown', function (e) {
    if (el.quizScreen.hidden) return;
    if (e.key === 'ArrowRight') { el.nextBtn.click(); }
    else if (e.key === 'ArrowLeft') { el.prevBtn.click(); }
    else if (/^[1-9]$/.test(e.key)) {
      var n = parseInt(e.key, 10) - 1;
      var btns = el.qChoices.querySelectorAll('.choice:not(:disabled)');
      if (btns[n]) btns[n].click();
    }
  });

  if (!all.length) {
    el.modeList.textContent = 'No question banks loaded. Check that the files in questions/ are present.';
  } else {
    buildModes();
  }
})();
