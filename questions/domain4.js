/* CLF-C02 Domain 4: Billing, Pricing, and Support (12% of the exam)
   33 questions covering task statements 4.1, 4.2, 4.3
   Format matches the original class bank, so new questions can be
   appended by hand in exactly the same shape. */
window.quizBanks = window.quizBanks || {};
window.quizBanks.domain4 = [
  {
    q: "What is a key benefit of using the AWS Free Tier when beginning with compute services like EC2 or Lambda?",
    choices: [
      "Guarantees production-grade SLA for free usage",
      "Provides an unlimited number of instance hours for learning",
      "Allows users to experiment and learn with minimal cost risk",
      "Locks in pricing for five years",
    ],
    answer: 2,
    explain: "The AWS Free Tier provides limited free usage of services so that users can experiment, learn, and prototype without committing large cost - reducing risk during learning phases.",
    why_others_are_not_correct: {
      0: "Free Tier usage does not come with production-grade SLA beyond standard service levels.",
      1: "Usage is limited (hours, instance types, resources) - not unlimited.",
      3: "Free Tier doesn't lock pricing; you still pay standard rates after the free usage ends.",
    },
    domain: 4, task: "4.1", topic: "AWS Free Tier"
  },
  {
    q: "How are customers charged for AWS Lambda usage?",
    choices: [
      "Per server hour",
      "Per number of running instances",
      "Per request and compute time",
      "Flat monthly subscription",
    ],
    answer: 2,
    explain: "AWS Lambda charges based on the number of requests and compute time in GB-seconds used by your functions.",
    why_others_are_not_correct: {
      0: "Lambda is serverless - no servers to bill hourly.",
      1: "You don't manage instances in Lambda.",
      3: "There is no flat fee; it's pay-per-use.",
    },
    domain: 4, task: "4.1", topic: "AWS Lambda pricing"
  },
  {
    q: "Which statement about AWS data transfer charges is generally true?",
    choices: [
      "Data transferred into AWS is typically free, while data transferred out is charged",
      "Both inbound and outbound transfer are charged at the same rate",
      "Inbound transfer is charged and outbound is free",
      "Data transfer is never charged",
    ],
    answer: 0,
    explain: "Inbound data transfer is generally free, which encourages you to bring data in. Outbound transfer to the internet is metered, and it surprises people on their first large bill.",
    why_others_are_not_correct: {
      1: "The two directions are priced very differently.",
      2: "This reverses the model.",
      3: "Outbound transfer is a real and often significant line item.",
    },
    domain: 4, task: "4.1", topic: "Data transfer pricing"
  },
  {
    q: "A company has software licensed per physical processor and must run it on isolated hardware. Which EC2 option fits?",
    choices: [
      "Dedicated Hosts",
      "Spot Instances",
      "On-Demand Instances",
      "Savings Plans",
    ],
    answer: 0,
    explain: "Dedicated Hosts give you a physical server for your exclusive use with visibility into sockets and cores, which is what per-socket or per-core licensing requires.",
    why_others_are_not_correct: {
      1: "Spot gives no hardware isolation and can be interrupted.",
      2: "On-Demand runs on shared hardware.",
      3: "Savings Plans are a pricing commitment, not an isolation model.",
    },
    domain: 4, task: "4.1", topic: "Dedicated Hosts"
  },
  {
    q: "Which EC2 pricing option offers the highest discount but requires upfront commitment?",
    choices: [
      "On-Demand Instances",
      "Savings Plans",
      "Spot Instances",
      "Reserved Instances",
    ],
    answer: 3,
    explain: "Reserved Instances provide up to 75% savings compared to On-Demand pricing when you commit for 1-3 years.",
    why_others_are_not_correct: {
      0: "On-Demand Instances have no long-term commitment but higher cost.",
      1: "Savings Plans are flexible but generally lower discounts than Reserved Instances.",
      2: "Spot Instances offer high discounts but no guaranteed capacity.",
    },
    domain: 4, task: "4.1", topic: "EC2 purchase options"
  },
  {
    q: "A customer has a predictable baseline workload with occasional peaks. Which EC2 pricing model gives them significant cost savings with commitment but flexibility across instance sizes and families?",
    choices: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Savings Plans",
    ],
    answer: 3,
    explain: "AWS Savings Plans provide cost-effective pricing across instance families and regions when you commit to a certain spend level, offering more flexibility compared to Reserved Instances tied to a specific instance type.",
    why_others_are_not_correct: {
      0: "On-Demand offers flexibility but at higher cost and no commitment savings.",
      1: "Spot Instances offer deep discounts but are interruptible and not ideal for predictable baseline workloads.",
      2: "Reserved Instances provide savings but less flexibility across instance types/families compared to Savings Plans.",
    },
    domain: 4, task: "4.1", topic: "EC2 purchase options"
  },
  {
    q: "Which TWO EC2 purchase options require a one-year or three-year commitment in exchange for a discount? (Choose TWO.)",
    choices: [
      "Reserved Instances",
      "Savings Plans",
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Hosts on demand",
    ],
    answer: [0, 1],
    explain: "Reserved Instances commit you to a specific configuration, and Savings Plans commit you to an hourly spend. Both are one-year or three-year commitments that lower your rate.",
    why_others_are_not_correct: {
      2: "On-Demand has no commitment and the highest hourly rate.",
      3: "Spot is discounted because capacity can be reclaimed, not because you commit.",
      4: "Dedicated Hosts can be purchased on demand without a term commitment.",
    },
    domain: 4, task: "4.1", topic: "EC2 purchase options"
  },
  {
    q: "Which statement about the AWS Free Tier is correct?",
    choices: [
      "It includes always-free offers, 12-month offers, and short-term trials depending on the service",
      "Everything in AWS is free for the first year",
      "It is available only to educational institutions",
      "It requires a Business Support plan",
    ],
    answer: 0,
    explain: "The Free Tier has several forms. Some services are always free up to a limit, some are free for 12 months from signup, and others are short trials.",
    why_others_are_not_correct: {
      1: "Only specific services and quantities are covered.",
      2: "Any new account can use the Free Tier.",
      3: "No support plan purchase is required.",
    },
    domain: 4, task: "4.1", topic: "Free Tier"
  },
  {
    q: "What is the minimum billing time for an On-Demand EC2 instance?",
    choices: [
      "One second",
      "One minute (60 seconds)",
      "One hour",
      "One day",
    ],
    answer: 1,
    explain: "EC2 bills On-Demand Instances per second with a 60-second minimum charge.",
    why_others_are_not_correct: {
      0: "Billing is per second, but minimum duration is 60 seconds.",
      2: "Hourly billing is outdated for EC2.",
      3: "No daily billing model exists for EC2.",
    },
    domain: 4, task: "4.1", topic: "On-Demand billing"
  },
  {
    q: "What billing characteristic best describes the On-Demand pricing model for EC2 instances?",
    choices: [
      "One-year upfront payment required",
      "Pay per second with no long-term commitment",
      "Lowest cost for reserved workloads",
      "Bid price determines capacity availability",
    ],
    answer: 1,
    explain: "On-Demand billing allows you to pay per second (with a 60-second minimum for many instance types) with no long-term commitment - ideal for unpredictable workloads.",
    why_others_are_not_correct: {
      0: "One-year upfront payments are required for some Reserved Instances, not On-Demand.",
      2: "Lowest cost for reserved workloads is more applicable to Reserved Instances or Savings Plans.",
      3: "Bid price and capacity availability describes Spot Instances, not On-Demand.",
    },
    domain: 4, task: "4.1", topic: "On-Demand billing"
  },
  {
    q: "Which pricing option offers lower rates in exchange for committing to a consistent amount of compute usage, measured in dollars per hour, for one or three years?",
    choices: [
      "Savings Plans",
      "On-Demand",
      "Spot Instances",
      "Dedicated Hosts",
    ],
    answer: 0,
    explain: "Savings Plans commit you to an hourly spend rather than a specific instance type, which makes them more flexible than Reserved Instances while giving similar discounts.",
    why_others_are_not_correct: {
      1: "On-Demand has no commitment and the highest per-hour price.",
      2: "Spot offers deep discounts but instances can be reclaimed with two minutes' notice.",
      3: "Dedicated Hosts provide physical server isolation, usually for licensing.",
    },
    domain: 4, task: "4.1", topic: "Savings Plans"
  },
  {
    q: "A research team is running high-performance computing jobs that are interruptible and can tolerate pause or termination. Which EC2 pricing model should they choose to maximize savings?",
    choices: [
      "On-Demand",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans",
    ],
    answer: 2,
    explain: "Spot Instances allow you to use spare EC2 capacity at a much reduced cost, and are suitable for workloads that are flexible and can tolerate interruptions.",
    why_others_are_not_correct: {
      0: "On-Demand gives no cost savings compared to alternatives.",
      1: "Reserved Instances require long-term commitment and are less flexible.",
      3: "Savings Plans cover spend commitment but do not provide as deep discounts for interruptible workloads as Spot.",
    },
    domain: 4, task: "4.1", topic: "Spot Instances"
  },
  {
    q: "Which service alerts you when your spending is forecast to exceed a threshold you set?",
    choices: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor",
    ],
    answer: 0,
    explain: "Budgets is forward-looking. You set a limit, and it notifies you when actual or forecast spend crosses it, before the bill arrives.",
    why_others_are_not_correct: {
      1: "Cost Explorer visualizes spending that has already happened.",
      2: "The Cost and Usage Report is the detailed line-item data export.",
      3: "Trusted Advisor suggests savings but does not set spending alerts.",
    },
    domain: 4, task: "4.2", topic: "AWS Budgets"
  },
  {
    q: "Which service analyzes utilization metrics and recommends optimal EC2 instance types, EBS volumes, and Lambda memory settings?",
    choices: [
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Config",
      "Amazon CloudWatch",
    ],
    answer: 0,
    explain: "Compute Optimizer uses machine learning on your actual usage to recommend better-fitting resources, with the projected performance and cost impact.",
    why_others_are_not_correct: {
      1: "Budgets alerts on spending thresholds.",
      2: "Config tracks configuration compliance.",
      3: "CloudWatch supplies the metrics but does not make sizing recommendations.",
    },
    domain: 4, task: "4.2", topic: "AWS Compute Optimizer"
  },
  {
    q: "Which AWS feature uses machine learning to spot unusual spending and alert you automatically?",
    choices: [
      "AWS Cost Anomaly Detection",
      "AWS Pricing Calculator",
      "AWS Artifact",
      "AWS Compute Optimizer",
    ],
    answer: 0,
    explain: "Cost Anomaly Detection learns your normal spending pattern and flags deviations, which catches a runaway resource before it reaches the monthly invoice.",
    why_others_are_not_correct: {
      1: "The Pricing Calculator estimates costs before you build.",
      2: "Artifact provides compliance reports.",
      3: "Compute Optimizer recommends resource sizes based on utilization.",
    },
    domain: 4, task: "4.2", topic: "AWS Cost Anomaly Detection"
  },
  {
    q: "A finance team wants to see which services drove last quarter's AWS spend and spot trends. Which tool fits?",
    choices: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Artifact",
      "Amazon CloudWatch",
    ],
    answer: 0,
    explain: "Cost Explorer provides graphs and filters over your historical cost and usage, broken down by service, account, tag, and more.",
    why_others_are_not_correct: {
      1: "Budgets is about setting limits and alerts going forward.",
      2: "Artifact provides compliance documents.",
      3: "CloudWatch monitors resource metrics, not spend analysis.",
    },
    domain: 4, task: "4.2", topic: "AWS Cost Explorer"
  },
  {
    q: "Which tool estimates the cost of an AWS architecture before you build it?",
    choices: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
    ],
    answer: 0,
    explain: "The Pricing Calculator models a planned configuration and produces an estimate, which is useful for business cases and comparisons.",
    why_others_are_not_correct: {
      1: "Cost Explorer reports on spend that already occurred.",
      2: "Budgets alerts on actual or forecast spend in a live account.",
      3: "The Cost and Usage Report details past usage.",
    },
    domain: 4, task: "4.2", topic: "AWS Pricing Calculator"
  },
  {
    q: "Where can an account owner see a current month-to-date summary of AWS charges?",
    choices: [
      "The AWS Billing and Cost Management dashboard",
      "The Amazon EC2 console",
      "AWS CloudTrail",
      "The AWS Artifact portal",
    ],
    answer: 0,
    explain: "The Billing and Cost Management dashboard shows month-to-date spend, a forecast, and the biggest contributing services.",
    why_others_are_not_correct: {
      1: "The EC2 console manages instances.",
      2: "CloudTrail records API calls.",
      3: "Artifact hosts compliance reports.",
    },
    domain: 4, task: "4.2", topic: "Billing dashboard"
  },
  {
    q: "What is a benefit of consolidated billing in AWS Organizations?",
    choices: [
      "Usage across all accounts is combined, which can qualify the organization for volume discounts",
      "Each account receives a separate invoice with no relationship",
      "It removes the need for IAM in member accounts",
      "It automatically reduces every service price by half",
    ],
    answer: 0,
    explain: "Consolidated billing produces one bill for the organization and pools usage, so the combined volume can reach discount tiers that individual accounts would not.",
    why_others_are_not_correct: {
      1: "Consolidated billing produces a single payer invoice, which is the point.",
      2: "Each account still needs its own identity and access management.",
      3: "There is no blanket 50 percent discount.",
    },
    domain: 4, task: "4.2", topic: "Consolidated billing"
  },
  {
    q: "In an AWS Organization using consolidated billing, which account pays the combined bill?",
    choices: [
      "The management account",
      "Each member account pays its own share directly",
      "The account with the highest usage",
      "AWS selects an account at random each month",
    ],
    answer: 0,
    explain: "The management account, formerly called the payer account, receives and settles the consolidated invoice for every member account.",
    why_others_are_not_correct: {
      1: "Member accounts do not receive separate invoices under consolidated billing.",
      2: "Usage volume does not determine who pays.",
      3: "The payer is fixed, not randomly assigned.",
    },
    domain: 4, task: "4.2", topic: "Consolidated billing"
  },
  {
    q: "How can a company attribute AWS costs to individual departments?",
    choices: [
      "Apply cost allocation tags to resources and report on them",
      "Create one AWS Region per department",
      "Use a separate password for each department",
      "Rely on the instance ID",
    ],
    answer: 0,
    explain: "Tags such as Department or Project can be activated as cost allocation tags, after which Cost Explorer and the Cost and Usage Report can group spend by them.",
    why_others_are_not_correct: {
      1: "Regions are geographic and unrelated to internal accounting.",
      2: "Passwords have nothing to do with billing.",
      3: "Instance IDs do not describe who owns a resource.",
    },
    domain: 4, task: "4.2", topic: "Cost allocation tags"
  },
  {
    q: "Which AWS billing artifact provides the most granular, line-item detail about usage and charges?",
    choices: [
      "The AWS Cost and Usage Report",
      "The Billing dashboard summary",
      "AWS Cost Explorer charts",
      "The AWS Pricing Calculator estimate",
    ],
    answer: 0,
    explain: "The Cost and Usage Report is the raw data, delivered to S3, down to individual resource and hour. Teams load it into analytics tools for detailed chargeback.",
    why_others_are_not_correct: {
      1: "The dashboard is a high-level summary.",
      2: "Cost Explorer visualizes aggregated data rather than raw line items.",
      3: "The Pricing Calculator produces forward-looking estimates.",
    },
    domain: 4, task: "4.2", topic: "Cost and Usage Report"
  },
  {
    q: "What happens to an unused Reserved Instance discount in an AWS Organization with consolidated billing and sharing enabled?",
    choices: [
      "It can apply to matching usage in other accounts in the organization",
      "It is lost at the end of each hour",
      "It is refunded as account credit",
      "It transfers to the next billing month",
    ],
    answer: 0,
    explain: "Reserved Instance and Savings Plans benefits are shared across the organization by default, so one account's unused reservation offsets another account's matching usage.",
    why_others_are_not_correct: {
      1: "The benefit is shared rather than simply lost.",
      2: "AWS does not refund unused reservation hours as credit.",
      3: "Hourly reservation benefits do not roll forward.",
    },
    domain: 4, task: "4.2", topic: "Reserved Instance sharing"
  },
  {
    q: "What does AWS Marketplace offer?",
    choices: [
      "A catalog of third-party software you can buy and deploy, billed through your AWS account",
      "Discounted AWS certification exams",
      "Used AWS hardware for sale",
      "A forum for asking AWS technical questions",
    ],
    answer: 0,
    explain: "Marketplace lists third-party software, from security appliances to machine learning models, with billing consolidated onto your AWS invoice.",
    why_others_are_not_correct: {
      1: "Exam vouchers come through AWS Training and Certification.",
      2: "AWS does not sell its hardware.",
      3: "Community questions go to AWS re:Post.",
    },
    domain: 4, task: "4.3", topic: "AWS Marketplace"
  },
  {
    q: "What is the AWS Partner Network?",
    choices: [
      "A global community of companies that offer AWS-based products and consulting services",
      "A private network link between AWS Regions",
      "The AWS internal engineering team",
      "A discount program for individual students",
    ],
    answer: 0,
    explain: "APN includes consulting partners who help you build on AWS and technology partners, including independent software vendors, whose products run on AWS.",
    why_others_are_not_correct: {
      1: "That describes the AWS global network backbone.",
      2: "AWS employees are not the Partner Network.",
      3: "Student discounts come through other programs.",
    },
    domain: 4, task: "4.3", topic: "AWS Partner Network"
  },
  {
    q: "A company needs hands-on expert help from AWS to design and deliver a complex migration. Which option provides this?",
    choices: [
      "AWS Professional Services",
      "AWS Basic Support",
      "AWS Artifact",
      "AWS Trusted Advisor",
    ],
    answer: 0,
    explain: "AWS Professional Services is a paid consulting organization that works alongside your team and AWS partners on specific engagements.",
    why_others_are_not_correct: {
      1: "Basic Support does not include technical consulting.",
      2: "Artifact provides compliance documents.",
      3: "Trusted Advisor gives automated recommendations, not consultants.",
    },
    domain: 4, task: "4.3", topic: "AWS Professional Services"
  },
  {
    q: "Which AWS Support plan is the lowest tier that includes 24/7 access to cloud support engineers by phone, chat, and email?",
    choices: [
      "Business",
      "Basic",
      "Developer",
      "Enterprise",
    ],
    answer: 0,
    explain: "Basic offers no technical case support, Developer offers business-hours email access, and Business is the first tier with 24/7 engineer access by phone and chat.",
    why_others_are_not_correct: {
      1: "Basic includes documentation, forums, and limited Trusted Advisor checks only.",
      2: "Developer provides business-hours email access to an associate.",
      3: "Enterprise includes all of this plus a Technical Account Manager, but it is not the lowest such tier.",
    },
    domain: 4, task: "4.3", topic: "AWS Support plans"
  },
  {
    q: "Which AWS Support plan includes a designated Technical Account Manager?",
    choices: [
      "Enterprise",
      "Business",
      "Developer",
      "Basic",
    ],
    answer: 0,
    explain: "A Technical Account Manager is the distinguishing feature of Enterprise Support, providing proactive guidance and a named point of contact. Enterprise On-Ramp includes a pooled TAM experience.",
    why_others_are_not_correct: {
      1: "Business gives 24/7 engineer access but no designated TAM.",
      2: "Developer is business-hours email support.",
      3: "Basic has no technical case support.",
    },
    domain: 4, task: "4.3", topic: "AWS Support plans"
  },
  {
    q: "Which support plan is included for every AWS customer at no additional charge?",
    choices: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise",
    ],
    answer: 0,
    explain: "Basic Support comes with every account and includes documentation, whitepapers, support forums, and a limited set of Trusted Advisor checks.",
    why_others_are_not_correct: {
      1: "Developer is a paid plan.",
      2: "Business is a paid plan.",
      3: "Enterprise is the most expensive paid plan.",
    },
    domain: 4, task: "4.3", topic: "AWS Support plans"
  },
  {
    q: "Which TWO features are included with AWS Business Support but NOT with AWS Developer Support? (Choose TWO.)",
    choices: [
      "24/7 phone and chat access to cloud support engineers",
      "The full set of AWS Trusted Advisor checks",
      "Access to AWS documentation and whitepapers",
      "Access to AWS re:Post",
      "A designated Technical Account Manager",
    ],
    answer: [0, 1],
    explain: "Business Support adds round-the-clock engineer access by phone and chat, plus the complete Trusted Advisor check set. Developer Support is business-hours email only.",
    why_others_are_not_correct: {
      2: "Documentation is free to everyone, including Basic Support.",
      3: "re:Post is the free community service available to all.",
      4: "A designated Technical Account Manager is an Enterprise Support feature.",
    },
    domain: 4, task: "4.3", topic: "AWS Support plans"
  },
  {
    q: "Which factor determines the response time a customer can expect from AWS Support?",
    choices: [
      "The support plan and the severity of the case",
      "The AWS Region the resources run in",
      "The customer's monthly spend alone",
      "The number of IAM users in the account",
    ],
    answer: 0,
    explain: "Each support plan publishes target response times by case severity, from general guidance down to business-critical outages on the higher tiers.",
    why_others_are_not_correct: {
      1: "Region does not affect support responsiveness.",
      2: "Spend does not by itself set response targets; the plan does.",
      3: "Account size has no bearing on support.",
    },
    domain: 4, task: "4.3", topic: "AWS Support response times"
  },
  {
    q: "Who should you contact to report suspected abuse of AWS resources, such as a system sending spam?",
    choices: [
      "The AWS Trust and Safety team",
      "Your AWS account manager",
      "AWS Professional Services",
      "AWS Marketplace support",
    ],
    answer: 0,
    explain: "The AWS Trust and Safety team handles abuse reports, including spam, port scanning, and malware hosted on AWS resources.",
    why_others_are_not_correct: {
      1: "Account managers handle the commercial relationship.",
      2: "Professional Services delivers consulting engagements.",
      3: "Marketplace support handles software purchases.",
    },
    domain: 4, task: "4.3", topic: "AWS Trust and Safety"
  },
  {
    q: "Where can a customer ask technical questions and get answers from the AWS community at no cost?",
    choices: [
      "AWS re:Post",
      "AWS Support cases on the Basic plan",
      "AWS Artifact",
      "AWS Professional Services",
    ],
    answer: 0,
    explain: "AWS re:Post is the community question and answer service, replacing the older AWS Forums. It is free to use.",
    why_others_are_not_correct: {
      1: "Basic Support does not include technical support cases.",
      2: "Artifact hosts compliance reports.",
      3: "Professional Services is a paid consulting engagement.",
    },
    domain: 4, task: "4.3", topic: "AWS re:Post and documentation"
  },
];
