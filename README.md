# AWS Cloud Practitioner (CLF-C02) Practice Questions

Practice questions for the **AWS Certified Cloud Practitioner** exam, used in
IST-2134 AWS Cloud Infrastructure at MGCCC.

**Live site:** https://vicgauthreaux.github.io/AWS-Cloud/

## What's here

189 questions organized by the four official CLF-C02 exam domains, covering
all 19 task statements in the exam guide.

| Domain | Weight on the exam | Questions here |
|---|---|---|
| 1. Cloud Concepts | 24% | 37 |
| 2. Security and Compliance | 30% | 48 |
| 3. Cloud Technology and Services | 34% | 77 |
| 4. Billing, Pricing, and Support | 12% | 27 |

Of these, 60 come from the original in-class question sets (Modules 1, 5, and 6)
and 129 were written to fill the gaps — security, storage, databases, AI/ML,
analytics, application integration, developer tools, billing tools, and support
plans — which the AWS Academy course material does not cover but the exam does.

Eight are multiple-response ("Choose TWO") items, since the real exam mixes
those in.

## Practice modes

- **Exam simulation** — 65 questions drawn at the real exam's domain weighting
  (the full bank is heavier on networking than the exam is, so the simulation
  samples per domain rather than straight from the pile).
- **Every question** — all 189.
- **One domain at a time** — useful when a score report says which domain is weak.

Each question shows its domain, task statement, and topic. Answering reveals the
correct choice, an explanation, and, when you get it wrong, the specific reason
your choice was wrong. At the end you get a per-domain breakdown against the 70%
you need to pass.

## Adding your own questions

Each file in `questions/` registers one domain on `window.quizBanks`. Append to
the array using the same shape the original class bank used:

```js
{
  q: "The question text.",
  choices: ["First", "Second", "Third", "Fourth"],
  answer: 1,                    // index of the correct choice, or [0, 2] for "Choose TWO"
  explain: "Why the correct answer is correct.",
  why_others_are_not_correct: {
    0: "Why the first choice is wrong.",
    2: "Why the third choice is wrong.",
    3: "Why the fourth choice is wrong."
  },
  domain: 2, task: "2.1", topic: "Shared responsibility model"
}
```

`domain`, `task`, and `topic` drive the on-screen tags and the results
breakdown. The first three keys are all the quiz strictly needs.

## Where the questions come from

Written against the **official AWS Certified Cloud Practitioner (CLF-C02) Exam
Guide** and AWS's own service documentation. Nothing here is copied from
commercial question banks or exam dumps — those are copyrighted, and using real
exam content violates the AWS Certification candidate agreement and can void a
certification.

For official practice material, use the free **AWS Certified Cloud Practitioner
Official Practice Question Set** on [AWS Skill Builder](https://skillbuilder.aws/).

## Files

```
index.html           the quiz page
quiz.css             styling
engine.js            quiz logic
questions/domain1.js Cloud Concepts
questions/domain2.js Security and Compliance
questions/domain3.js Cloud Technology and Services
questions/domain4.js Billing, Pricing, and Support
```

No build step and no dependencies. Open `index.html`, or serve the folder with
any static web server.

---

Not affiliated with or endorsed by Amazon Web Services.
