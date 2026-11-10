/* CLF-C02 Domain 3: Cloud Technology and Services (34% of the exam)
   77 questions covering task statements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8
   Format matches the original class bank, so new questions can be
   appended by hand in exactly the same shape. */
window.quizBanks = window.quizBanks || {};
window.quizBanks.domain3 = [
  {
    q: "Which service gives you a browser-based command line, already authenticated to your AWS account, with no local installation?",
    choices: [
      "AWS CloudShell",
      "AWS Cloud9",
      "Amazon WorkSpaces",
      "AWS Systems Manager",
    ],
    answer: 0,
    explain: "CloudShell opens a shell right in the AWS Management Console with the CLI pre-installed and your credentials already in place. It is the fastest way to run a quick command.",
    why_others_are_not_correct: {
      1: "Cloud9 is a full cloud IDE for writing and debugging code.",
      2: "WorkSpaces provides virtual desktops for users.",
      3: "Systems Manager operates and patches fleets of instances.",
    },
    domain: 3, task: "3.1", topic: "AWS CloudShell"
  },
  {
    q: "What is AWS Elastic Beanstalk used for?",
    choices: [
      "Hosting websites directly from S3 buckets",
      "Running applications without managing infrastructure",
      "Streaming real-time data",
      "Delivering content via CDN",
    ],
    answer: 1,
    explain: "Elastic Beanstalk deploys and manages applications automatically, handling provisioning, load balancing, and scaling.",
    why_others_are_not_correct: {
      0: "Static hosting is done via Amazon S3, not Beanstalk.",
      2: "Amazon Kinesis handles real-time streaming.",
      3: "CloudFront delivers CDN content.",
    },
    domain: 3, task: "3.1", topic: "AWS Elastic Beanstalk"
  },
  {
    q: "Which service allows you to deploy and manage scalable web applications by automatically provisioning the environment including compute, load balancing, and auto-scaling?",
    choices: [
      "AWS Elastic Beanstalk",
      "Amazon EC2 Auto Scaling",
      "AWS CloudFormation",
      "AWS OpsWorks",
    ],
    answer: 0,
    explain: "AWS Elastic Beanstalk simplifies deployment and management of web applications by provisioning the necessary resources (compute, load balancing, auto-scaling) and allowing you to focus on code.",
    why_others_are_not_correct: {
      1: "EC2 Auto Scaling only manages scaling of EC2 instances; you still handle provisioning and orchestration.",
      2: "CloudFormation orchestrates resources via templates but you still manage resource definitions.",
      3: "OpsWorks is a configuration management service; it does not provide the fully managed app-platform experience Beanstalk does.",
    },
    domain: 3, task: "3.1", topic: "AWS Elastic Beanstalk"
  },
  {
    q: "Which service lets you apply operating system patches across a fleet of EC2 instances from one place?",
    choices: [
      "AWS Systems Manager",
      "AWS CloudFormation",
      "AWS Config",
      "Amazon Inspector",
    ],
    answer: 0,
    explain: "Systems Manager provides operational tooling such as Patch Manager, Session Manager, and Run Command for managing instances at scale.",
    why_others_are_not_correct: {
      1: "CloudFormation provisions infrastructure; it does not manage ongoing patching.",
      2: "Config tracks configuration state.",
      3: "Inspector finds vulnerabilities but does not remediate them.",
    },
    domain: 3, task: "3.1", topic: "AWS Systems Manager"
  },
  {
    q: "Which service lets you define your AWS infrastructure in a template file so the same environment can be created repeatedly?",
    choices: [
      "AWS CloudFormation",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
    ],
    answer: 0,
    explain: "CloudFormation is infrastructure as code. You describe the resources you want in a template, and AWS creates, updates, or deletes them as a single stack.",
    why_others_are_not_correct: {
      1: "Config records configuration; it does not provision resources.",
      2: "CloudWatch monitors resources.",
      3: "Trusted Advisor makes recommendations.",
    },
    domain: 3, task: "3.1", topic: "Infrastructure as code"
  },
  {
    q: "A team must build an identical test environment many times a week. Which approach is MOST appropriate?",
    choices: [
      "Define the environment in a CloudFormation template and deploy it on demand",
      "Click through the console each time and document the steps",
      "Take a screenshot of the console settings",
      "Email the configuration to each team member",
    ],
    answer: 0,
    explain: "A repeatable process belongs in code. The template removes human error, is version controlled, and tears the environment down as cleanly as it builds it.",
    why_others_are_not_correct: {
      1: "Manual steps drift and introduce mistakes, especially when repeated often.",
      2: "Screenshots are not executable.",
      3: "Email does not provision anything.",
    },
    domain: 3, task: "3.1", topic: "One-time vs repeatable"
  },
  {
    q: "Which three methods can be used to interact with AWS services?",
    choices: [
      "The AWS Management Console, the AWS CLI, and the AWS SDKs",
      "Only the AWS Management Console",
      "Only SSH and RDP",
      "Only AWS CloudFormation",
    ],
    answer: 0,
    explain: "The console is the web interface, the CLI drives AWS from a terminal or script, and the SDKs let your application code call AWS directly. All three hit the same API.",
    why_others_are_not_correct: {
      1: "The console is one option among several.",
      2: "SSH and RDP connect to instances; they do not manage AWS services.",
      3: "CloudFormation is one way to provision, not the only way to interact.",
    },
    domain: 3, task: "3.1", topic: "Ways to access AWS"
  },
  {
    q: "A company needs single-digit millisecond latency to users in a specific metropolitan area far from any AWS Region. Which option addresses this?",
    choices: [
      "AWS Local Zones",
      "A second Availability Zone",
      "Amazon S3 Transfer Acceleration",
      "AWS Snowball",
    ],
    answer: 0,
    explain: "Local Zones place compute and storage closer to large population centers, extending a Region to places that do not have one.",
    why_others_are_not_correct: {
      1: "Another zone in the same Region does not move you closer to that city.",
      2: "Transfer Acceleration speeds uploads to S3; it does not host applications.",
      3: "Snowball physically transfers data.",
    },
    domain: 3, task: "3.2", topic: "AWS Local Zones"
  },
  {
    q: "Which AWS offering runs AWS infrastructure physically inside a customer's own data center?",
    choices: [
      "AWS Outposts",
      "AWS Local Zones",
      "AWS Wavelength",
      "Amazon CloudFront",
    ],
    answer: 0,
    explain: "Outposts is a rack of AWS hardware installed on your premises, giving a consistent AWS experience for workloads that must stay on site for latency or data residency reasons.",
    why_others_are_not_correct: {
      1: "Local Zones are AWS-operated facilities near metro areas, not on your premises.",
      2: "Wavelength places infrastructure inside telecom 5G networks.",
      3: "CloudFront caches content at edge locations.",
    },
    domain: 3, task: "3.2", topic: "AWS Outposts"
  },
  {
    q: "Which offering embeds AWS compute and storage inside communications providers' 5G networks for mobile edge applications?",
    choices: [
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Direct Connect",
      "Amazon Route 53",
    ],
    answer: 0,
    explain: "Wavelength Zones sit inside carrier networks so traffic from a mobile device reaches the application without leaving the provider's network, which minimizes latency.",
    why_others_are_not_correct: {
      1: "Outposts is on the customer's premises.",
      2: "Direct Connect is a dedicated private link to a Region.",
      3: "Route 53 is DNS.",
    },
    domain: 3, task: "3.2", topic: "AWS Wavelength"
  },
  {
    q: "Which factors should influence the AWS Region a company selects?",
    choices: [
      "Latency to users, cost, compliance requirements, and service availability",
      "Only the price of EC2 instances",
      "Only the number of Availability Zones",
      "The company's postal address",
    ],
    answer: 0,
    explain: "Those four considerations are the standard list. Prices differ by Region, not every service launches everywhere at once, and data residency law may force a specific Region.",
    why_others_are_not_correct: {
      1: "Cost matters but is one of several factors.",
      2: "Zone count alone ignores latency, compliance, and services.",
      3: "Your address does not determine the best Region for your users.",
    },
    domain: 3, task: "3.2", topic: "Choosing a Region"
  },
  {
    q: "What is an AWS edge location used for?",
    choices: [
      "Caching content close to end users to reduce latency",
      "Running large database clusters",
      "Storing archival backups for ten years",
      "Hosting the AWS Management Console",
    ],
    answer: 0,
    explain: "Edge locations are the points of presence used by CloudFront and other edge services to serve cached content from somewhere near the user. There are many more edge locations than Regions.",
    why_others_are_not_correct: {
      1: "Databases run in Regions, not at edge locations.",
      2: "Archival storage is Amazon S3 Glacier in a Region.",
      3: "The console is a Region-based service.",
    },
    domain: 3, task: "3.2", topic: "Edge locations"
  },
  {
    q: "Which TWO statements about AWS Regions and Availability Zones are correct? (Choose TWO.)",
    choices: [
      "A Region contains multiple, physically separate Availability Zones",
      "Availability Zones within a Region are connected by high-bandwidth, low-latency links",
      "An Availability Zone always spans several Regions",
      "All AWS services are available in every Region",
      "Data is automatically replicated between Regions by default",
    ],
    answer: [0, 1],
    explain: "Each Region is made up of isolated Availability Zones with independent power and cooling, linked to each other by fast private connections so you can run synchronously across them.",
    why_others_are_not_correct: {
      2: "An Availability Zone belongs to exactly one Region.",
      3: "Service availability varies by Region, especially for newer services.",
      4: "Cross-Region replication is something you configure deliberately.",
    },
    domain: 3, task: "3.2", topic: "Global infrastructure"
  },
  {
    q: "An organization needs to deploy workloads in multiple countries while maintaining low latency. Which AWS capability best supports this?",
    choices: [
      "Elastic Load Balancing",
      "AWS Global Infrastructure with multiple Regions",
      "Amazon CloudWatch",
      "AWS Systems Manager",
    ],
    answer: 1,
    explain: "AWS's global network of Regions and Availability Zones enables deploying resources closer to users worldwide to reduce latency.",
    why_others_are_not_correct: {
      0: "Elastic Load Balancing distributes traffic, but within a Region or AZ.",
      2: "CloudWatch monitors resources, not deploys them globally.",
      3: "Systems Manager manages configurations, not global distribution.",
    },
    domain: 3, task: "3.2", topic: "Regions and Availability Zones"
  },
  {
    q: "Why does AWS recommend deploying an application across multiple Availability Zones?",
    choices: [
      "To keep the application available if one Availability Zone fails",
      "To reduce the cost of the application",
      "To avoid needing a load balancer",
      "To make the application available in every country",
    ],
    answer: 0,
    explain: "Availability Zones are physically separate, with independent power, cooling, and networking. Spreading across two or more means a failure in one does not take the application down.",
    why_others_are_not_correct: {
      1: "Running in more zones generally costs more, not less.",
      2: "A load balancer is usually still required to distribute traffic.",
      3: "Global reach comes from using multiple Regions or edge locations.",
    },
    domain: 3, task: "3.2", topic: "Regions and Availability Zones"
  },
  {
    q: "Which AWS compute service allows you to run containers without managing servers?",
    choices: [
      "Amazon ECS with AWS Fargate",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon Lightsail",
    ],
    answer: 0,
    explain: "AWS Fargate lets you run containers on Amazon ECS without managing the underlying servers.",
    why_others_are_not_correct: {
      1: "EC2 requires managing servers yourself.",
      2: "Lambda runs functions, not containerized applications.",
      3: "Lightsail is for simple hosting, not container orchestration.",
    },
    domain: 3, task: "3.3", topic: "AWS Fargate"
  },
  {
    q: "Which AWS compute service is ideal for event-driven code execution without provisioning servers or containers?",
    choices: [
      "Amazon EC2",
      "AWS Fargate",
      "AWS Lambda",
      "Amazon Lightsail",
    ],
    answer: 2,
    explain: "AWS Lambda is a serverless compute service where you write code that runs in response to events, without managing servers or containers.",
    why_others_are_not_correct: {
      0: "EC2 requires you to manage servers (instances) yourself.",
      1: "Fargate manages containers but you still define tasks/containers.",
      3: "Lightsail is simplified virtual servers or containers, not purely event-driven serverless.",
    },
    domain: 3, task: "3.3", topic: "AWS Lambda"
  },
  {
    q: "What is Amazon EC2 primarily used for?",
    choices: [
      "Storing and retrieving files",
      "Running virtual servers in the cloud",
      "Analyzing large data sets",
      "Delivering static content",
    ],
    answer: 1,
    explain: "Amazon Elastic Compute Cloud (EC2) provides scalable compute capacity for running virtual machines in AWS.",
    why_others_are_not_correct: {
      0: "Amazon S3 is used for file storage.",
      2: "Amazon Athena or Redshift analyze data sets.",
      3: "CloudFront delivers static content.",
    },
    domain: 3, task: "3.3", topic: "Amazon EC2"
  },
  {
    q: "What AWS service allows developers to run virtual servers with a simplified management interface?",
    choices: [
      "Amazon Lightsail",
      "Amazon EC2",
      "AWS Fargate",
      "AWS Batch",
    ],
    answer: 0,
    explain: "Amazon Lightsail offers simplified virtual server deployment for small applications with predictable pricing.",
    why_others_are_not_correct: {
      1: "EC2 provides more granular control but is more complex.",
      2: "Fargate runs containers, not full servers.",
      3: "AWS Batch runs scheduled batch workloads.",
    },
    domain: 3, task: "3.3", topic: "Amazon Lightsail"
  },
  {
    q: "A new application must run continuously in the cloud, process user requests, and auto-scale based on traffic with minimal architectural effort. Which service combo delivers this with the least management overhead?",
    choices: [
      "EC2 instances + manual autoscaling",
      "Elastic Beanstalk environment with auto-scaling",
      "On-premises VMs connected to AWS",
      "Lambda functions triggered by HTTP requests",
    ],
    answer: 1,
    explain: "Elastic Beanstalk environment provides a PaaS layer: you deploy your application code and the platform handles provisioning, load balancing, auto-scaling - thus minimizing management overhead while supporting continuous processing of user requests.",
    why_others_are_not_correct: {
      0: "Requires manual configuration of autoscaling and infrastructure management.",
      2: "On-premises adds operational overhead and doesn't use native AWS auto-scaling capabilities fully.",
      3: "Lambda is suitable for event-driven or request-triggered functions, but less ideal for full continuously-running web applications that may maintain sessions or long-lived processes.",
    },
    domain: 3, task: "3.3", topic: "Compute selection"
  },
  {
    q: "If a developer wants to run multiple microservices packaged as containers and avoid managing the underlying servers, which AWS compute service should they choose?",
    choices: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Fargate",
      "AWS Batch",
    ],
    answer: 2,
    explain: "AWS Fargate is a serverless compute engine for containers that lets you run containers without managing servers or clusters - ideal for microservices packaged as containers.",
    why_others_are_not_correct: {
      0: "EC2 would require managing servers and containers manually.",
      1: "Lambda is for functions, not full container workloads (though technically supports containers but at a smaller scale).",
      3: "AWS Batch is for batch processing jobs, not necessarily microservice container architectures.",
    },
    domain: 3, task: "3.3", topic: "Container services"
  },
  {
    q: "What benefit does EC2 Auto Scaling provide?",
    choices: [
      "Automatically adjusts the number of instances based on demand",
      "Improves DNS resolution speed",
      "Encrypts data in transit",
      "Manages VPC routing tables",
    ],
    answer: 0,
    explain: "Auto Scaling dynamically adjusts EC2 capacity based on workload demand to maintain performance and control cost.",
    why_others_are_not_correct: {
      1: "DNS resolution is handled by Route 53.",
      2: "Encryption is handled by AWS KMS and security features.",
      3: "Routing tables are configured in VPC, not Auto Scaling.",
    },
    domain: 3, task: "3.3", topic: "EC2 Auto Scaling"
  },
  {
    q: "Which EC2 instance family would you choose for memory-intensive database workloads?",
    choices: [
      "Compute Optimized",
      "Memory Optimized",
      "Storage Optimized",
      "General Purpose",
    ],
    answer: 1,
    explain: "Memory Optimized instance families are designed for workloads that require large amounts of memory, such as in-memory databases, caching, and real-time big data processing.",
    why_others_are_not_correct: {
      0: "Compute Optimized is for CPU-intensive workloads.",
      2: "Storage Optimized is for high I/O workloads requiring lots of local storage.",
      3: "General Purpose is balanced but not specialized for high memory demands.",
    },
    domain: 3, task: "3.3", topic: "EC2 instance families"
  },
  {
    q: "Which EC2 instance type is best for compute-intensive tasks like gaming servers or scientific modeling?",
    choices: [
      "Compute Optimized",
      "Memory Optimized",
      "Storage Optimized",
      "General Purpose",
    ],
    answer: 0,
    explain: "Compute Optimized instances are designed for CPU-bound workloads requiring high-performance processors.",
    why_others_are_not_correct: {
      1: "Memory Optimized suits large in-memory databases.",
      2: "Storage Optimized suits heavy I/O workloads.",
      3: "General Purpose is balanced, not specialized for compute.",
    },
    domain: 3, task: "3.3", topic: "EC2 instance types"
  },
  {
    q: "What is the main difference between AWS Lambda and Amazon EC2?",
    choices: [
      "Lambda requires users to manage operating systems",
      "Lambda scales automatically without server management",
      "EC2 can only run short tasks",
      "EC2 is serverless",
    ],
    answer: 1,
    explain: "Lambda automatically scales and runs code without provisioning or managing servers, unlike EC2 which requires manual management.",
    why_others_are_not_correct: {
      0: "Lambda is managed by AWS, no OS management required.",
      2: "EC2 can run continuously for long workloads.",
      3: "EC2 is not serverless.",
    },
    domain: 3, task: "3.3", topic: "Lambda vs EC2"
  },
  {
    q: "Which TWO AWS services let you run workloads without provisioning or managing servers? (Choose TWO.)",
    choices: [
      "AWS Lambda",
      "AWS Fargate",
      "Amazon EC2",
      "Amazon Lightsail",
      "AWS Outposts",
    ],
    answer: [0, 1],
    explain: "Lambda runs your function on demand, and Fargate runs containers without you managing the underlying instances. Both are serverless compute options.",
    why_others_are_not_correct: {
      2: "EC2 instances are virtual servers you size, patch, and manage.",
      3: "Lightsail provides simplified virtual servers, but they are still servers.",
      4: "Outposts is physical AWS hardware in your own data center.",
    },
    domain: 3, task: "3.3", topic: "Serverless compute"
  },
  {
    q: "Which service helps migrate an on-premises database to AWS while the source database stays operational?",
    choices: [
      "AWS Database Migration Service",
      "AWS Snowball",
      "Amazon Redshift",
      "AWS DataSync",
    ],
    answer: 0,
    explain: "AWS DMS copies data to the target and keeps replicating changes, so you can cut over with minimal downtime.",
    why_others_are_not_correct: {
      1: "Snowball physically ships bulk data and is not a live database replication tool.",
      2: "Redshift is a destination for analytics data, not a migration service.",
      3: "DataSync moves file and object data, not database engines.",
    },
    domain: 3, task: "3.4", topic: "AWS DMS"
  },
  {
    q: "A company is moving from Oracle to Amazon Aurora PostgreSQL and needs to convert its schema and stored procedures. Which tool helps?",
    choices: [
      "AWS Schema Conversion Tool",
      "AWS Database Migration Service alone",
      "Amazon QuickSight",
      "AWS Glue",
    ],
    answer: 0,
    explain: "The Schema Conversion Tool converts database schemas and code between different engines. DMS then moves the data once the schema exists.",
    why_others_are_not_correct: {
      1: "DMS moves data but does not convert schema between different engine types.",
      2: "QuickSight is a business intelligence dashboard tool.",
      3: "Glue is an ETL service for analytics pipelines.",
    },
    domain: 3, task: "3.4", topic: "AWS SCT"
  },
  {
    q: "Which AWS database is MySQL and PostgreSQL compatible, built by AWS, and offers higher performance than the standard engines?",
    choices: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon DocumentDB",
    ],
    answer: 0,
    explain: "Aurora is AWS's own relational engine. It is wire-compatible with MySQL and PostgreSQL and replicates data across multiple Availability Zones automatically.",
    why_others_are_not_correct: {
      1: "DynamoDB is NoSQL and not SQL compatible.",
      2: "Neptune is a graph database.",
      3: "DocumentDB is MongoDB compatible, not MySQL or PostgreSQL.",
    },
    domain: 3, task: "3.4", topic: "Amazon Aurora"
  },
  {
    q: "Which AWS database delivers single-digit millisecond performance at any scale and requires no server management?",
    choices: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon Redshift",
    ],
    answer: 0,
    explain: "DynamoDB is a serverless NoSQL key-value and document database. There are no instances to size, and performance stays consistent as the table grows.",
    why_others_are_not_correct: {
      1: "RDS requires you to choose and manage an instance class.",
      2: "Aurora is relational and instance-based, though highly scalable.",
      3: "Redshift is built for analytical queries over large datasets.",
    },
    domain: 3, task: "3.4", topic: "Amazon DynamoDB"
  },
  {
    q: "A company needs a managed relational database that supports MySQL and handles backups and patching. Which service fits?",
    choices: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon S3",
    ],
    answer: 0,
    explain: "RDS runs managed relational engines including MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server, and takes care of backups, patching, and failover.",
    why_others_are_not_correct: {
      1: "DynamoDB is a NoSQL key-value database and does not run MySQL.",
      2: "Redshift is a data warehouse for analytics.",
      3: "S3 is object storage, not a database.",
    },
    domain: 3, task: "3.4", topic: "Amazon RDS"
  },
  {
    q: "A company wants to run complex analytical queries across petabytes of historical sales data. Which service is designed for this?",
    choices: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon ElastiCache",
    ],
    answer: 0,
    explain: "Redshift is a columnar data warehouse built for analytics across very large datasets, using massively parallel processing to return results quickly.",
    why_others_are_not_correct: {
      1: "DynamoDB excels at fast lookups of individual items, not large analytical scans.",
      2: "RDS is for transactional workloads.",
      3: "ElastiCache is an in-memory cache.",
    },
    domain: 3, task: "3.4", topic: "Amazon Redshift"
  },
  {
    q: "Which service provides an in-memory cache to reduce database load and speed up read-heavy applications?",
    choices: [
      "Amazon ElastiCache",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon S3 Glacier",
    ],
    answer: 0,
    explain: "ElastiCache runs managed Redis or Memcached in memory, so frequently requested results are returned in microseconds instead of being recomputed by the database.",
    why_others_are_not_correct: {
      1: "RDS is the database being relieved, not the cache.",
      2: "Redshift is an analytics warehouse.",
      3: "S3 Glacier is archival storage and is deliberately slow.",
    },
    domain: 3, task: "3.4", topic: "In-memory databases"
  },
  {
    q: "What advantage does using AWS Direct Connect provide compared to an internet-based VPN for connecting on-premises to AWS?",
    choices: [
      "Lower upfront cost than internet VPN",
      "Encrypted connections by default without user setup",
      "Consistent, dedicated network bandwidth with lower latency",
      "Auto-scaling bandwidth based on usage",
    ],
    answer: 2,
    explain: "AWS Direct Connect provides a dedicated physical connection into AWS, which typically results in lower latency, more consistent performance, and reliable bandwidth compared to internet-based VPNs.",
    why_others_are_not_correct: {
      0: "Direct Connect typically has higher upfront cost than a standard internet VPN.",
      1: "Encryption is optional and must be configured; VPNs provide encryption by default over the public internet.",
      3: "Bandwidth for Direct Connect is fixed and must be provisioned; it does not auto-scale automatically based on usage.",
    },
    domain: 3, task: "3.5", topic: "AWS Direct Connect"
  },
  {
    q: "Which AWS service provides a secure connection between an on-premises network and AWS?",
    choices: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Trusted Advisor",
      "Amazon EC2",
    ],
    answer: 0,
    explain: "AWS Direct Connect establishes a dedicated private network connection between your data center and AWS.",
    why_others_are_not_correct: {
      1: "CloudFront delivers content, not network connections.",
      2: "Trusted Advisor provides best-practice recommendations.",
      3: "EC2 provides compute resources, not network connectivity.",
    },
    domain: 3, task: "3.5", topic: "AWS Site-to-Site VPN"
  },
  {
    q: "Which AWS service helps distribute content to users globally with low latency?",
    choices: [
      "Amazon CloudFront",
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda",
    ],
    answer: 0,
    explain: "Amazon CloudFront is AWS's Content Delivery Network (CDN) that caches content at edge locations to reduce latency.",
    why_others_are_not_correct: {
      1: "Amazon EC2 provides compute capacity, not content delivery.",
      2: "S3 stores content but doesn't deliver it globally.",
      3: "Lambda runs code; it's not a CDN.",
    },
    domain: 3, task: "3.5", topic: "Amazon CloudFront"
  },
  {
    q: "What is the primary benefit of using Amazon CloudFront in front of your web application?",
    choices: [
      "Autoscaling compute instances globally",
      "Caching static and dynamic content at edge locations to reduce latency",
      "Automating database backups",
      "Encrypting data at rest in S3",
    ],
    answer: 1,
    explain: "CloudFront is a content delivery network (CDN) that caches content - both static and dynamic - at edge locations around the world, thereby reducing latency for end-users.",
    why_others_are_not_correct: {
      0: "Autoscaling compute instances is handled by services like Auto Scaling, not CloudFront.",
      2: "Database backups are managed by database services or backup tools, not CloudFront.",
      3: "Encrypting data at rest in S3 is a storage-service feature, unrelated to CloudFront's caching and delivery role.",
    },
    domain: 3, task: "3.5", topic: "Amazon CloudFront"
  },
  {
    q: "A video streaming service wants to deliver high-quality content globally, and they expect sudden peaks in demand (for example, when a new show is released). Which architecture best supports this scenario?",
    choices: [
      "Deploy large EC2 instances in one region and scale vertically",
      "Use on-premises servers with remote caching appliances globally",
      "Use S3 + CloudFront and deploy origin in nearest region",
      "Use RDS Multi-AZ in one region and replicate to edge locations",
    ],
    answer: 2,
    explain: "Using S3 to store content (origin) combined with CloudFront edge caching enables global delivery, handles sudden spikes in demand by caching near users, and decouples from compute scaling concerns.",
    why_others_are_not_correct: {
      0: "Single region large instances would struggle with global latency and spikes; vertical scaling is limited.",
      1: "On-premises caching adds complexity, cost and lost benefit of AWS global network.",
      3: "RDS Multi-AZ handles database resilience, not content delivery or edge caching.",
    },
    domain: 3, task: "3.5", topic: "Amazon CloudFront"
  },
  {
    q: "What does Amazon Route 53 provide?",
    choices: [
      "Domain registration and DNS routing",
      "Secure storage for static website content",
      "Real-time data streaming",
      "Firewall protection for VPCs",
    ],
    answer: 0,
    explain: "Amazon Route 53 is AWS's scalable DNS service that handles domain registration, DNS routing, and health checks.",
    why_others_are_not_correct: {
      1: "Amazon S3 stores website content, not Route 53.",
      2: "Amazon Kinesis provides real-time streaming, not DNS services.",
      3: "AWS Network Firewall protects VPCs, not Route 53.",
    },
    domain: 3, task: "3.5", topic: "Amazon Route 53"
  },
  {
    q: "A company wants DNS name resolution globally, high availability, and traffic routing based on latency. Which service should they use?",
    choices: [
      "Amazon Route 53",
      "AWS Directory Service",
      "Amazon CloudFront",
      "AWS Global Accelerator",
    ],
    answer: 0,
    explain: "Amazon Route 53 is the DNS service that supports global name resolution and routing policies (such as latency-based routing) to direct users to the optimal endpoint.",
    why_others_are_not_correct: {
      1: "AWS Directory Service provides managed Active Directory services, not global DNS & routing.",
      2: "CloudFront is for content delivery, not DNS name resolution or traffic-routing based on latency.",
      3: "AWS Global Accelerator improves performance for user traffic by using the AWS global network, but it is not a DNS service that provides routing policies like Route 53.",
    },
    domain: 3, task: "3.5", topic: "Amazon Route 53"
  },
  {
    q: "What is the primary purpose of Amazon VPC?",
    choices: [
      "To deliver content globally at low latency",
      "To create an isolated virtual network within AWS",
      "To automatically scale compute resources",
      "To store objects in buckets",
    ],
    answer: 1,
    explain: "Amazon Virtual Private Cloud (VPC) lets you create an isolated section of the AWS Cloud where you can launch AWS resources in a virtual network you define.",
    why_others_are_not_correct: {
      0: "CloudFront, not VPC, delivers global content.",
      2: "Auto Scaling manages compute resources, not VPC.",
      3: "Amazon S3 stores objects in buckets.",
    },
    domain: 3, task: "3.5", topic: "Amazon VPC"
  },
  {
    q: "What does Amazon CloudFront use to cache content close to end users?",
    choices: [
      "Availability Zones",
      "Regions",
      "Edge Locations",
      "VPCs",
    ],
    answer: 2,
    explain: "CloudFront uses Edge Locations around the world to cache content near users for faster delivery.",
    why_others_are_not_correct: {
      0: "Availability Zones host compute resources, not cached content.",
      1: "Regions are large geographical areas, not individual cache points.",
      3: "VPCs are isolated networks, not caching locations.",
    },
    domain: 3, task: "3.5", topic: "CloudFront edge locations"
  },
  {
    q: "Which service would best reduce latency for a globally accessed web application?",
    choices: [
      "Amazon CloudFront",
      "AWS Config",
      "Amazon S3 Glacier",
      "AWS Batch",
    ],
    answer: 0,
    explain: "CloudFront delivers cached content through its global Edge network, reducing latency.",
    why_others_are_not_correct: {
      1: "AWS Config tracks configuration changes, not latency.",
      2: "S3 Glacier is for archival storage, not web delivery.",
      3: "AWS Batch runs batch jobs, unrelated to latency reduction.",
    },
    domain: 3, task: "3.5", topic: "Content delivery"
  },
  {
    q: "A business wants to deliver static content globally with the lowest possible latency and cost. They do not want to manage caching manually. What is the most appropriate AWS option?",
    choices: [
      "Deploy EC2 instances in every AWS Region",
      "Use Amazon S3 standard storage with cross-region replication",
      "Use Amazon CloudFront with an origin in S3",
      "Deploy a VPN to every user location",
    ],
    answer: 2,
    explain: "Using CloudFront with S3 as the origin allows global caching via edge locations, reducing latency and cost, while requiring minimal management for caching.",
    why_others_are_not_correct: {
      0: "Deploying EC2 in every region adds significant cost and management overhead.",
      1: "S3 + replication stores content globally but does not inherently provide edge caching or optimal latency to end-users.",
      3: "VPNs are designed for secure network connectivity, not content distribution.",
    },
    domain: 3, task: "3.5", topic: "Content delivery"
  },
  {
    q: "Which component of a VPC allows communication between the VPC and the internet?",
    choices: [
      "Internet Gateway",
      "Security Group",
      "Route Table",
      "Network ACL",
    ],
    answer: 0,
    explain: "An Internet Gateway enables communication between resources in your VPC and the internet.",
    why_others_are_not_correct: {
      1: "Security Groups control instance-level traffic but do not provide internet access.",
      2: "Route Tables define traffic rules but require an Internet Gateway for external routing.",
      3: "Network ACLs are stateless filters, not gateways.",
    },
    domain: 3, task: "3.5", topic: "Internet gateway"
  },
  {
    q: "What does an AWS VPC private subnet typically mean in terms of routing capabilities?",
    choices: [
      "It has a route to an Internet Gateway for bi-directional internet access",
      "It is accessible via the public internet with a public IP by default",
      "It has no direct route to the internet and uses a NAT or similar for outbound traffic",
      "It cannot connect to any AWS service endpoints",
    ],
    answer: 2,
    explain: "A private subnet typically does not have a route to an Internet Gateway. Instead, instances in it might access the internet via a NAT Gateway or NAT instance for outbound traffic, while remaining inaccessible from the public internet.",
    why_others_are_not_correct: {
      0: "That describes a public subnet, not a private one.",
      1: "Private subnets are not directly accessible from the internet by default.",
      3: "Instances in private subnets can still connect to AWS service endpoints (via endpoint or NAT), so statement is false.",
    },
    domain: 3, task: "3.5", topic: "Private subnets"
  },
  {
    q: "Which component of a VPC must be present in order for instances in a public subnet to access the internet?",
    choices: [
      "NAT Gateway",
      "Internet Gateway",
      "Transit Gateway",
      "VPC Endpoint",
    ],
    answer: 1,
    explain: "An Internet Gateway enables instances in a VPC (typically in a public subnet) to access the internet and enables inbound connections from the internet when routing and security allow it.",
    why_others_are_not_correct: {
      0: "A NAT Gateway allows instances in a private subnet to access the internet, but doesn't allow inbound internet access directly.",
      2: "A Transit Gateway connects multiple VPCs and on-premises networks, not simply enabling internet access to a public subnet.",
      3: "A VPC Endpoint allows private connectivity to AWS services without using the internet, not general internet access.",
    },
    domain: 3, task: "3.5", topic: "Public subnets"
  },
  {
    q: "Which AWS service improves website availability by routing traffic to healthy endpoints?",
    choices: [
      "AWS Shield",
      "AWS WAF",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    answer: 2,
    explain: "Amazon Route 53 performs health checks and routes traffic to healthy endpoints for high availability.",
    why_others_are_not_correct: {
      0: "AWS Shield protects against DDoS attacks, not routing.",
      1: "AWS WAF filters web requests, not route traffic.",
      3: "CloudFront caches content but doesn't perform health-based routing.",
    },
    domain: 3, task: "3.5", topic: "Route 53 health checks"
  },
  {
    q: "What is the function of a subnet in a VPC?",
    choices: [
      "It isolates resources within specific IP ranges inside the VPC.",
      "It provides internet access to all instances.",
      "It controls inbound and outbound traffic rules.",
      "It stores security credentials.",
    ],
    answer: 0,
    explain: "Subnets divide a VPC's IP address range into segments to isolate and organize resources.",
    why_others_are_not_correct: {
      1: "Internet access is handled by gateways, not subnets.",
      2: "Security Groups and ACLs control traffic rules.",
      3: "AWS Secrets Manager stores credentials, not subnets.",
    },
    domain: 3, task: "3.5", topic: "Subnets"
  },
  {
    q: "When a VPC is peered with another VPC, which of the following statements is true?",
    choices: [
      "Transit traffic can route through this peering to a third VPC",
      "You can peer VPCs across different AWS accounts",
      "VPC peering supports transitive routing via a central hub VPC",
      "VPC peering automatically enables DNS resolution across the peered VPCs",
    ],
    answer: 1,
    explain: "VPC Peering allows two VPCs (within or across accounts) to route traffic privately between them. Cross-account peering is supported.",
    why_others_are_not_correct: {
      0: "Peering does not support routing to a third VPC via the peer (no transitive routing).",
      2: "Transitive routing is not supported in VPC peering; you must use Transit Gateway or other routing solution.",
      3: "DNS resolution across peered VPCs is optional and must be explicitly configured (via enabling DNS resolution).",
    },
    domain: 3, task: "3.5", topic: "VPC peering"
  },
  {
    q: "Which service centrally manages and automates backups across AWS services such as EBS, RDS, DynamoDB, and EFS?",
    choices: [
      "AWS Backup",
      "Amazon S3 Glacier",
      "AWS Storage Gateway",
      "AWS Config",
    ],
    answer: 0,
    explain: "AWS Backup applies one backup policy across many services, so you are not configuring and tracking backups service by service.",
    why_others_are_not_correct: {
      1: "Glacier is an archival storage class, not a backup orchestrator.",
      2: "Storage Gateway is for hybrid storage access.",
      3: "Config tracks configuration, not backups.",
    },
    domain: 3, task: "3.6", topic: "AWS Backup"
  },
  {
    q: "A company must move 80 TB of data to AWS but has a slow internet connection. Which option is MOST appropriate?",
    choices: [
      "AWS Snowball",
      "Upload over the internet to Amazon S3",
      "AWS Direct Connect with a 1 Mbps link",
      "Email the data to AWS Support",
    ],
    answer: 0,
    explain: "Snowball is a physical device AWS ships to you. You load the data, ship it back, and AWS imports it, which beats transferring tens of terabytes over a slow link.",
    why_others_are_not_correct: {
      1: "Over a slow connection this would take months.",
      2: "A 1 Mbps link is far too slow for 80 TB.",
      3: "AWS does not accept data by email, and no mailbox would hold it.",
    },
    domain: 3, task: "3.6", topic: "AWS Snowball"
  },
  {
    q: "A company wants its on-premises applications to use AWS storage while keeping a local cache for fast access. Which service does this?",
    choices: [
      "AWS Storage Gateway",
      "Amazon EFS",
      "AWS Snowball",
      "Amazon S3 Transfer Acceleration",
    ],
    answer: 0,
    explain: "Storage Gateway is a hybrid service that presents AWS storage to on-premises systems through familiar protocols, caching frequently used data locally.",
    why_others_are_not_correct: {
      1: "EFS is a cloud file system for AWS compute, not a hybrid gateway with local caching.",
      2: "Snowball is for one-off bulk physical transfer.",
      3: "Transfer Acceleration speeds uploads over the internet but provides no local cache.",
    },
    domain: 3, task: "3.6", topic: "AWS Storage Gateway"
  },
  {
    q: "What is an Amazon EBS snapshot?",
    choices: [
      "A point-in-time backup of a volume, stored in Amazon S3",
      "A live copy of a volume attached to another instance",
      "A log of all reads and writes to the volume",
      "A performance report for the volume",
    ],
    answer: 0,
    explain: "Snapshots are incremental point-in-time backups kept in S3. You can create a new volume from a snapshot, including in a different Availability Zone.",
    why_others_are_not_correct: {
      1: "A snapshot is not a live attached copy; you create a volume from it first.",
      2: "Access logging is a different feature.",
      3: "Performance data comes from CloudWatch.",
    },
    domain: 3, task: "3.6", topic: "Amazon EBS snapshots"
  },
  {
    q: "Several EC2 instances need to read and write the same files at the same time. Which storage service supports this?",
    choices: [
      "Amazon EFS",
      "Amazon EBS",
      "Amazon S3 Glacier Deep Archive",
      "Instance store",
    ],
    answer: 0,
    explain: "EFS is a managed shared file system. Many instances across multiple Availability Zones can mount it concurrently.",
    why_others_are_not_correct: {
      1: "A standard EBS volume attaches to one instance at a time.",
      2: "Glacier Deep Archive is for long-term archival with retrieval measured in hours.",
      3: "Instance store is temporary local disk tied to one instance.",
    },
    domain: 3, task: "3.6", topic: "Amazon EFS"
  },
  {
    q: "Which AWS service provides object storage accessed over HTTP, with virtually unlimited capacity?",
    choices: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "AWS Storage Gateway",
    ],
    answer: 0,
    explain: "S3 stores objects in buckets and is reached through an API over HTTP. There is no filesystem and no size limit on the bucket.",
    why_others_are_not_correct: {
      1: "EBS is block storage attached to a single EC2 instance, like a virtual hard drive.",
      2: "EFS is a shared file system that instances mount.",
      3: "Storage Gateway connects on-premises systems to AWS storage.",
    },
    domain: 3, task: "3.6", topic: "Block vs object vs file"
  },
  {
    q: "How can a company automatically move S3 objects to a cheaper storage class after 90 days?",
    choices: [
      "Configure an S3 Lifecycle policy",
      "Write a script that reuploads the objects",
      "Change the bucket Region",
      "Enable S3 versioning",
    ],
    answer: 0,
    explain: "Lifecycle policies transition objects between storage classes, or expire them, on a schedule you define. No code required.",
    why_others_are_not_correct: {
      1: "Reuploading is unnecessary work and costs more.",
      2: "The Region has nothing to do with storage class.",
      3: "Versioning keeps multiple versions; it does not change storage class.",
    },
    domain: 3, task: "3.6", topic: "S3 lifecycle policies"
  },
  {
    q: "Which Amazon S3 storage class is designed for long-term archival at the lowest cost, where retrieval can take hours?",
    choices: [
      "S3 Glacier Deep Archive",
      "S3 Standard",
      "S3 Standard-Infrequent Access",
      "S3 Intelligent-Tiering",
    ],
    answer: 0,
    explain: "Deep Archive is the cheapest S3 storage and is intended for data you must keep but almost never read, such as records retained for compliance.",
    why_others_are_not_correct: {
      1: "S3 Standard is for frequently accessed data and costs the most to store.",
      2: "Standard-IA is cheaper than Standard but still retrieves in milliseconds.",
      3: "Intelligent-Tiering moves objects automatically based on access patterns.",
    },
    domain: 3, task: "3.6", topic: "S3 storage classes"
  },
  {
    q: "A company needs storage that multiple EC2 instances can mount at the same time, and separate storage for infrequently accessed archives. Which TWO services meet these needs? (Choose TWO.)",
    choices: [
      "Amazon EFS",
      "Amazon S3 Glacier",
      "Amazon EBS",
      "AWS Snowball",
      "Instance store",
    ],
    answer: [0, 1],
    explain: "EFS is a shared file system many instances can mount concurrently. S3 Glacier is the low-cost archival tier for data you rarely read.",
    why_others_are_not_correct: {
      2: "A standard EBS volume attaches to one instance at a time.",
      3: "Snowball physically transfers data; it is not ongoing storage.",
      4: "Instance store is temporary local disk that is lost when the instance stops.",
    },
    domain: 3, task: "3.6", topic: "Storage selection"
  },
  {
    q: "Which service discovers, prepares, and transforms data for analytics, and maintains a central data catalog?",
    choices: [
      "AWS Glue",
      "Amazon QuickSight",
      "Amazon Kinesis",
      "Amazon Comprehend",
    ],
    answer: 0,
    explain: "Glue is the serverless ETL service. Its crawlers catalog your data and its jobs clean and reshape it so analytics tools can use it.",
    why_others_are_not_correct: {
      1: "QuickSight visualizes data that is already prepared.",
      2: "Kinesis handles streams rather than ETL and cataloging.",
      3: "Comprehend analyzes text.",
    },
    domain: 3, task: "3.7", topic: "AWS Glue"
  },
  {
    q: "Which service runs standard SQL queries directly against data stored in Amazon S3, with no servers to manage?",
    choices: [
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon EMR",
      "AWS Glue",
    ],
    answer: 0,
    explain: "Athena is serverless. You point it at data in S3, run SQL, and pay for the data each query scans.",
    why_others_are_not_correct: {
      1: "Redshift requires you to load data into a provisioned cluster.",
      2: "EMR runs big data frameworks on a managed cluster.",
      3: "Glue is for extract, transform, and load pipelines.",
    },
    domain: 3, task: "3.7", topic: "Amazon Athena"
  },
  {
    q: "A company wants employees to search internal documents using natural language questions. Which service fits?",
    choices: [
      "Amazon Kendra",
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon QuickSight",
    ],
    answer: 0,
    explain: "Kendra is an intelligent search service that understands questions phrased in plain language and returns specific answers from your documents.",
    why_others_are_not_correct: {
      1: "Athena runs SQL queries against structured data in S3.",
      2: "Redshift is a data warehouse.",
      3: "QuickSight builds dashboards and visualizations.",
    },
    domain: 3, task: "3.7", topic: "Amazon Kendra"
  },
  {
    q: "Which service collects and processes streaming data such as website clickstreams or IoT telemetry in real time?",
    choices: [
      "Amazon Kinesis",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue",
    ],
    answer: 0,
    explain: "Kinesis ingests continuous streams of data and makes them available for processing within seconds, rather than waiting for a batch job.",
    why_others_are_not_correct: {
      1: "Athena queries data already at rest in S3.",
      2: "Redshift analyzes data that has been loaded into it.",
      3: "Glue runs scheduled or triggered ETL jobs.",
    },
    domain: 3, task: "3.7", topic: "Amazon Kinesis"
  },
  {
    q: "Which service builds conversational interfaces such as chatbots using voice and text?",
    choices: [
      "Amazon Lex",
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Kendra",
    ],
    answer: 0,
    explain: "Lex provides the speech recognition and natural language understanding behind chatbots. It is the same technology as Amazon Alexa.",
    why_others_are_not_correct: {
      1: "Polly turns text into lifelike speech.",
      2: "Transcribe converts speech into text.",
      3: "Kendra is an intelligent enterprise search service.",
    },
    domain: 3, task: "3.7", topic: "Amazon Lex"
  },
  {
    q: "Which service creates interactive business intelligence dashboards and visualizations?",
    choices: [
      "Amazon QuickSight",
      "Amazon Athena",
      "AWS Glue",
      "Amazon Kinesis",
    ],
    answer: 0,
    explain: "QuickSight is AWS's business intelligence tool. It connects to your data sources and produces dashboards that business users can explore.",
    why_others_are_not_correct: {
      1: "Athena queries data but does not build dashboards.",
      2: "Glue prepares and transforms data.",
      3: "Kinesis handles streaming data.",
    },
    domain: 3, task: "3.7", topic: "Amazon QuickSight"
  },
  {
    q: "Which service lets data scientists build, train, and deploy machine learning models at scale?",
    choices: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Athena",
    ],
    answer: 0,
    explain: "SageMaker is the full machine learning platform: preparing data, training models, tuning them, and hosting them for inference.",
    why_others_are_not_correct: {
      1: "Rekognition is a ready-made image and video analysis service.",
      2: "Comprehend is ready-made natural language processing.",
      3: "Athena queries data in S3 with SQL.",
    },
    domain: 3, task: "3.7", topic: "Amazon SageMaker"
  },
  {
    q: "Which service helps developers build and host full-stack web and mobile applications quickly?",
    choices: [
      "AWS Amplify",
      "AWS AppSync",
      "Amazon Lightsail",
      "AWS Elastic Beanstalk",
    ],
    answer: 0,
    explain: "Amplify provides front-end hosting plus the backend building blocks such as authentication and APIs, aimed at web and mobile developers.",
    why_others_are_not_correct: {
      1: "AppSync specifically provides managed GraphQL APIs and is often used with Amplify.",
      2: "Lightsail offers simple virtual servers at a flat price.",
      3: "Elastic Beanstalk deploys and manages application infrastructure.",
    },
    domain: 3, task: "3.8", topic: "AWS Amplify"
  },
  {
    q: "Which service connects Internet of Things devices to AWS so they can send and receive data securely?",
    choices: [
      "AWS IoT Core",
      "Amazon Kinesis",
      "AWS IoT Greengrass",
      "Amazon EventBridge",
    ],
    answer: 0,
    explain: "IoT Core is the managed endpoint that devices connect to. Greengrass is the companion that runs AWS capabilities locally on the device itself.",
    why_others_are_not_correct: {
      1: "Kinesis ingests streaming data but is not the device connectivity layer.",
      2: "Greengrass extends AWS onto edge devices rather than being the cloud endpoint.",
      3: "EventBridge routes events between applications.",
    },
    domain: 3, task: "3.8", topic: "AWS IoT Core"
  },
  {
    q: "Which service helps developers trace requests as they travel through a distributed application to find performance bottlenecks?",
    choices: [
      "AWS X-Ray",
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
    ],
    answer: 0,
    explain: "X-Ray follows a single request across every service it touches and shows where the time went, which is hard to work out from logs alone.",
    why_others_are_not_correct: {
      1: "CloudWatch shows metrics and logs per resource, not an end-to-end request trace.",
      2: "CloudTrail records API calls for audit.",
      3: "Config tracks resource configuration.",
    },
    domain: 3, task: "3.8", topic: "AWS X-Ray"
  },
  {
    q: "Which service provides a cloud-based contact center for handling customer calls and chats?",
    choices: [
      "Amazon Connect",
      "Amazon SES",
      "Amazon Chime",
      "Amazon Pinpoint",
    ],
    answer: 0,
    explain: "Amazon Connect is a contact center you can stand up quickly, with call routing, recording, and analytics, charged by the minute.",
    why_others_are_not_correct: {
      1: "SES sends email.",
      2: "Chime is for meetings and video calls among employees.",
      3: "Pinpoint handles targeted customer messaging campaigns.",
    },
    domain: 3, task: "3.8", topic: "Amazon Connect"
  },
  {
    q: "Which service routes events between AWS services, your own applications, and software-as-a-service providers using rules?",
    choices: [
      "Amazon EventBridge",
      "Amazon SQS",
      "AWS Step Functions",
      "Amazon Connect",
    ],
    answer: 0,
    explain: "EventBridge is a serverless event bus. Rules match incoming events and send them to targets, which is how you wire loosely coupled systems together.",
    why_others_are_not_correct: {
      1: "SQS stores messages for a consumer to pull.",
      2: "Step Functions orchestrates a sequence of steps in a workflow.",
      3: "Connect is a cloud contact center.",
    },
    domain: 3, task: "3.8", topic: "Amazon EventBridge"
  },
  {
    q: "Which service sends transactional and marketing email at scale?",
    choices: [
      "Amazon SES",
      "Amazon SNS",
      "Amazon Connect",
      "Amazon WorkMail",
    ],
    answer: 0,
    explain: "Simple Email Service is purpose-built for sending high volumes of email, such as receipts and newsletters, with deliverability tooling.",
    why_others_are_not_correct: {
      1: "SNS can send email notifications but is not a bulk email platform.",
      2: "Connect is a contact center for voice and chat.",
      3: "WorkMail is a hosted mailbox service for employees.",
    },
    domain: 3, task: "3.8", topic: "Amazon SES"
  },
  {
    q: "Which service sends notifications to many subscribers at once using a publish and subscribe model?",
    choices: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon EventBridge",
      "Amazon SES",
    ],
    answer: 0,
    explain: "Amazon Simple Notification Service publishes a message to a topic, and every subscriber to that topic receives a copy. It is the standard way to fan out alerts.",
    why_others_are_not_correct: {
      1: "SQS is a queue where one consumer takes each message.",
      2: "EventBridge routes events between applications based on rules.",
      3: "SES sends bulk and transactional email specifically.",
    },
    domain: 3, task: "3.8", topic: "Amazon SNS"
  },
  {
    q: "Which service provides a managed message queue that decouples application components so they can run independently?",
    choices: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon CloudFront",
      "AWS Lambda",
    ],
    answer: 0,
    explain: "Simple Queue Service holds messages until a consumer processes them. If the consumer is slow or offline, messages wait in the queue instead of being lost.",
    why_others_are_not_correct: {
      1: "SNS pushes to subscribers immediately rather than storing work for a consumer.",
      2: "CloudFront is a content delivery network.",
      3: "Lambda runs code but is not itself a queue.",
    },
    domain: 3, task: "3.8", topic: "Amazon SQS"
  },
  {
    q: "Which service provides managed virtual desktops that users can access from anywhere?",
    choices: [
      "Amazon WorkSpaces",
      "Amazon AppStream 2.0",
      "Amazon EC2",
      "AWS Cloud9",
    ],
    answer: 0,
    explain: "WorkSpaces delivers a persistent cloud desktop. AppStream 2.0 is the related service that streams a single application rather than a whole desktop.",
    why_others_are_not_correct: {
      1: "AppStream 2.0 streams individual applications, not full persistent desktops.",
      2: "EC2 provides servers, which you would have to configure as desktops yourself.",
      3: "Cloud9 is a browser-based development environment.",
    },
    domain: 3, task: "3.8", topic: "Amazon WorkSpaces"
  },
  {
    q: "Which pair correctly describes Amazon ECS and Amazon EKS?",
    choices: [
      "ECS is AWS's own container orchestrator; EKS is managed Kubernetes",
      "ECS is managed Kubernetes; EKS is AWS's own container orchestrator",
      "Both are managed Kubernetes services",
      "Both are serverless function services",
    ],
    answer: 0,
    explain: "ECS is the AWS-native way to run containers. EKS runs upstream Kubernetes for teams that already use it or want portability.",
    why_others_are_not_correct: {
      1: "This reverses the two services.",
      2: "Only EKS is Kubernetes.",
      3: "Neither is a function service. That is AWS Lambda.",
    },
    domain: 3, task: "3.8", topic: "Containers"
  },
  {
    q: "Which service automates build, test, and deployment stages so code changes reach production through a repeatable pipeline?",
    choices: [
      "AWS CodePipeline",
      "AWS CloudFormation",
      "Amazon CloudWatch",
      "AWS Cloud9",
    ],
    answer: 0,
    explain: "CodePipeline models the release process as stages and runs them automatically on every change, usually calling CodeBuild and CodeDeploy along the way.",
    why_others_are_not_correct: {
      1: "CloudFormation provisions infrastructure; it is often a step inside the pipeline.",
      2: "CloudWatch monitors; it does not deploy.",
      3: "Cloud9 is an IDE for writing code.",
    },
    domain: 3, task: "3.8", topic: "Developer tools"
  },
];
