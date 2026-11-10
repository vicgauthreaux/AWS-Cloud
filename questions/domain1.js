/* CLF-C02 Domain 1: Cloud Concepts (24% of the exam)
   60 questions covering task statements 1.1, 1.2, 1.3, 1.4
   Format matches the original class bank, so new questions can be
   appended by hand in exactly the same shape. */
window.quizBanks = window.quizBanks || {};
window.quizBanks.domain1 = [
  {
    q: "A business wants to test new ideas quickly without long-term hardware commitments. Which AWS benefit supports this?",
    choices: [
      "Reduced agility",
      "Stop guessing capacity",
      "Increased capital investment",
      "Limited scalability",
    ],
    answer: 1,
    explain: "With AWS, you can provision and deprovision capacity as needed, avoiding capacity guesswork and fostering rapid experimentation.",
    why_others_are_not_correct: {
      0: "AWS improves agility, not reduces it.",
      2: "AWS replaces large capital investments with pay-as-you-go pricing.",
      3: "AWS provides near-infinite scalability, not limited scalability.",
    },
    domain: 1, task: "1.1", topic: "Agility"
  },
  {
    q: "Which of the following scenarios demonstrates agility in the AWS Cloud?",
    choices: [
      "A business can provision hundreds of servers in minutes for a new product launch.",
      "A company builds a physical data center in a new country to support users there.",
      "A team purchases hardware months in advance for predictable workloads.",
      "A developer manually installs software updates on all company servers.",
    ],
    answer: 0,
    explain: "Agility refers to how quickly resources can be provisioned and deployed. AWS lets users launch servers within minutes to respond to new opportunities.",
    why_others_are_not_correct: {
      1: "Building a physical data center reduces agility by adding delays.",
      2: "Buying hardware in advance increases cost and reduces flexibility.",
      3: "Manual updates slow down agility and risk inconsistency.",
    },
    domain: 1, task: "1.1", topic: "Agility"
  },
  {
    q: "What is the difference between availability and durability?",
    choices: [
      "Availability is whether you can reach the data right now; durability is whether the data still exists",
      "Availability is whether the data still exists; durability is whether you can reach it",
      "They mean the same thing",
      "Availability applies to storage and durability applies to compute",
    ],
    answer: 0,
    explain: "A service can be temporarily unreachable without any data being lost. S3 Standard, for example, is designed for eleven nines of durability and a lower availability figure.",
    why_others_are_not_correct: {
      1: "This reverses the two terms.",
      2: "They measure different properties and are quoted separately.",
      3: "Both are storage concepts; compute uses different measures.",
    },
    domain: 1, task: "1.1", topic: "Availability vs durability"
  },
  {
    q: "A company wants to increase revenue and reduce risk by migrating to AWS. Which AWS resource helps them plan this migration?",
    choices: [
      "AWS Trusted Advisor",
      "AWS Cloud Adoption Framework (CAF)",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
    ],
    answer: 1,
    explain: "The AWS Cloud Adoption Framework provides guidance for migration by aligning technology and business goals.",
    why_others_are_not_correct: {
      0: "Trusted Advisor focuses on cost, performance, and security recommendations.",
      2: "Cost Explorer analyzes spending but not migration strategies.",
      3: "Pricing Calculator estimates costs, not migration planning.",
    },
    domain: 1, task: "1.1", topic: "Cloud value proposition"
  },
  {
    q: "Which type of cloud deployment model allows a company to connect its on-premises infrastructure with AWS resources?",
    choices: [
      "Private cloud",
      "Hybrid cloud",
      "Public cloud",
      "Distributed cloud",
    ],
    answer: 1,
    explain: "A hybrid cloud combines on-premises resources with cloud environments, allowing seamless integration and flexibility.",
    why_others_are_not_correct: {
      0: "A private cloud operates entirely on-premises.",
      2: "A public cloud runs entirely in AWS without local integration.",
      3: "Distributed cloud isn't an AWS deployment term.",
    },
    domain: 1, task: "1.1", topic: "Deployment models"
  },
  {
    q: "Which cloud advantage describes AWS passing lower infrastructure costs on to customers as its customer base grows?",
    choices: [
      "Benefit from massive economies of scale",
      "Stop guessing capacity",
      "Go global in minutes",
      "Increase speed and agility",
    ],
    answer: 0,
    explain: "Because AWS aggregates usage from hundreds of thousands of customers, it achieves higher purchasing power than any single organization and has lowered prices many times.",
    why_others_are_not_correct: {
      1: "Stop guessing capacity is about scaling to demand rather than over-provisioning hardware.",
      2: "Go global in minutes is about deploying to new Regions quickly.",
      3: "Increase speed and agility is about how fast new resources become available.",
    },
    domain: 1, task: "1.1", topic: "Economies of scale"
  },
  {
    q: "Which scenario best demonstrates cloud elasticity?",
    choices: [
      "A company overprovisions hardware for holiday traffic",
      "An EC2 Auto Scaling group adds more instances when demand spikes",
      "A customer manually adds servers for new users",
      "A company runs the same number of servers year-round",
    ],
    answer: 1,
    explain: "Elasticity allows AWS resources to automatically scale up or down based on demand - like EC2 Auto Scaling handling peak loads.",
    why_others_are_not_correct: {
      0: "Overprovisioning wastes resources instead of scaling dynamically.",
      2: "Manual scaling lacks elasticity.",
      3: "Fixed server counts ignore fluctuating demand.",
    },
    domain: 1, task: "1.1", topic: "Elasticity"
  },
  {
    q: "A media company needs to scale its video streaming service automatically as traffic increases. Which AWS feature enables this?",
    choices: [
      "AWS Auto Scaling",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon Inspector",
    ],
    answer: 0,
    explain: "AWS Auto Scaling automatically adjusts compute capacity to maintain performance at the lowest possible cost.",
    why_others_are_not_correct: {
      1: "IAM manages access control, not scaling.",
      2: "CloudTrail logs API activity, not scaling operations.",
      3: "Inspector analyzes security vulnerabilities, not traffic scaling.",
    },
    domain: 1, task: "1.1", topic: "Elasticity"
  },
  {
    q: "Which AWS concept describes the ability to scale resources up and down automatically to meet changing demand?",
    choices: [
      "Global availability",
      "Elasticity",
      "Performance efficiency",
      "Reliability",
    ],
    answer: 1,
    explain: "Elasticity refers to the ability to automatically add or remove resources based on workload changes, optimizing cost and performance.",
    why_others_are_not_correct: {
      0: "Global availability refers to AWS's geographic reach, not scaling.",
      2: "Performance efficiency focuses on resource use, not scaling behavior.",
      3: "Reliability ensures uptime, not scalability.",
    },
    domain: 1, task: "1.1", topic: "Elasticity"
  },
  {
    q: "A startup wants to deploy an application globally within minutes without building new data centers. Which AWS cloud benefit makes this possible?",
    choices: [
      "Massive economies of scale",
      "Increased hardware ownership",
      "Go global in minutes",
      "Reduced elasticity",
    ],
    answer: 2,
    explain: "AWS Regions and Availability Zones allow global deployment within minutes, improving latency and user experience worldwide.",
    why_others_are_not_correct: {
      0: "Economies of scale refer to cost savings, not deployment speed.",
      1: "AWS eliminates the need for hardware ownership.",
      3: "AWS enhances elasticity, allowing quick scaling up or down.",
    },
    domain: 1, task: "1.1", topic: "Global reach"
  },
  {
    q: "Which design choice MOST improves the availability of a web application running on AWS?",
    choices: [
      "Running instances in at least two Availability Zones behind a load balancer",
      "Running one very large instance instead of several small ones",
      "Storing all data on the instance's local disk",
      "Disabling health checks to avoid unnecessary restarts",
    ],
    answer: 0,
    explain: "Spreading across Availability Zones removes the single point of failure, and the load balancer stops sending traffic to any instance that fails its health check.",
    why_others_are_not_correct: {
      1: "One large instance is still one point of failure.",
      2: "Local instance storage is lost when the instance stops and ties data to one host.",
      3: "Health checks are what let the system route around failure.",
    },
    domain: 1, task: "1.1", topic: "High availability"
  },
  {
    q: "A company uses Amazon RDS instead of managing its own database servers. Which AWS benefit does this demonstrate?",
    choices: [
      "Increased manual administration",
      "Managed services reduce operational overhead",
      "Greater capital expenses",
      "Limited scalability",
    ],
    answer: 1,
    explain: "Amazon RDS is a managed service that handles backups, patching, and scaling, allowing teams to focus on application development instead of maintenance.",
    why_others_are_not_correct: {
      0: "Managed services reduce, not increase, manual administration.",
      2: "Using managed services lowers capital expenditure through pay-as-you-go pricing.",
      3: "Managed services enhance scalability.",
    },
    domain: 1, task: "1.1", topic: "Managed services"
  },
  {
    q: "Which statement best distinguishes scalability from elasticity?",
    choices: [
      "Scalability is the ability to grow; elasticity is growing and shrinking automatically with demand",
      "Scalability is automatic; elasticity requires manual action",
      "They are different words for the same capability",
      "Scalability applies to storage only; elasticity applies to compute only",
    ],
    answer: 0,
    explain: "A system is scalable if it can handle more load when you add resources. It is elastic if it adds and removes those resources on its own as demand rises and falls.",
    why_others_are_not_correct: {
      1: "This reverses them; elasticity is the automatic one.",
      2: "Elasticity is a specific form of scaling that works in both directions automatically.",
      3: "Both concepts apply across resource types.",
    },
    domain: 1, task: "1.1", topic: "Scalability vs elasticity"
  },
  {
    q: "Which of the following best describes one of the six key advantages of cloud computing?",
    choices: [
      "Reduced global reach and agility",
      "The ability to trade fixed expense for variable expense",
      "Higher upfront capital expenditure",
      "Manual scaling of resources",
    ],
    answer: 1,
    explain: "AWS allows organizations to replace large upfront costs with variable, pay-as-you-go expenses that scale with demand.",
    why_others_are_not_correct: {
      0: "Cloud computing increases global reach and agility, not reduces them.",
      2: "One of the benefits of cloud computing is avoiding high upfront capital expenses.",
      3: "Scaling in AWS is automated and elastic, not manual.",
    },
    domain: 1, task: "1.1", topic: "Six advantages of the cloud"
  },
  {
    q: "Which TWO of the following are advantages of cloud computing described by AWS? (Choose TWO.)",
    choices: [
      "Trade capital expense for variable expense",
      "Go global in minutes",
      "Guaranteed zero downtime",
      "Eliminate the need for any security configuration",
      "Remove all software licensing costs",
    ],
    answer: [0, 1],
    explain: "The six advantages are: trade capital expense for variable expense, benefit from massive economies of scale, stop guessing capacity, increase speed and agility, stop spending money running and maintaining data centers, and go global in minutes.",
    why_others_are_not_correct: {
      2: "AWS publishes service level agreements, but no provider guarantees zero downtime.",
      3: "Security configuration remains a customer responsibility under the shared responsibility model.",
      4: "Licensing costs still apply to commercial software.",
    },
    domain: 1, task: "1.1", topic: "Six advantages of the cloud"
  },
  {
    q: "A retailer used to buy servers sized for Black Friday and leave them idle the rest of the year. Which cloud advantage solves this?",
    choices: [
      "Stop guessing capacity",
      "Benefit from massive economies of scale",
      "Stop spending money running and maintaining data centers",
      "Go global in minutes",
    ],
    answer: 0,
    explain: "In the cloud you scale up for the peak and back down afterward, so you pay for the capacity you actually use instead of buying for the worst case.",
    why_others_are_not_correct: {
      1: "Economies of scale is about AWS's purchasing power lowering unit prices.",
      2: "That advantage is about not operating facilities at all.",
      3: "That advantage is about geographic reach, not capacity sizing.",
    },
    domain: 1, task: "1.1", topic: "Stop guessing capacity"
  },
  {
    q: "Which AWS tool helps ensure architectures align with best practices for operational excellence, reliability, and cost optimization?",
    choices: [
      "AWS Well-Architected Tool",
      "AWS Budgets",
      "AWS Cloud9",
      "AWS Organizations",
    ],
    answer: 0,
    explain: "The AWS Well-Architected Tool evaluates workloads against the five pillars of the Well-Architected Framework to identify improvements.",
    why_others_are_not_correct: {
      1: "AWS Budgets tracks spending, not architectural quality.",
      2: "Cloud9 is an IDE for coding, not architecture assessment.",
      3: "AWS Organizations manages accounts, not architectural design.",
    },
    domain: 1, task: "1.2", topic: "AWS Well-Architected Tool"
  },
  {
    q: "What does the AWS Well-Architected Tool do?",
    choices: [
      "Reviews your workload against the framework's best practices and highlights risks",
      "Automatically rebuilds your architecture",
      "Provisions resources from a template",
      "Monitors application performance in real time",
    ],
    answer: 0,
    explain: "The tool walks you through questions about a workload and produces a report of high and medium risk items with improvement suggestions. You decide what to act on.",
    why_others_are_not_correct: {
      1: "It advises; it does not change your architecture.",
      2: "That is AWS CloudFormation.",
      3: "That is Amazon CloudWatch.",
    },
    domain: 1, task: "1.2", topic: "AWS Well-Architected Tool"
  },
  {
    q: "A review finds several oversized EC2 instances running at 5 percent CPU. Which Well-Architected pillar does this finding belong to?",
    choices: [
      "Cost optimization",
      "Security",
      "Reliability",
      "Operational excellence",
    ],
    answer: 0,
    explain: "Paying for capacity you are not using is the textbook cost optimization finding, usually resolved by rightsizing or moving to a different purchase option.",
    why_others_are_not_correct: {
      1: "Security concerns protection of data and systems.",
      2: "Reliability concerns recovery and meeting demand.",
      3: "Operational excellence concerns processes and monitoring.",
    },
    domain: 1, task: "1.2", topic: "Cost optimization pillar"
  },
  {
    q: "Which AWS design principle emphasizes reducing human error through automation?",
    choices: [
      "Use disposable resources",
      "Automate to make architectural experimentation easier",
      "Enable traceability",
      "Stop spending money running data centers",
    ],
    answer: 1,
    explain: "Automation in AWS allows faster experimentation and minimizes manual intervention, a principle in the Well-Architected Framework.",
    why_others_are_not_correct: {
      0: "Disposable resources refer to replacing failed components, not automation.",
      2: "Traceability tracks system changes but doesn't reduce manual effort.",
      3: "That statement relates to cost optimization, not automation.",
    },
    domain: 1, task: "1.2", topic: "Design principles"
  },
  {
    q: "Which AWS design principle advises you to treat servers as replaceable rather than repairing them in place?",
    choices: [
      "Design for failure and treat resources as disposable",
      "Scale vertically whenever possible",
      "Keep servers running as long as possible",
      "Manage infrastructure manually for accuracy",
    ],
    answer: 0,
    explain: "In the cloud, replacing an unhealthy instance is faster and more reliable than diagnosing and repairing it. Auto Scaling does exactly this automatically.",
    why_others_are_not_correct: {
      1: "AWS favors scaling out across many instances rather than up into one larger one.",
      2: "Long-lived servers accumulate configuration drift.",
      3: "Manual management introduces human error; automation is preferred.",
    },
    domain: 1, task: "1.2", topic: "Design principles"
  },
  {
    q: "Which practice reflects the AWS design principle of automating to make architectural experimentation easier?",
    choices: [
      "Using templates to create and destroy test environments on demand",
      "Keeping one long-lived environment that everyone shares",
      "Making all changes by hand so they can be reviewed",
      "Avoiding changes once a system is in production",
    ],
    answer: 0,
    explain: "If creating an environment is a scripted, repeatable action, trying an idea costs very little and you can throw the result away.",
    why_others_are_not_correct: {
      1: "A single shared environment limits experimentation and creates contention.",
      2: "Manual changes are slow and error-prone, which discourages experimentation.",
      3: "Avoiding change entirely prevents improvement.",
    },
    domain: 1, task: "1.2", topic: "Design principles"
  },
  {
    q: "Which pair of terms describes how much data a business can afford to lose and how quickly it must be back online?",
    choices: [
      "Recovery point objective and recovery time objective",
      "Service level agreement and service level objective",
      "Mean time between failures and mean time to repair",
      "Availability zone and Region",
    ],
    answer: 0,
    explain: "RPO is the acceptable amount of data loss measured in time, and RTO is the acceptable length of the outage. Together they drive the disaster recovery design you choose.",
    why_others_are_not_correct: {
      1: "SLAs and SLOs are commitments and targets, not recovery measures.",
      2: "Those are hardware reliability metrics.",
      3: "Those are infrastructure locations.",
    },
    domain: 1, task: "1.2", topic: "Disaster recovery"
  },
  {
    q: "What does fault tolerance mean for a workload?",
    choices: [
      "The workload keeps operating correctly even when a component fails",
      "The workload never experiences any component failure",
      "Failures are logged for later review",
      "The workload runs on the fastest available hardware",
    ],
    answer: 0,
    explain: "Fault tolerance is built in by assuming components will fail and designing so that one failing does not stop the system, usually through redundancy.",
    why_others_are_not_correct: {
      1: "No design prevents all failure; the point is surviving it.",
      2: "Logging records failure but does not keep the system running.",
      3: "Hardware speed is a performance concern, not fault tolerance.",
    },
    domain: 1, task: "1.2", topic: "Fault tolerance"
  },
  {
    q: "Why is loose coupling recommended when designing cloud architectures?",
    choices: [
      "A failure in one component is less likely to take down the whole application",
      "It reduces the number of AWS services needed",
      "It removes the need for monitoring",
      "It guarantees lower cost in every case",
    ],
    answer: 0,
    explain: "When components talk through a queue or a load balancer instead of directly, one failing piece does not cascade. The rest keeps working or queues up work until it recovers.",
    why_others_are_not_correct: {
      1: "Loose coupling often introduces additional services such as SQS.",
      2: "Monitoring is still essential.",
      3: "Cost depends on the design; loose coupling is about resilience.",
    },
    domain: 1, task: "1.2", topic: "Loose coupling"
  },
  {
    q: "Which Well-Architected pillar covers running workloads effectively, monitoring them, and continuously improving procedures?",
    choices: [
      "Operational excellence",
      "Reliability",
      "Performance efficiency",
      "Cost optimization",
    ],
    answer: 0,
    explain: "Operational excellence is about how you run and evolve the system day to day: automating changes, responding to events, and refining runbooks.",
    why_others_are_not_correct: {
      1: "Reliability is about recovering from failure and meeting demand.",
      2: "Performance efficiency is about using resources well as requirements change.",
      3: "Cost optimization is about avoiding unnecessary spend.",
    },
    domain: 1, task: "1.2", topic: "Operational excellence pillar"
  },
  {
    q: "Which Well-Architected pillar is concerned with using computing resources efficiently and maintaining that efficiency as demand and technology change?",
    choices: [
      "Performance efficiency",
      "Operational excellence",
      "Sustainability",
      "Reliability",
    ],
    answer: 0,
    explain: "Performance efficiency asks whether you are using the right resource types and sizes, and whether you re-evaluate as AWS releases new options.",
    why_others_are_not_correct: {
      1: "Operational excellence covers processes and monitoring.",
      2: "Sustainability covers environmental impact, though it overlaps.",
      3: "Reliability covers failure recovery.",
    },
    domain: 1, task: "1.2", topic: "Performance efficiency pillar"
  },
  {
    q: "Which pillar of the AWS Well-Architected Framework focuses on using computing resources efficiently to meet system requirements?",
    choices: [
      "Operational Excellence",
      "Performance Efficiency",
      "Reliability",
      "Cost Optimization",
    ],
    answer: 1,
    explain: "Performance Efficiency emphasizes using resources efficiently and adapting to changing technologies and demand.",
    why_others_are_not_correct: {
      0: "Operational Excellence focuses on operations and monitoring improvements.",
      2: "Reliability focuses on recovery and fault tolerance.",
      3: "Cost Optimization aims at minimizing expenses, not performance.",
    },
    domain: 1, task: "1.2", topic: "Well-Architected pillars"
  },
  {
    q: "How many pillars does the AWS Well-Architected Framework have?",
    choices: [
      "Six",
      "Four",
      "Five",
      "Eight",
    ],
    answer: 0,
    explain: "Operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. Sustainability was added in 2021, so older study material says five.",
    why_others_are_not_correct: {
      1: "Four is the number of exam domains, not framework pillars.",
      2: "Five was correct before the sustainability pillar was added.",
      3: "There is no eighth pillar.",
    },
    domain: 1, task: "1.2", topic: "Well-Architected pillars"
  },
  {
    q: "A company wants to reduce the environmental impact of its cloud workloads. Which Well-Architected pillar addresses this?",
    choices: [
      "Sustainability",
      "Cost optimization",
      "Operational excellence",
      "Reliability",
    ],
    answer: 0,
    explain: "The sustainability pillar covers minimizing the environmental effects of running cloud workloads, for example by rightsizing and choosing efficient Regions and instance types.",
    why_others_are_not_correct: {
      1: "Cost optimization is about spending, though the two often overlap.",
      2: "Operational excellence is about running and monitoring systems well.",
      3: "Reliability is about recovering from failure.",
    },
    domain: 1, task: "1.2", topic: "Well-Architected pillars"
  },
  {
    q: "Which pillar focuses on the ability of a workload to recover from failures and meet demand?",
    choices: [
      "Reliability",
      "Performance efficiency",
      "Security",
      "Operational excellence",
    ],
    answer: 0,
    explain: "Reliability covers recovery planning, handling failure automatically, and scaling to meet demand without disruption.",
    why_others_are_not_correct: {
      1: "Performance efficiency is about using resources efficiently as demand changes.",
      2: "Security protects data and systems.",
      3: "Operational excellence is about running and improving processes.",
    },
    domain: 1, task: "1.2", topic: "Well-Architected pillars"
  },
  {
    q: "Which of these is one of the six perspectives of the AWS Cloud Adoption Framework?",
    choices: [
      "Governance",
      "Networking",
      "Storage",
      "Billing",
    ],
    answer: 0,
    explain: "The six perspectives are business, people, governance, platform, security, and operations. Three are business-focused and three are technical.",
    why_others_are_not_correct: {
      1: "Networking is a technology area, not a CAF perspective.",
      2: "Storage is a service category.",
      3: "Billing is a cost management topic.",
    },
    domain: 1, task: "1.3", topic: "AWS CAF perspectives"
  },
  {
    q: "What is the purpose of the AWS Cloud Adoption Framework?",
    choices: [
      "To help an organization plan and structure its move to the cloud across business and technical areas",
      "To automatically migrate servers to AWS",
      "To calculate the monthly AWS bill",
      "To monitor running workloads",
    ],
    answer: 0,
    explain: "AWS CAF organizes cloud adoption into six perspectives: business, people, governance, platform, security, and operations. It is a planning framework, not a tool.",
    why_others_are_not_correct: {
      1: "Migration tooling is separate, such as AWS Application Migration Service.",
      2: "Billing is handled by AWS Cost Management tools.",
      3: "Monitoring is CloudWatch.",
    },
    domain: 1, task: "1.3", topic: "AWS Cloud Adoption Framework"
  },
  {
    q: "Which service automates and accelerates moving large amounts of file data between on-premises storage and AWS over the network?",
    choices: [
      "AWS DataSync",
      "AWS Snowball",
      "AWS Backup",
      "Amazon S3 Glacier",
    ],
    answer: 0,
    explain: "DataSync handles scheduled, automated network transfers of file and object data, taking care of encryption, verification, and retries.",
    why_others_are_not_correct: {
      1: "Snowball is physical shipment rather than network transfer.",
      2: "AWS Backup protects AWS resources rather than migrating on-premises data.",
      3: "Glacier is an archival storage class.",
    },
    domain: 1, task: "1.3", topic: "AWS DataSync"
  },
  {
    q: "Which AWS service family physically ships storage devices to a customer site for transferring large data sets into AWS?",
    choices: [
      "AWS Snow Family",
      "AWS DataSync",
      "AWS Direct Connect",
      "Amazon S3 Transfer Acceleration",
    ],
    answer: 0,
    explain: "The Snow Family, including Snowball Edge, ships ruggedized devices you load locally and return to AWS, which is faster than the network for very large transfers.",
    why_others_are_not_correct: {
      1: "DataSync transfers over the network, not by shipping devices.",
      2: "Direct Connect is a dedicated network link.",
      3: "Transfer Acceleration speeds internet uploads to S3.",
    },
    domain: 1, task: "1.3", topic: "AWS Snow Family"
  },
  {
    q: "A company has an on-premises data center and wants to gradually migrate an application to AWS, but keep full control of the operating system, runtime, and application code. Which AWS compute model fits best for the initial lift-and-shift phase?",
    choices: [
      "Serverless functions (Lambda)",
      "Containers (Fargate)",
      "Managed database service (RDS)",
      "Virtual machines (EC2) in AWS",
    ],
    answer: 3,
    explain: "Using EC2 virtual machines in AWS provides the same VM model as on-premises: you retain control of OS, runtime, and application code. This makes it suitable for an initial lift-and-shift migration.",
    why_others_are_not_correct: {
      0: "Serverless functions abstract away OS/runtime control, so not suitable if you need full control.",
      1: "Containers (Fargate) still introduce abstraction and may require architectural changes.",
      2: "Managed database service (RDS) addresses database workloads, not application infrastructure migration.",
    },
    domain: 1, task: "1.3", topic: "Hybrid and migration"
  },
  {
    q: "What does a hybrid cloud deployment mean?",
    choices: [
      "Some resources run on AWS and some remain on-premises, connected together",
      "Resources run in two different AWS Regions",
      "All resources run on AWS",
      "All resources run on-premises",
    ],
    answer: 0,
    explain: "Hybrid connects an on-premises environment to AWS, usually over Direct Connect or a VPN. Companies often run this way during a phased migration.",
    why_others_are_not_correct: {
      1: "Using two Regions is still entirely cloud.",
      2: "That is an all-in cloud deployment.",
      3: "That is a purely on-premises deployment.",
    },
    domain: 1, task: "1.3", topic: "Hybrid cloud"
  },
  {
    q: "A company in a phased migration needs a private, consistent-bandwidth connection between its data center and AWS. Which service provides it?",
    choices: [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN over the internet",
      "Amazon CloudFront",
      "AWS Snowball",
    ],
    answer: 0,
    explain: "Direct Connect is a dedicated physical link. It delivers more consistent throughput and latency than a VPN tunnel over the public internet, which matters for steady hybrid traffic.",
    why_others_are_not_correct: {
      1: "A VPN works but rides the public internet, so performance varies.",
      2: "CloudFront caches content for end users.",
      3: "Snowball is one-off physical data transfer.",
    },
    domain: 1, task: "1.3", topic: "Hybrid connectivity"
  },
  {
    q: "An organization plans to migrate to AWS to reduce business risk and improve efficiency. Which AWS resource provides strategic guidance for this transition?",
    choices: [
      "AWS Migration Hub",
      "AWS Cloud Adoption Framework (CAF)",
      "AWS CloudFormation",
      "AWS CodePipeline",
    ],
    answer: 1,
    explain: "The AWS Cloud Adoption Framework helps organizations plan migrations through structured perspectives on business, people, governance, and technology.",
    why_others_are_not_correct: {
      0: "Migration Hub tracks migration progress but doesn't provide strategic planning.",
      2: "CloudFormation automates resource deployment, not migration strategy.",
      3: "CodePipeline manages CI/CD workflows, not migration planning.",
    },
    domain: 1, task: "1.3", topic: "Migration benefits"
  },
  {
    q: "Which is a business benefit a company would typically expect from migrating to AWS?",
    choices: [
      "Shifting IT spend from capital expenditure to operating expenditure",
      "Eliminating the need for any IT staff",
      "Removing all security responsibilities",
      "Guaranteeing that costs always decrease",
    ],
    answer: 0,
    explain: "Buying capacity as a service converts large upfront hardware purchases into ongoing operating costs that track actual usage.",
    why_others_are_not_correct: {
      1: "Staff are still needed; their work shifts toward higher-value activities.",
      2: "Customers always retain responsibility for security in the cloud.",
      3: "Poorly managed cloud spend can exceed on-premises cost.",
    },
    domain: 1, task: "1.3", topic: "Migration benefits"
  },
  {
    q: "A company moves an application to EC2 with no changes to the application code. Which migration strategy is this?",
    choices: [
      "Rehosting, often called lift and shift",
      "Refactoring",
      "Repurchasing",
      "Retiring",
    ],
    answer: 0,
    explain: "Rehosting moves the workload as it is. It is usually the fastest route to the cloud, with optimization done afterwards.",
    why_others_are_not_correct: {
      1: "Refactoring means rewriting the application to use cloud-native services.",
      2: "Repurchasing means switching to a different product, often SaaS.",
      3: "Retiring means shutting the application down because it is no longer needed.",
    },
    domain: 1, task: "1.3", topic: "Migration strategies"
  },
  {
    q: "A company replaces its self-managed CRM with a software-as-a-service product during a cloud migration. Which strategy is this?",
    choices: [
      "Repurchasing",
      "Rehosting",
      "Replatforming",
      "Retaining",
    ],
    answer: 0,
    explain: "Repurchasing means moving to a different product entirely, typically swapping a self-hosted application for a SaaS equivalent.",
    why_others_are_not_correct: {
      1: "Rehosting keeps the same application and moves it as is.",
      2: "Replatforming makes some optimizations without changing the core architecture.",
      3: "Retaining means leaving the workload where it is for now.",
    },
    domain: 1, task: "1.3", topic: "Migration strategies"
  },
  {
    q: "A company moves a self-managed MySQL database to Amazon RDS without changing the application. Which strategy best describes this?",
    choices: [
      "Replatforming",
      "Rehosting",
      "Refactoring",
      "Retiring",
    ],
    answer: 0,
    explain: "Replatforming, sometimes called lift and reshape, makes targeted improvements such as moving to a managed database, without rewriting the application.",
    why_others_are_not_correct: {
      1: "Rehosting would put MySQL on an EC2 instance unchanged.",
      2: "Refactoring would mean rearchitecting the application itself.",
      3: "Retiring means decommissioning.",
    },
    domain: 1, task: "1.3", topic: "Migration strategies"
  },
  {
    q: "A company rewrites a monolithic application into microservices running on AWS Lambda during its migration. Which strategy is this?",
    choices: [
      "Refactoring",
      "Rehosting",
      "Replatforming",
      "Repurchasing",
    ],
    answer: 0,
    explain: "Refactoring, sometimes called rearchitecting, means changing how the application is built to take advantage of cloud-native capabilities. It costs the most effort and usually returns the most benefit.",
    why_others_are_not_correct: {
      1: "Rehosting moves the application unchanged.",
      2: "Replatforming makes targeted optimizations without rearchitecting.",
      3: "Repurchasing means switching to a different product entirely.",
    },
    domain: 1, task: "1.3", topic: "Migration strategies"
  },
  {
    q: "During migration planning, a company identifies several applications nobody uses any more. Which strategy applies?",
    choices: [
      "Retiring",
      "Retaining",
      "Rehosting",
      "Replatforming",
    ],
    answer: 0,
    explain: "Retiring means turning the application off instead of moving it. Migration projects routinely find a meaningful share of the estate is simply no longer needed.",
    why_others_are_not_correct: {
      1: "Retaining means deliberately leaving it in place for now.",
      2: "Rehosting would move something that is not needed.",
      3: "Replatforming would invest effort in something not needed.",
    },
    domain: 1, task: "1.3", topic: "Migration strategies"
  },
  {
    q: "Which AWS service can help a company automate infrastructure provisioning and management using templates?",
    choices: [
      "AWS CloudFormation",
      "Amazon EC2",
      "AWS Trusted Advisor",
      "AWS Artifact",
    ],
    answer: 0,
    explain: "AWS CloudFormation automates resource deployment using infrastructure-as-code templates, improving consistency and efficiency.",
    why_others_are_not_correct: {
      1: "EC2 provides compute resources but doesn't automate infrastructure creation.",
      2: "Trusted Advisor gives recommendations, not provisioning.",
      3: "Artifact provides compliance reports, not infrastructure automation.",
    },
    domain: 1, task: "1.4", topic: "Automation and CloudFormation"
  },
  {
    q: "What is a key financial benefit of automating infrastructure provisioning with AWS CloudFormation?",
    choices: [
      "Environments can be torn down when not needed and rebuilt identically later",
      "CloudFormation templates reduce the price of EC2 instances",
      "Automation removes the need for a support plan",
      "Automated resources are not billed",
    ],
    answer: 0,
    explain: "If rebuilding is free and reliable, you can confidently delete a test environment at the end of the day instead of paying for it overnight.",
    why_others_are_not_correct: {
      1: "Instance prices are the same however they are created.",
      2: "Support plans are unrelated to automation.",
      3: "Resources are billed regardless of how they were provisioned.",
    },
    domain: 1, task: "1.4", topic: "Automation benefits"
  },
  {
    q: "How does automating infrastructure help control cloud costs?",
    choices: [
      "Resources can be shut down outside business hours and recreated reliably",
      "Automated resources are billed at a lower rate",
      "Automation removes the need to monitor spending",
      "Automated deployments qualify for Reserved Instance pricing",
    ],
    answer: 0,
    explain: "Non-production environments often sit idle most of the week. Automation makes turning them off safe, because recreating them is a known, repeatable operation.",
    why_others_are_not_correct: {
      1: "The rate is the same however a resource is created.",
      2: "Cost monitoring is still essential.",
      3: "Reserved pricing is a purchase commitment, unrelated to deployment method.",
    },
    domain: 1, task: "1.4", topic: "Automation benefits"
  },
  {
    q: "What does Bring Your Own License (BYOL) mean in AWS?",
    choices: [
      "Using software licenses you already own on AWS instead of paying for them in the hourly rate",
      "AWS provides all licenses for free",
      "You must buy new licenses for every AWS workload",
      "Licensing is never required in the cloud",
    ],
    answer: 0,
    explain: "BYOL lets you reuse existing licenses, which can save money if you already own them. The alternative is a license-included instance where the cost is built into the hourly price.",
    why_others_are_not_correct: {
      1: "License-included options exist but are not free; the cost is in the rate.",
      2: "BYOL exists precisely so you do not have to repurchase.",
      3: "Commercial software still requires licensing in the cloud.",
    },
    domain: 1, task: "1.4", topic: "Bring Your Own License"
  },
  {
    q: "Which cloud computing characteristic allows AWS customers to avoid buying physical hardware for short-term projects?",
    choices: [
      "Security by default",
      "Elasticity",
      "On-demand self-service",
      "Capital expenditure",
    ],
    answer: 2,
    explain: "On-demand self-service lets customers provision resources instantly as needed, eliminating the need for upfront hardware purchases.",
    why_others_are_not_correct: {
      0: "Security by default ensures protection, not provisioning.",
      1: "Elasticity allows scaling but doesn't directly handle resource creation.",
      3: "AWS minimizes capital expenditure by switching to operational costs.",
    },
    domain: 1, task: "1.4", topic: "Capital vs operating expense"
  },
  {
    q: "What does it mean to trade capital expense for variable expense?",
    choices: [
      "Paying for resources as you consume them instead of buying hardware upfront",
      "Paying a fixed annual fee instead of monthly",
      "Buying hardware at a discount",
      "Leasing equipment with a buyout at the end",
    ],
    answer: 0,
    explain: "Instead of a large purchase before the first user arrives, you pay for what you consume, which moves the cost into the operating budget and ties it to actual demand.",
    why_others_are_not_correct: {
      1: "A fixed annual fee is not variable.",
      2: "Discounted hardware is still a capital purchase.",
      3: "A lease with buyout is still a commitment to hardware.",
    },
    domain: 1, task: "1.4", topic: "Capital vs operating expense"
  },
  {
    q: "Why can AWS generally offer lower prices than a company running its own data center?",
    choices: [
      "AWS aggregates usage from many customers and passes on economies of scale",
      "AWS does not need to make a profit",
      "AWS uses older, cheaper hardware",
      "Cloud hardware is free to operate",
    ],
    answer: 0,
    explain: "Buying and operating infrastructure at enormous scale lowers the unit cost, and AWS has cut prices many times as a result.",
    why_others_are_not_correct: {
      1: "AWS is a commercial business.",
      2: "AWS continually refreshes to current-generation hardware.",
      3: "Power, cooling, and staffing all cost money.",
    },
    domain: 1, task: "1.4", topic: "Economies of scale"
  },
  {
    q: "A company holds existing Windows Server licenses with Software Assurance and wants to use them on AWS. Which approach applies?",
    choices: [
      "Bring Your Own License on a Dedicated Host",
      "Buying a license-included instance",
      "Using Spot Instances",
      "Using a Savings Plan",
    ],
    answer: 0,
    explain: "Licenses that are tied to physical hardware generally require Dedicated Hosts, which give the visibility into sockets and cores that this licensing model needs.",
    why_others_are_not_correct: {
      1: "A license-included instance means paying for the license again in the hourly rate.",
      2: "Spot is a purchasing option and does not address licensing.",
      3: "Savings Plans are a billing commitment, not a licensing mechanism.",
    },
    domain: 1, task: "1.4", topic: "Licensing"
  },
  {
    q: "What is the main economic argument for choosing a managed service such as Amazon RDS over self-managing the same software on EC2?",
    choices: [
      "Staff time moves from routine maintenance to work that differentiates the business",
      "Managed services are always cheaper per hour",
      "Managed services remove the need for backups",
      "Managed services do not count toward the monthly bill",
    ],
    answer: 0,
    explain: "The per-hour rate for a managed service is often higher, but patching, backups, and failover stop consuming engineer time. The saving is in labor, not the sticker price.",
    why_others_are_not_correct: {
      1: "The hourly rate is frequently higher than a comparable EC2 instance.",
      2: "Backups still happen; AWS simply runs them for you.",
      3: "Managed services are billed like any other service.",
    },
    domain: 1, task: "1.4", topic: "Managed service value"
  },
  {
    q: "A startup runs tests on AWS without worrying about large upfront investments or hardware maintenance. Which AWS principle enables this?",
    choices: [
      "Pay-as-you-go pricing",
      "Dedicated hosting",
      "Complex licensing",
      "Multi-year capital funding",
    ],
    answer: 0,
    explain: "AWS's pay-as-you-go model allows customers to pay only for what they use, eliminating upfront capital investment and hardware maintenance costs.",
    why_others_are_not_correct: {
      1: "Dedicated hosting increases cost and commitment.",
      2: "AWS simplifies licensing rather than making it complex.",
      3: "AWS eliminates the need for multi-year capital investments.",
    },
    domain: 1, task: "1.4", topic: "Pay-as-you-go"
  },
  {
    q: "Which of the following is an example of rightsizing in AWS?",
    choices: [
      "Turning off unused EC2 instances during off-hours",
      "Choosing smaller EC2 instance types that meet performance needs",
      "Running multiple EC2 instances to increase redundancy",
      "Purchasing more instances than required for growth",
    ],
    answer: 1,
    explain: "Rightsizing means matching instance types and sizes to your actual workload, improving efficiency and reducing cost.",
    why_others_are_not_correct: {
      0: "Turning off instances helps optimize cost, but rightsizing refers to selecting the appropriate size, not usage time.",
      2: "Adding redundancy increases reliability, not rightsizing.",
      3: "Overprovisioning increases cost and contradicts rightsizing.",
    },
    domain: 1, task: "1.4", topic: "Rightsizing"
  },
  {
    q: "What does rightsizing mean in cloud cost management?",
    choices: [
      "Matching instance types and sizes to the actual workload requirement",
      "Buying the largest instance available to avoid future problems",
      "Running every workload on the smallest instance",
      "Deleting unused AWS accounts",
    ],
    answer: 0,
    explain: "Rightsizing means measuring real utilization and then selecting the instance that fits. Over-provisioned instances are one of the most common sources of waste.",
    why_others_are_not_correct: {
      1: "Oversizing wastes money, which is the problem rightsizing solves.",
      2: "An undersized instance causes performance problems.",
      3: "Closing accounts is account management, not rightsizing.",
    },
    domain: 1, task: "1.4", topic: "Rightsizing"
  },
  {
    q: "Which AWS tool would you use FIRST to identify instances that are candidates for rightsizing?",
    choices: [
      "AWS Cost Explorer rightsizing recommendations",
      "AWS CloudFormation",
      "AWS Artifact",
      "Amazon Route 53",
    ],
    answer: 0,
    explain: "Cost Explorer analyzes historical utilization and produces specific recommendations, such as moving to a smaller instance type, with the projected saving.",
    why_others_are_not_correct: {
      1: "CloudFormation provisions infrastructure; it does not analyze utilization.",
      2: "Artifact provides compliance documents.",
      3: "Route 53 is DNS.",
    },
    domain: 1, task: "1.4", topic: "Rightsizing"
  },
  {
    q: "A healthcare company is comparing costs of on-premises vs AWS cloud. Which economic benefit supports cost savings on AWS?",
    choices: [
      "Paying for idle servers",
      "Economies of scale",
      "Fixed capital expenditure",
      "Manual infrastructure management",
    ],
    answer: 1,
    explain: "Economies of scale let AWS reduce costs as more customers use its services, passing savings to users.",
    why_others_are_not_correct: {
      0: "AWS avoids paying for idle resources through pay-as-you-go pricing.",
      2: "AWS replaces fixed CAPEX with variable OPEX.",
      3: "Infrastructure management is largely automated in AWS.",
    },
    domain: 1, task: "1.4", topic: "Total cost of ownership"
  },
  {
    q: "Which cost is typically included when calculating the total cost of ownership of an on-premises data center but disappears in the cloud?",
    choices: [
      "Power, cooling, and physical facility costs",
      "Staff training",
      "Application licensing",
      "Help desk support",
    ],
    answer: 0,
    explain: "Facility costs are the classic hidden expense. They are real but rarely appear on an IT budget line, which is why on-premises costs are often underestimated.",
    why_others_are_not_correct: {
      1: "Training is still required for cloud skills.",
      2: "Software licensing still applies in the cloud.",
      3: "Users still need support.",
    },
    domain: 1, task: "1.4", topic: "Total cost of ownership"
  },
];
