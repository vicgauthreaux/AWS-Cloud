/* CLF-C02 Domain 2: Security and Compliance (30% of the exam)
   75 questions covering task statements 2.1, 2.2, 2.3, 2.4
   Format matches the original class bank, so new questions can be
   appended by hand in exactly the same shape. */
window.quizBanks = window.quizBanks || {};
window.quizBanks.domain2 = [
  {
    q: "Under the AWS shared responsibility model, who is responsible for the physical security of the data centers that run AWS services?",
    choices: [
      "AWS",
      "The customer",
      "Shared equally between AWS and the customer",
      "The customer's internet service provider",
    ],
    answer: 0,
    explain: "AWS is responsible for security OF the cloud, which includes the buildings, the hardware, the power, and the physical access controls. You never visit an AWS data center.",
    why_others_are_not_correct: {
      1: "Customers never have physical access to AWS facilities, so they cannot secure them.",
      2: "Physical security is entirely AWS's responsibility, not a shared one.",
      3: "Your ISP carries traffic. It has nothing to do with AWS facility security.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "A company runs an application on Amazon EC2. Who is responsible for installing operating system security patches on those instances?",
    choices: [
      "The customer",
      "AWS",
      "The AWS Support team",
      "The hardware vendor",
    ],
    answer: 0,
    explain: "EC2 gives you a virtual machine, and everything inside it is yours. Patching the guest operating system is security IN the cloud, which is the customer's job.",
    why_others_are_not_correct: {
      1: "AWS patches the hypervisor and the underlying host, not your guest operating system.",
      2: "AWS Support can advise, but it does not patch your instances for you.",
      3: "The hardware vendor has no access to your instance.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which task is the customer's responsibility when using Amazon S3?",
    choices: [
      "Configuring bucket policies and access permissions",
      "Replacing failed storage drives",
      "Patching the S3 service software",
      "Maintaining the data center network",
    ],
    answer: 0,
    explain: "S3 is a managed service, so AWS runs the infrastructure. Deciding who can read and write your objects is entirely yours, and misconfigured bucket permissions are a classic cause of data exposure.",
    why_others_are_not_correct: {
      1: "AWS replaces failed hardware. Customers never see the drives.",
      2: "AWS maintains the S3 service itself.",
      3: "The data center network is AWS's responsibility.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "A company uses Amazon RDS. Compared with running a database on Amazon EC2, what does AWS now handle that the customer previously handled?",
    choices: [
      "Database engine patching and automated backups",
      "Choosing which data to store in the database",
      "Deciding who may connect to the database",
      "Designing the database schema",
    ],
    answer: 0,
    explain: "RDS is a managed database service, so AWS takes over the undifferentiated work: installing the engine, patching it, and running backups. That is the main reason to choose RDS over a database you install yourself on EC2.",
    why_others_are_not_correct: {
      1: "Your data is always your responsibility and your choice.",
      2: "Access control stays with the customer on every AWS service.",
      3: "Schema design is application work and remains yours.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which of the following is ALWAYS the customer's responsibility, no matter which AWS service is used?",
    choices: [
      "Customer data",
      "Hypervisor patching",
      "Physical hardware maintenance",
      "Global network infrastructure",
    ],
    answer: 0,
    explain: "Customer data sits at the top of the shared responsibility diagram and never moves. Whatever service you pick, the data you put in it is yours to classify, encrypt, and control.",
    why_others_are_not_correct: {
      1: "The hypervisor is part of the infrastructure AWS runs.",
      2: "AWS maintains all physical hardware.",
      3: "AWS builds and operates the global network.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "A company wants to encrypt sensitive data stored in Amazon S3. Who decides whether that encryption is turned on?",
    choices: [
      "The customer",
      "AWS, automatically for every bucket",
      "The AWS account manager",
      "AWS Trusted Advisor",
    ],
    answer: 0,
    explain: "Encryption of your data is a customer decision and a customer configuration. AWS provides the tools, such as server-side encryption and AWS KMS, but you choose to use them.",
    why_others_are_not_correct: {
      1: "AWS provides encryption options, but configuring protection for your data is your responsibility.",
      2: "An account manager handles the commercial relationship, not your bucket settings.",
      3: "Trusted Advisor can flag an unencrypted bucket, but it does not make the decision.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which statement best summarizes the shared responsibility model?",
    choices: [
      "AWS is responsible for security OF the cloud; the customer is responsible for security IN the cloud",
      "AWS is responsible for all security; the customer only pays the bill",
      "The customer is responsible for all security; AWS only supplies hardware",
      "Responsibility is split 50/50 for every service",
    ],
    answer: 0,
    explain: "That phrasing is the model in one sentence. AWS secures the infrastructure the cloud runs on, and you secure what you put into it and how you configure it.",
    why_others_are_not_correct: {
      1: "Customers always carry responsibility for their own data, access, and configuration.",
      2: "AWS does far more than supply hardware; it secures and operates the whole infrastructure layer.",
      3: "The split shifts depending on the service. A managed service moves more work to AWS.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Where does the line between AWS and customer responsibility move the MOST?",
    choices: [
      "Between infrastructure services like EC2 and managed services like Lambda",
      "Between one AWS Region and another",
      "Between the AWS Management Console and the AWS CLI",
      "Between paid Support plans",
    ],
    answer: 0,
    explain: "The more managed the service, the more AWS handles. With EC2 you patch the operating system; with Lambda there is no operating system for you to patch at all.",
    why_others_are_not_correct: {
      1: "The model is identical in every Region.",
      2: "How you access AWS does not change who secures what.",
      3: "Support plans change the help you receive, not the responsibility split.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "A company configures a security group to allow traffic on port 22 from anywhere on the internet, and an attacker logs in. Who was responsible for that configuration?",
    choices: [
      "The customer",
      "AWS",
      "Both equally",
      "The Amazon EC2 service team",
    ],
    answer: 0,
    explain: "Security group rules are customer configuration. AWS supplied a firewall that defaults to denying everything; opening it to the world was a customer choice.",
    why_others_are_not_correct: {
      1: "AWS provides the security group feature but never sets your rules.",
      2: "There is nothing shared here. The rule was written by the customer.",
      3: "Service teams build the service, not your firewall rules.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which pair correctly matches responsibility for Amazon EC2?",
    choices: [
      "AWS secures the physical host; the customer secures the guest operating system",
      "AWS secures the guest operating system; the customer secures the physical host",
      "AWS secures both the host and the guest operating system",
      "The customer secures both the host and the guest operating system",
    ],
    answer: 0,
    explain: "EC2 is an infrastructure service. AWS stops at the hypervisor and the physical host; from the guest operating system upward, it is yours.",
    why_others_are_not_correct: {
      1: "This reverses the model. Customers have no access to physical hosts.",
      2: "AWS does not patch or harden your guest operating system.",
      3: "Customers cannot touch the physical host.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which TWO tasks are the customer's responsibility under the AWS shared responsibility model? (Choose TWO.)",
    choices: [
      "Configuring IAM permissions",
      "Encrypting customer data",
      "Securing the physical data center",
      "Patching the hypervisor",
      "Maintaining the global network backbone",
    ],
    answer: [0, 1],
    explain: "Identity configuration and data protection are always the customer's side of the line. AWS handles the facilities, the hypervisor, and the network that underpins them.",
    why_others_are_not_correct: {
      2: "AWS secures its data centers; customers never enter them.",
      3: "The hypervisor is part of the infrastructure AWS maintains.",
      4: "AWS builds and operates the global network.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which task becomes AWS's responsibility when a company moves from self-managed databases on EC2 to Amazon DynamoDB?",
    choices: [
      "Patching and maintaining the underlying database software and servers",
      "Deciding which items to store in a table",
      "Granting applications permission to read the table",
      "Designing the table's partition key",
    ],
    answer: 0,
    explain: "DynamoDB is fully managed and serverless. There is no instance, no engine version, and no patch window for the customer to think about.",
    why_others_are_not_correct: {
      1: "The data you store is always yours.",
      2: "Access control is always the customer's responsibility.",
      3: "Data modeling is application design work and stays with you.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which of these is AWS responsible for securing?",
    choices: [
      "The virtualization layer that separates customer workloads",
      "Operating system firewall rules on an EC2 instance",
      "The strength of an IAM user's password",
      "Which objects in an S3 bucket are public",
    ],
    answer: 0,
    explain: "The hypervisor and the isolation between customers are part of the infrastructure AWS builds and secures.",
    why_others_are_not_correct: {
      1: "Anything inside the guest operating system is the customer's responsibility.",
      2: "Password policy is set and enforced by the customer.",
      3: "Bucket and object permissions are customer configuration.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "A company stores unencrypted customer records in Amazon S3 and they are exposed. Under the shared responsibility model, who was responsible for encrypting them?",
    choices: [
      "The customer",
      "AWS",
      "Amazon S3 service team",
      "Jointly, with AWS taking the lead",
    ],
    answer: 0,
    explain: "Data protection, including whether to encrypt, is the customer's side of the model. AWS supplies the encryption capability; enabling it is your decision.",
    why_others_are_not_correct: {
      1: "AWS secures the infrastructure, not your data classification and encryption choices.",
      2: "The service team builds the service.",
      3: "There is no shared lead on customer data protection.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which statement about the shared responsibility model and AWS Lambda is correct?",
    choices: [
      "AWS manages the runtime environment; the customer is responsible for the function code and its permissions",
      "AWS is responsible for the function code",
      "The customer patches the Lambda execution environment",
      "Neither party is responsible for the function's IAM role",
    ],
    answer: 0,
    explain: "With Lambda there is no server for you to patch. Your responsibility narrows to the code you upload, its dependencies, and the permissions you grant it.",
    why_others_are_not_correct: {
      1: "Your code is always yours.",
      2: "AWS maintains the execution environment.",
      3: "The execution role is customer-configured and is a common source of over-permissioning.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "Which is an example of a control that is SHARED between AWS and the customer?",
    choices: [
      "Patch management, where AWS patches the infrastructure and the customer patches guest systems",
      "Physical access to data centers",
      "Choosing an S3 bucket policy",
      "Maintaining the AWS global network",
    ],
    answer: 0,
    explain: "Some controls are genuinely shared. Patching is the standard example: AWS handles its layer and you handle yours, and both must happen.",
    why_others_are_not_correct: {
      1: "Physical access is entirely AWS's responsibility.",
      2: "Bucket policies are entirely the customer's.",
      3: "The global network is entirely AWS's.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "A company wants to verify that AWS is meeting its side of the shared responsibility model. What should it review?",
    choices: [
      "AWS third-party audit reports available in AWS Artifact",
      "Its own CloudTrail logs",
      "The EC2 instance's system logs",
      "Its monthly AWS invoice",
    ],
    answer: 0,
    explain: "You cannot audit AWS data centers yourself, so AWS provides independent auditors' reports through Artifact as evidence that its controls are operating.",
    why_others_are_not_correct: {
      1: "CloudTrail shows activity in your own account.",
      2: "System logs show what happened inside your instance.",
      3: "The invoice shows charges.",
    },
    domain: 2, task: "2.1", topic: "Shared responsibility model"
  },
  {
    q: "An auditor asks a company for a copy of the AWS SOC 2 compliance report. Where does the company get it?",
    choices: [
      "AWS Artifact",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Secrets Manager",
    ],
    answer: 0,
    explain: "AWS Artifact is the self-service portal for AWS compliance documents, including SOC reports, ISO certifications, and PCI documentation. You download them yourself, no support ticket needed.",
    why_others_are_not_correct: {
      1: "Config reports on your own resource configuration, not AWS's certifications.",
      2: "Trusted Advisor gives best-practice recommendations about your account.",
      3: "Secrets Manager stores credentials.",
    },
    domain: 2, task: "2.2", topic: "AWS Artifact"
  },
  {
    q: "Which service continuously collects evidence to help you prepare for an audit against a framework such as PCI DSS?",
    choices: [
      "AWS Audit Manager",
      "AWS Artifact",
      "AWS Config",
      "AWS CloudTrail",
    ],
    answer: 0,
    explain: "Audit Manager automates evidence collection and maps it to common frameworks, turning what used to be a manual screenshot exercise into a continuous process.",
    why_others_are_not_correct: {
      1: "Artifact gives you AWS's own compliance reports to download.",
      2: "Config tracks configuration but does not assemble audit evidence against frameworks.",
      3: "CloudTrail records API activity, which is one input among many.",
    },
    domain: 2, task: "2.2", topic: "AWS Audit Manager"
  },
  {
    q: "Which AWS service records who made which API call in your account, and when?",
    choices: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config",
      "Amazon Inspector",
    ],
    answer: 0,
    explain: "CloudTrail is the audit log of your account. Every API call, from the console, CLI, or SDK, is recorded with the identity, the time, and the source IP address.",
    why_others_are_not_correct: {
      1: "CloudWatch collects performance metrics and logs, not an audit trail of API calls.",
      2: "Config records how resources are configured over time, not who called what.",
      3: "Inspector scans workloads for software vulnerabilities.",
    },
    domain: 2, task: "2.2", topic: "AWS CloudTrail"
  },
  {
    q: "A company must prove that no Amazon S3 bucket in its account has been public at any point in the last year. Which service tracks configuration changes over time?",
    choices: [
      "AWS Config",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Artifact",
    ],
    answer: 0,
    explain: "AWS Config records the configuration of your resources and keeps a history, so you can answer questions like 'what did this look like last March?' and evaluate resources against rules.",
    why_others_are_not_correct: {
      1: "CloudTrail records the API calls that caused changes, not the resulting configuration state over time.",
      2: "CloudWatch is for metrics, logs, and alarms.",
      3: "Artifact provides AWS compliance reports, not your own resource history.",
    },
    domain: 2, task: "2.2", topic: "AWS Config"
  },
  {
    q: "Which AWS service helps you set up and govern a secure, multi-account AWS environment based on best practices?",
    choices: [
      "AWS Control Tower",
      "AWS Systems Manager",
      "Amazon Inspector",
      "AWS Shield",
    ],
    answer: 0,
    explain: "Control Tower builds a landing zone: a multi-account structure with guardrails, centralized logging, and identity already wired up, so you do not have to assemble it by hand.",
    why_others_are_not_correct: {
      1: "Systems Manager operates and patches resources; it does not set up account governance.",
      2: "Inspector scans for vulnerabilities in workloads.",
      3: "Shield protects against DDoS attacks.",
    },
    domain: 2, task: "2.2", topic: "AWS Control Tower"
  },
  {
    q: "Which service centrally configures and manages firewall rules across multiple accounts in an organization?",
    choices: [
      "AWS Firewall Manager",
      "AWS WAF",
      "Amazon VPC",
      "AWS Shield Standard",
    ],
    answer: 0,
    explain: "Firewall Manager sits above WAF, Shield Advanced, and security groups, applying a consistent policy across every account in an AWS Organization.",
    why_others_are_not_correct: {
      1: "WAF protects individual applications; Firewall Manager administers WAF at scale.",
      2: "VPC provides the network itself.",
      3: "Shield Standard is automatic DDoS protection with nothing to administer.",
    },
    domain: 2, task: "2.2", topic: "AWS Firewall Manager"
  },
  {
    q: "Which service lets you create and control the encryption keys used to protect your data across AWS services?",
    choices: [
      "AWS Key Management Service (AWS KMS)",
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS IAM",
    ],
    answer: 0,
    explain: "KMS creates, stores, and controls access to encryption keys, and integrates with most AWS services so you can encrypt data with a key you manage.",
    why_others_are_not_correct: {
      1: "Secrets Manager stores secrets such as database passwords, not encryption keys for services.",
      2: "Certificate Manager provisions TLS certificates.",
      3: "IAM controls identities and permissions, not keys.",
    },
    domain: 2, task: "2.2", topic: "AWS KMS"
  },
  {
    q: "A company with 30 AWS accounts wants to centrally prevent any account from using a particular AWS service. Which feature does this?",
    choices: [
      "Service control policies in AWS Organizations",
      "IAM user policies applied in each account",
      "Security groups",
      "Network ACLs",
    ],
    answer: 0,
    explain: "Service control policies set the maximum permissions an account or organizational unit can ever have. Even an account's root user cannot exceed an SCP, which makes them the right tool for organization-wide guardrails.",
    why_others_are_not_correct: {
      1: "IAM policies would have to be maintained separately in all 30 accounts and could be changed locally.",
      2: "Security groups filter network traffic, not service usage.",
      3: "Network ACLs filter traffic at the subnet level.",
    },
    domain: 2, task: "2.2", topic: "AWS Organizations"
  },
  {
    q: "Which service aggregates security findings from GuardDuty, Inspector, and Macie into one dashboard?",
    choices: [
      "AWS Security Hub",
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Systems Manager",
    ],
    answer: 0,
    explain: "Security Hub is the single pane of glass. It collects findings from multiple AWS security services and checks your account against security standards.",
    why_others_are_not_correct: {
      1: "CloudWatch handles metrics, logs, and alarms.",
      2: "CloudTrail records API activity.",
      3: "Systems Manager handles operational tasks.",
    },
    domain: 2, task: "2.2", topic: "AWS Security Hub"
  },
  {
    q: "Which service helps analyze and visualize security findings to determine the root cause of a potential issue?",
    choices: [
      "Amazon Detective",
      "Amazon GuardDuty",
      "AWS Config",
      "AWS Artifact",
    ],
    answer: 0,
    explain: "Detective takes findings, often from GuardDuty, and builds linked visualizations of the related activity so an investigator can work out what actually happened.",
    why_others_are_not_correct: {
      1: "GuardDuty generates the findings; Detective investigates them.",
      2: "Config tracks resource configuration.",
      3: "Artifact provides compliance reports.",
    },
    domain: 2, task: "2.2", topic: "Amazon Detective"
  },
  {
    q: "Which service continuously monitors for malicious activity and unauthorized behavior using machine learning and threat intelligence?",
    choices: [
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Config",
      "Amazon Macie",
    ],
    answer: 0,
    explain: "GuardDuty is the threat-detection service. It watches CloudTrail, VPC Flow Logs, and DNS logs for suspicious patterns such as crypto-mining or communication with known-bad IP addresses.",
    why_others_are_not_correct: {
      1: "WAF blocks malicious web requests; it does not analyze account-wide behavior.",
      2: "Config evaluates resource configuration, not threats.",
      3: "Macie discovers and protects sensitive data in S3.",
    },
    domain: 2, task: "2.2", topic: "Amazon GuardDuty"
  },
  {
    q: "Which service automatically scans EC2 instances and container images for software vulnerabilities and unintended network exposure?",
    choices: [
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Shield",
      "AWS Firewall Manager",
    ],
    answer: 0,
    explain: "Inspector is the vulnerability scanner. It continuously checks workloads against known CVEs and reports findings with a risk score.",
    why_others_are_not_correct: {
      1: "Macie is about sensitive data in S3.",
      2: "Shield defends against DDoS attacks.",
      3: "Firewall Manager centrally administers firewall rules.",
    },
    domain: 2, task: "2.2", topic: "Amazon Inspector"
  },
  {
    q: "Which service uses machine learning to discover and classify sensitive data, such as personally identifiable information, stored in Amazon S3?",
    choices: [
      "Amazon Macie",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Artifact",
    ],
    answer: 0,
    explain: "Macie scans S3 buckets and tells you where sensitive data such as names, addresses, and credit card numbers is sitting, which is often data nobody realized was there.",
    why_others_are_not_correct: {
      1: "GuardDuty detects threats and suspicious behavior, not sensitive data at rest.",
      2: "Inspector scans for software vulnerabilities.",
      3: "Artifact provides compliance reports.",
    },
    domain: 2, task: "2.2", topic: "Amazon Macie"
  },
  {
    q: "Who is responsible for determining whether a workload on AWS meets a specific regulatory requirement such as HIPAA?",
    choices: [
      "The customer, using AWS compliance evidence to support the assessment",
      "AWS, which certifies every customer workload",
      "The auditor, who configures the workload",
      "AWS Support, as part of the Business plan",
    ],
    answer: 0,
    explain: "AWS certifies its own infrastructure and makes the evidence available, but whether your particular application and configuration meet a regulation is your assessment to make.",
    why_others_are_not_correct: {
      1: "AWS certifies its services, not each customer's workload.",
      2: "Auditors assess; they do not configure your systems.",
      3: "Support plans do not provide compliance certification.",
    },
    domain: 2, task: "2.2", topic: "Compliance"
  },
  {
    q: "A company must store data in a specific country to meet a legal requirement. How does AWS support this?",
    choices: [
      "The customer chooses the AWS Region where data is stored",
      "AWS automatically moves data to the nearest compliant Region",
      "AWS Support files the compliance paperwork for the customer",
      "Data is replicated to every Region by default",
    ],
    answer: 0,
    explain: "You pick the Region, and AWS does not move your data out of it without your instruction. Region choice is the main control customers have over data residency.",
    why_others_are_not_correct: {
      1: "AWS never relocates your data on its own.",
      2: "Compliance filings are the customer's responsibility; AWS supplies evidence through Artifact.",
      3: "Data stays in the Region you choose unless you configure replication.",
    },
    domain: 2, task: "2.2", topic: "Compliance programs"
  },
  {
    q: "Which statement about AWS and customer data location is correct?",
    choices: [
      "Customers choose the Region, and AWS does not move the data elsewhere without instruction",
      "AWS replicates all data to at least three Regions automatically",
      "AWS stores data in whichever Region is cheapest",
      "Data location is determined by the customer's billing address",
    ],
    answer: 0,
    explain: "Region selection is the customer's control over data residency, and AWS states that it does not move customer content out of the selected Region.",
    why_others_are_not_correct: {
      1: "Cross-Region replication is something you configure and pay for.",
      2: "AWS does not relocate data for cost reasons.",
      3: "Billing address has no effect on where resources run.",
    },
    domain: 2, task: "2.2", topic: "Data residency"
  },
  {
    q: "Which service provisions and manages the TLS certificates used to encrypt traffic to a load balancer or CloudFront distribution?",
    choices: [
      "AWS Certificate Manager",
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS IAM",
    ],
    answer: 0,
    explain: "Certificate Manager issues and renews public TLS certificates at no charge for use with supported AWS services, which removes the usual expiry surprise.",
    why_others_are_not_correct: {
      1: "KMS manages encryption keys for data at rest.",
      2: "Secrets Manager stores application secrets.",
      3: "IAM manages identities and permissions.",
    },
    domain: 2, task: "2.2", topic: "Encryption in transit"
  },
  {
    q: "What is the difference between encryption at rest and encryption in transit?",
    choices: [
      "At rest protects stored data; in transit protects data moving across a network",
      "At rest protects data moving across a network; in transit protects stored data",
      "They are two names for the same protection",
      "At rest applies only to databases; in transit applies only to S3",
    ],
    answer: 0,
    explain: "At rest means data sitting on a disk, in a bucket, or in a database. In transit means data travelling between two points, usually protected with TLS.",
    why_others_are_not_correct: {
      1: "This reverses the two terms.",
      2: "They protect data in different states and are configured separately.",
      3: "Both apply across many services, not to one service each.",
    },
    domain: 2, task: "2.2", topic: "Encryption in transit and at rest"
  },
  {
    q: "A security team wants to be notified whenever a resource in any account drifts out of compliance with a required configuration. Which service provides this?",
    choices: [
      "AWS Config with Config rules",
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS Trusted Advisor",
    ],
    answer: 0,
    explain: "Config rules continuously evaluate resources against a desired configuration and flag anything non-compliant, which can trigger a notification or remediation.",
    why_others_are_not_correct: {
      1: "CloudTrail records the API call but does not evaluate compliance.",
      2: "Inspector scans for software vulnerabilities.",
      3: "Trusted Advisor runs periodic best-practice checks, not continuous custom rules.",
    },
    domain: 2, task: "2.2", topic: "Governance at scale"
  },
  {
    q: "Which combination would you use to collect application log files from EC2 instances and alert when errors spike?",
    choices: [
      "Amazon CloudWatch Logs with a CloudWatch alarm",
      "AWS CloudTrail with AWS Config",
      "AWS Artifact with Amazon Macie",
      "AWS Shield with AWS WAF",
    ],
    answer: 0,
    explain: "CloudWatch Logs collects the log data and a CloudWatch alarm watches a metric derived from it, firing a notification when a threshold is crossed.",
    why_others_are_not_correct: {
      1: "CloudTrail and Config are audit and configuration tools, not application log collection.",
      2: "Those are compliance and data-classification services.",
      3: "Those protect against web and DDoS attacks.",
    },
    domain: 2, task: "2.2", topic: "Logging and monitoring"
  },
  {
    q: "Which AWS service issues the temporary, limited-privilege credentials used when a role is assumed?",
    choices: [
      "AWS Security Token Service",
      "AWS KMS",
      "AWS Secrets Manager",
      "Amazon Cognito",
    ],
    answer: 0,
    explain: "STS mints the short-lived credentials behind role assumption and federation. The expiry is what makes roles safer than long-lived access keys.",
    why_others_are_not_correct: {
      1: "KMS manages encryption keys.",
      2: "Secrets Manager stores and rotates application secrets.",
      3: "Cognito handles application end-user identity and uses STS underneath.",
    },
    domain: 2, task: "2.3", topic: "AWS STS"
  },
  {
    q: "Which IAM feature identifies resources in your account that are shared with an external entity?",
    choices: [
      "IAM Access Analyzer",
      "IAM credential report",
      "IAM password policy",
      "IAM groups",
    ],
    answer: 0,
    explain: "Access Analyzer examines resource policies and reports anything reachable from outside your account or organization, which surfaces unintended sharing.",
    why_others_are_not_correct: {
      1: "The credential report lists users and the state of their credentials.",
      2: "The password policy sets complexity rules.",
      3: "Groups bundle permissions for users.",
    },
    domain: 2, task: "2.3", topic: "Access Analyzer"
  },
  {
    q: "An employee with programmatic access leaves the company. What is the correct immediate action?",
    choices: [
      "Deactivate or delete the employee's IAM access keys and user",
      "Change the account root password only",
      "Delete the VPC",
      "Rotate the AWS KMS keys",
    ],
    answer: 0,
    explain: "Removing the identity removes the access. Deactivating the keys stops programmatic use immediately, and deleting the user removes console access.",
    why_others_are_not_correct: {
      1: "The root password is unrelated to that employee's IAM credentials.",
      2: "Deleting the VPC would destroy infrastructure and not revoke the credentials.",
      3: "Rotating KMS keys does not revoke the user's access.",
    },
    domain: 2, task: "2.3", topic: "Access keys"
  },
  {
    q: "A developer is building a mobile app and needs sign-up, sign-in, and access control for the app's end users. Which service fits?",
    choices: [
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Directory Service",
      "AWS Organizations",
    ],
    answer: 0,
    explain: "Cognito is built for application end users: user pools handle sign-up and sign-in, and identity pools grant temporary AWS credentials to the app.",
    why_others_are_not_correct: {
      1: "IAM Identity Center is for your workforce signing in to AWS, not your app's customers.",
      2: "Directory Service runs managed Microsoft Active Directory.",
      3: "Organizations manages multiple AWS accounts.",
    },
    domain: 2, task: "2.3", topic: "Amazon Cognito"
  },
  {
    q: "An administrator needs a list of all IAM users in the account showing whether each has MFA enabled and when their keys were last rotated. What provides this?",
    choices: [
      "The IAM credential report",
      "AWS CloudTrail",
      "AWS Config",
      "The billing dashboard",
    ],
    answer: 0,
    explain: "The credential report is a downloadable file listing every IAM user and the status of their passwords, access keys, and MFA devices.",
    why_others_are_not_correct: {
      1: "CloudTrail logs API calls rather than summarizing credential state.",
      2: "Config tracks resource configuration.",
      3: "The billing dashboard shows spend.",
    },
    domain: 2, task: "2.3", topic: "Credential report"
  },
  {
    q: "What is the recommended way to let a user in one AWS account access resources in another account the company owns?",
    choices: [
      "Create an IAM role in the target account that the user assumes",
      "Create a duplicate IAM user in the target account and share the password",
      "Make the resources publicly accessible",
      "Email the target account's access keys to the user",
    ],
    answer: 0,
    explain: "A cross-account role is assumed on demand and issues temporary credentials, so there is no second password to manage and access can be revoked in one place.",
    why_others_are_not_correct: {
      1: "Duplicate users and shared passwords break accountability and multiply what has to be maintained.",
      2: "Public access exposes resources to everyone.",
      3: "Sharing access keys by email is a serious security failure.",
    },
    domain: 2, task: "2.3", topic: "Cross-account access"
  },
  {
    q: "What does federated access to AWS mean?",
    choices: [
      "Users authenticate with an external identity provider and then receive temporary AWS credentials",
      "Every user has a separate IAM user in every account",
      "Users share one set of access keys",
      "Access is granted based only on IP address",
    ],
    answer: 0,
    explain: "Federation means AWS trusts an external identity provider to verify who someone is. AWS then issues temporary credentials, so there is no separate AWS password to manage.",
    why_others_are_not_correct: {
      1: "Avoiding per-account IAM users is exactly what federation is for.",
      2: "Sharing credentials breaks accountability and is never recommended.",
      3: "IP address can be a condition, but it is not authentication.",
    },
    domain: 2, task: "2.3", topic: "Federated identity"
  },
  {
    q: "A company wants employees to sign in to AWS using their existing corporate directory credentials. Which service supports this?",
    choices: [
      "AWS IAM Identity Center",
      "Amazon Cognito",
      "AWS Secrets Manager",
      "Amazon GuardDuty",
    ],
    answer: 0,
    explain: "IAM Identity Center, formerly AWS Single Sign-On, connects to an external identity source such as Active Directory or an external identity provider and gives workforce users single sign-on across accounts.",
    why_others_are_not_correct: {
      1: "Cognito handles identity for your application's end users, such as mobile app customers.",
      2: "Secrets Manager stores credentials used by applications.",
      3: "GuardDuty is threat detection.",
    },
    domain: 2, task: "2.3", topic: "IAM Identity Center"
  },
  {
    q: "Which practice does AWS recommend for IAM permissions management?",
    choices: [
      "Grant permissions to groups or roles rather than to individual users",
      "Attach an administrator policy to every user for convenience",
      "Use the root user for all administrative tasks",
      "Share one IAM user among the operations team",
    ],
    answer: 0,
    explain: "Managing permissions at the group or role level scales and stays consistent. Per-user policies drift and become impossible to audit.",
    why_others_are_not_correct: {
      1: "Blanket administrator access violates least privilege.",
      2: "The root user should be reserved for the few tasks that require it.",
      3: "Shared identities destroy accountability in the audit trail.",
    },
    domain: 2, task: "2.3", topic: "IAM best practices"
  },
  {
    q: "What is the primary purpose of an IAM group?",
    choices: [
      "To attach a common set of permissions to many users at once",
      "To provide a login for an application",
      "To isolate network traffic",
      "To store encryption keys",
    ],
    answer: 0,
    explain: "A group is a permissions container. You attach policies to the group once, and every user you add inherits them, which is far easier to manage than per-user policies.",
    why_others_are_not_correct: {
      1: "Groups cannot sign in and have no credentials.",
      2: "Network isolation comes from VPCs, subnets, and security groups.",
      3: "Keys live in AWS KMS.",
    },
    domain: 2, task: "2.3", topic: "IAM groups"
  },
  {
    q: "An IAM user is in a group that allows access to Amazon S3, but a policy attached directly to the user explicitly denies S3 access. What is the result?",
    choices: [
      "Access is denied",
      "Access is allowed",
      "Access is allowed only for reading",
      "The policies cancel out and the user is prompted",
    ],
    answer: 0,
    explain: "An explicit deny always wins in IAM. Permissions are the union of all applicable policies, but any explicit deny overrides every allow.",
    why_others_are_not_correct: {
      1: "An explicit deny cannot be overridden by an allow.",
      2: "The deny applies to the whole action, not a subset.",
      3: "IAM evaluates policies automatically and never prompts.",
    },
    domain: 2, task: "2.3", topic: "IAM policies"
  },
  {
    q: "By default, what permissions does a newly created IAM user have?",
    choices: [
      "None, until permissions are granted",
      "Full administrative access",
      "Read-only access to all services",
      "Access to Amazon S3 only",
    ],
    answer: 0,
    explain: "IAM is deny by default. A new user can sign in but can do nothing until a policy grants specific permissions, which is least privilege in action.",
    why_others_are_not_correct: {
      1: "Administrative access must be explicitly granted.",
      2: "No permissions are granted implicitly, including read-only.",
      3: "No service access is granted by default.",
    },
    domain: 2, task: "2.3", topic: "IAM policy evaluation"
  },
  {
    q: "What is the main advantage of an IAM role over an IAM user with access keys?",
    choices: [
      "Roles provide temporary credentials that rotate automatically",
      "Roles never expire, so there is less to manage",
      "Roles can only be used by humans",
      "Roles bypass the need for permissions policies",
    ],
    answer: 0,
    explain: "A role is assumed, and the credentials it hands out are short-lived and rotated for you. There is no long-term secret to store, leak, or rotate.",
    why_others_are_not_correct: {
      1: "The opposite is true, and the expiry is the point.",
      2: "Roles are commonly assumed by services such as EC2 and Lambda, not just people.",
      3: "Roles still need permissions policies attached.",
    },
    domain: 2, task: "2.3", topic: "IAM roles"
  },
  {
    q: "What is the recommended way to grant an application running on an EC2 instance permission to read from an S3 bucket?",
    choices: [
      "Attach an IAM role to the EC2 instance",
      "Store an IAM user's access keys in the application code",
      "Use the account root user credentials",
      "Make the S3 bucket public",
    ],
    answer: 0,
    explain: "An IAM role supplies temporary credentials that rotate automatically, so there is nothing to leak and nothing to rotate by hand. This is the standard pattern for anything running on AWS.",
    why_others_are_not_correct: {
      1: "Hard-coded access keys get committed to repositories and leaked. This is the single most common cause of compromised accounts.",
      2: "The root user should never be used for routine work.",
      3: "Making a bucket public exposes it to the entire internet.",
    },
    domain: 2, task: "2.3", topic: "IAM users, groups, roles"
  },
  {
    q: "Which principle says users should be granted only the permissions they need to do their job, and nothing more?",
    choices: [
      "Least privilege",
      "Defense in depth",
      "Shared responsibility",
      "High availability",
    ],
    answer: 0,
    explain: "Least privilege limits the damage when an account is misused or compromised. Start with no permissions and add only what is needed.",
    why_others_are_not_correct: {
      1: "Defense in depth means layering multiple controls, which is related but different.",
      2: "Shared responsibility divides duties between AWS and the customer.",
      3: "High availability is about uptime, not permissions.",
    },
    domain: 2, task: "2.3", topic: "Least privilege"
  },
  {
    q: "What does multi-factor authentication add to a sign-in?",
    choices: [
      "A second piece of evidence, such as a code from a device, in addition to the password",
      "A longer password requirement",
      "Automatic password rotation",
      "Encryption of data at rest",
    ],
    answer: 0,
    explain: "MFA combines something you know, the password, with something you have, such as an authenticator app or hardware key. A stolen password alone is then not enough.",
    why_others_are_not_correct: {
      1: "Password length is a separate policy setting.",
      2: "Rotation is also separate and does not provide a second factor.",
      3: "Encryption at rest protects stored data, not sign-in.",
    },
    domain: 2, task: "2.3", topic: "MFA"
  },
  {
    q: "Which IAM feature lets an administrator require a minimum password length and regular password changes for all IAM users in the account?",
    choices: [
      "An account password policy",
      "A service control policy",
      "A bucket policy",
      "A security group rule",
    ],
    answer: 0,
    explain: "The IAM account password policy sets complexity, length, reuse, and expiration rules for every IAM user in that account.",
    why_others_are_not_correct: {
      1: "Service control policies limit which services accounts can use, not password rules.",
      2: "Bucket policies control access to S3 objects.",
      3: "Security groups filter network traffic.",
    },
    domain: 2, task: "2.3", topic: "Password policy"
  },
  {
    q: "A developer needs to read from one S3 bucket. Which permission grant follows least privilege?",
    choices: [
      "Read access to that specific bucket only",
      "Full access to Amazon S3",
      "Administrator access to the account",
      "Read access to all AWS services",
    ],
    answer: 0,
    explain: "Scope the grant to the exact action and the exact resource. If the need grows later, the policy can be widened deliberately.",
    why_others_are_not_correct: {
      1: "Full S3 access includes buckets the developer has no reason to touch.",
      2: "Administrator access is far beyond the requirement.",
      3: "Account-wide read access still exposes data unnecessarily.",
    },
    domain: 2, task: "2.3", topic: "Principle of least privilege"
  },
  {
    q: "Which task can ONLY be performed by the AWS account root user?",
    choices: [
      "Closing the AWS account",
      "Launching an EC2 instance",
      "Creating an S3 bucket",
      "Attaching a policy to an IAM group",
    ],
    answer: 0,
    explain: "A small set of tasks is reserved for the root user, including closing the account, changing the account name or email, and changing the support plan. Everything else should be done by an IAM identity.",
    why_others_are_not_correct: {
      1: "Any identity with the right permissions can launch an instance.",
      2: "Bucket creation is a normal permission.",
      3: "Managing IAM policies is a standard administrative permission.",
    },
    domain: 2, task: "2.3", topic: "Root user"
  },
  {
    q: "What is the FIRST thing AWS recommends you do after creating a new AWS account?",
    choices: [
      "Enable multi-factor authentication on the root user and stop using it for daily work",
      "Create a public S3 bucket for backups",
      "Delete the root user",
      "Turn off CloudTrail to reduce cost",
    ],
    answer: 0,
    explain: "The root user can do anything, including closing the account, so it gets MFA and then gets locked away. Daily work moves to IAM identities with only the permissions they need.",
    why_others_are_not_correct: {
      1: "Public buckets are a security risk, not a setup step.",
      2: "The root user cannot be deleted. It exists for the life of the account.",
      3: "CloudTrail is a core audit control and should stay on.",
    },
    domain: 2, task: "2.3", topic: "Root user"
  },
  {
    q: "Which TWO actions should be taken to secure the AWS account root user? (Choose TWO.)",
    choices: [
      "Enable multi-factor authentication on it",
      "Create IAM identities for daily work instead of using it",
      "Share the root password with the whole team",
      "Create access keys for the root user for automation",
      "Delete the root user after setup",
    ],
    answer: [0, 1],
    explain: "Protect the root user with MFA and then stop using it. Day-to-day work should run through IAM identities that have only the permissions they need.",
    why_others_are_not_correct: {
      2: "Sharing credentials destroys accountability and is never recommended.",
      3: "Root access keys should not exist; use IAM roles for automation.",
      4: "The root user cannot be deleted while the account exists.",
    },
    domain: 2, task: "2.3", topic: "Root user"
  },
  {
    q: "A customer notices an EC2 instance in their account sending spam after a compromise. What should they do FIRST?",
    choices: [
      "Isolate the instance and investigate, then report through the appropriate AWS channel",
      "Delete the entire AWS account",
      "Ignore it because AWS secures the infrastructure",
      "Open a billing dispute",
    ],
    answer: 0,
    explain: "Containment comes first, then investigation. The compromise is on the customer's side of the shared responsibility model, so remediation is theirs to perform.",
    why_others_are_not_correct: {
      1: "Deleting the account destroys evidence and every other workload.",
      2: "AWS secures infrastructure; a compromised guest instance is the customer's responsibility.",
      3: "This is a security incident, not a billing matter.",
    },
    domain: 2, task: "2.4", topic: "AWS Abuse"
  },
  {
    q: "A company wants to deploy a third-party intrusion detection appliance in its AWS environment. Where can it find and subscribe to one?",
    choices: [
      "AWS Marketplace",
      "AWS Artifact",
      "AWS Config",
      "AWS Trusted Advisor",
    ],
    answer: 0,
    explain: "AWS Marketplace is a catalog of third-party software, including security products, that you can subscribe to and deploy with billing handled through your AWS account.",
    why_others_are_not_correct: {
      1: "Artifact is for compliance documents.",
      2: "Config tracks resource configuration.",
      3: "Trusted Advisor gives best-practice checks.",
    },
    domain: 2, task: "2.4", topic: "AWS Marketplace"
  },
  {
    q: "Which AWS service provides a managed firewall and intrusion prevention system at the VPC perimeter?",
    choices: [
      "AWS WAF",
      "AWS Shield",
      "AWS Network Firewall",
      "AWS Config",
    ],
    answer: 2,
    explain: "AWS Network Firewall is a managed network security service that offers firewall and intrusion prevention functionality at the VPC boundary or as a central inspection point.",
    why_others_are_not_correct: {
      0: "AWS WAF is a web application firewall that protects HTTP/HTTPS traffic at the application layer.",
      1: "AWS Shield provides DDoS protection, not full firewall/IPS at VPC perimeter.",
      3: "AWS Config is a configuration monitoring service, not a network firewall.",
    },
    domain: 2, task: "2.4", topic: "AWS Network Firewall"
  },
  {
    q: "Which service stores database credentials and can rotate them automatically?",
    choices: [
      "AWS Secrets Manager",
      "AWS KMS",
      "AWS Artifact",
      "Amazon Macie",
    ],
    answer: 0,
    explain: "Secrets Manager keeps secrets such as database passwords and API keys out of your code, and can rotate supported credentials on a schedule without an outage.",
    why_others_are_not_correct: {
      1: "KMS manages encryption keys, not application secrets and their rotation.",
      2: "Artifact provides compliance reports.",
      3: "Macie finds sensitive data in S3.",
    },
    domain: 2, task: "2.4", topic: "AWS Secrets Manager"
  },
  {
    q: "Which service protects AWS workloads against distributed denial of service attacks, with a standard tier enabled automatically at no extra cost?",
    choices: [
      "AWS Shield",
      "AWS WAF",
      "Amazon Inspector",
      "AWS Firewall Manager",
    ],
    answer: 0,
    explain: "AWS Shield Standard is on for every AWS customer at no additional charge and defends against common network and transport layer DDoS attacks. Shield Advanced adds higher-level protection and response support for a fee.",
    why_others_are_not_correct: {
      1: "WAF filters application-layer requests and is charged separately.",
      2: "Inspector scans for vulnerabilities.",
      3: "Firewall Manager centrally manages rules across accounts.",
    },
    domain: 2, task: "2.4", topic: "AWS Shield"
  },
  {
    q: "Which service inspects your AWS account and recommends improvements in areas including security and cost optimization?",
    choices: [
      "AWS Trusted Advisor",
      "AWS Artifact",
      "AWS CloudTrail",
      "AWS Config",
    ],
    answer: 0,
    explain: "Trusted Advisor runs checks across cost optimization, performance, security, fault tolerance, and service limits, then tells you what to fix. Full checks require Business or Enterprise Support.",
    why_others_are_not_correct: {
      1: "Artifact provides AWS compliance reports.",
      2: "CloudTrail records API activity.",
      3: "Config tracks configuration state and compliance with rules.",
    },
    domain: 2, task: "2.4", topic: "AWS Trusted Advisor"
  },
  {
    q: "Which service protects web applications from common exploits such as SQL injection and cross-site scripting?",
    choices: [
      "AWS WAF",
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS KMS",
    ],
    answer: 0,
    explain: "AWS WAF is a web application firewall. It inspects HTTP and HTTPS requests and blocks those matching rules you define or managed rule groups you subscribe to.",
    why_others_are_not_correct: {
      1: "Shield protects against volumetric DDoS attacks, which is a different threat.",
      2: "GuardDuty detects suspicious account activity rather than filtering web requests.",
      3: "KMS manages encryption keys.",
    },
    domain: 2, task: "2.4", topic: "AWS WAF"
  },
  {
    q: "Which approach lets administrators open a shell on a private EC2 instance without exposing SSH to the internet or managing SSH keys?",
    choices: [
      "AWS Systems Manager Session Manager",
      "Opening port 22 to 0.0.0.0/0",
      "Assigning a public IP address to every instance",
      "Disabling the security group",
    ],
    answer: 0,
    explain: "Session Manager connects through the Systems Manager service rather than an inbound network path, so the instance needs no public address, no open port, and no key pair.",
    why_others_are_not_correct: {
      1: "Opening SSH to the whole internet is the exposure you are trying to avoid.",
      2: "Public IP addresses increase the attack surface unnecessarily.",
      3: "Security groups cannot be disabled, and removing protection is not a solution.",
    },
    domain: 2, task: "2.4", topic: "Bastion and Session Manager"
  },
  {
    q: "Which combination best protects a public web application against both volumetric attacks and application-layer exploits?",
    choices: [
      "AWS Shield with AWS WAF",
      "Amazon Inspector with AWS Config",
      "AWS KMS with AWS Secrets Manager",
      "Amazon Macie with Amazon Detective",
    ],
    answer: 0,
    explain: "Shield absorbs the flood of traffic at the network and transport layers, and WAF inspects individual HTTP requests for malicious content. They address different layers.",
    why_others_are_not_correct: {
      1: "Those are vulnerability scanning and configuration tracking tools.",
      2: "Those manage keys and secrets.",
      3: "Those find sensitive data and investigate findings.",
    },
    domain: 2, task: "2.4", topic: "DDoS protection"
  },
  {
    q: "How can a company ensure that every new Amazon EBS volume in a Region is encrypted?",
    choices: [
      "Enable EBS encryption by default for the account in that Region",
      "Encrypt each volume manually after creation",
      "Store volumes in Amazon S3",
      "Use a larger volume type",
    ],
    answer: 0,
    explain: "EBS encryption by default is an account and Region setting, so every new volume and snapshot is encrypted without anyone remembering to tick a box.",
    why_others_are_not_correct: {
      1: "An existing volume cannot be encrypted in place, and manual steps get missed.",
      2: "EBS volumes are not stored as S3 objects by the customer.",
      3: "Volume size has nothing to do with encryption.",
    },
    domain: 2, task: "2.4", topic: "Encryption at rest"
  },
  {
    q: "In the context of AWS networking, what characteristic best describes a Network ACL (Access Control List)?",
    choices: [
      "Instance-level stateful firewall",
      "Subnet-level stateless filter",
      "Managed by AWS automatically for all traffic",
      "Replaces security groups",
    ],
    answer: 1,
    explain: "A Network ACL is applied at the subnet level, is stateless (you must explicitly allow inbound and outbound rules), and it controls traffic entering or leaving a subnet.",
    why_others_are_not_correct: {
      0: "Security Groups are instance-level and stateful; Network ACLs are subnet-level and stateless.",
      2: "Network ACLs must be configured by the customer; they are not fully managed by AWS automatically.",
      3: "They do not replace security groups; both operate in their respective scopes.",
    },
    domain: 2, task: "2.4", topic: "Network ACLs"
  },
  {
    q: "What is the current AWS position on customers performing penetration testing against their own resources?",
    choices: [
      "Permitted for a defined list of services without prior approval, subject to AWS policy",
      "Never permitted under any circumstances",
      "Permitted only with a signed contract and 90 days' notice",
      "Permitted against any AWS customer's resources",
    ],
    answer: 0,
    explain: "AWS allows customers to test their own workloads on an approved list of services without requesting permission first, provided the testing follows the published policy.",
    why_others_are_not_correct: {
      1: "Testing your own resources is explicitly allowed within the policy.",
      2: "Prior approval is no longer required for the listed services.",
      3: "Testing other customers' resources is never permitted and would be an abuse report.",
    },
    domain: 2, task: "2.4", topic: "Penetration testing"
  },
  {
    q: "Which Amazon S3 feature protects objects from being permanently deleted or overwritten by accident?",
    choices: [
      "Versioning",
      "Block Public Access",
      "Transfer Acceleration",
      "Requester Pays",
    ],
    answer: 0,
    explain: "With versioning on, an overwrite creates a new version and a delete adds a marker, so the previous object can still be recovered.",
    why_others_are_not_correct: {
      1: "Block Public Access prevents exposure, not accidental deletion.",
      2: "Transfer Acceleration speeds uploads.",
      3: "Requester Pays shifts data transfer charges to the requester.",
    },
    domain: 2, task: "2.4", topic: "S3 security features"
  },
  {
    q: "Which practice would MOST improve the security of an S3 bucket that currently allows public read access it does not need?",
    choices: [
      "Enable S3 Block Public Access and grant access through a bucket policy or IAM instead",
      "Move the bucket to a different Region",
      "Enable versioning on the bucket",
      "Change the bucket's storage class",
    ],
    answer: 0,
    explain: "Block Public Access is the safety switch that stops a bucket from being exposed to the internet, and specific access is then granted deliberately rather than broadly.",
    why_others_are_not_correct: {
      1: "The Region has no bearing on whether a bucket is public.",
      2: "Versioning protects against overwrites and deletes, not exposure.",
      3: "Storage class affects cost and retrieval time only.",
    },
    domain: 2, task: "2.4", topic: "Security best practices"
  },
  {
    q: "What does a newly created security group allow by default?",
    choices: [
      "No inbound traffic and all outbound traffic",
      "All inbound and all outbound traffic",
      "All inbound and no outbound traffic",
      "No inbound and no outbound traffic",
    ],
    answer: 0,
    explain: "Security groups start closed to the world and open to the internet for outbound. You add inbound rules for exactly the traffic you intend to accept.",
    why_others_are_not_correct: {
      1: "Allowing all inbound by default would be unsafe and is not how AWS configures it.",
      2: "Outbound is permitted by default.",
      3: "Outbound traffic is allowed, which is why instances can reach update servers.",
    },
    domain: 2, task: "2.4", topic: "Security group defaults"
  },
  {
    q: "What type of firewall acts at the instance level in a VPC?",
    choices: [
      "Network ACL",
      "Security Group",
      "Internet Gateway",
      "Elastic Load Balancer",
    ],
    answer: 1,
    explain: "Security Groups act as virtual firewalls controlling inbound and outbound traffic for EC2 instances.",
    why_others_are_not_correct: {
      0: "Network ACLs act at the subnet level, not instance level.",
      2: "Internet Gateways provide connectivity, not filtering.",
      3: "Load Balancers distribute traffic but don't filter it.",
    },
    domain: 2, task: "2.4", topic: "Security groups"
  },
  {
    q: "Which statement correctly contrasts a security group with a network ACL?",
    choices: [
      "A security group is stateful and attaches to an instance; a network ACL is stateless and attaches to a subnet",
      "A security group is stateless and attaches to a subnet; a network ACL is stateful and attaches to an instance",
      "Both are stateful and attach to instances",
      "Both are stateless and attach to subnets",
    ],
    answer: 0,
    explain: "Stateful means return traffic is allowed automatically, which is why a security group only needs inbound rules for the traffic you want. A network ACL evaluates each direction separately and supports explicit deny rules.",
    why_others_are_not_correct: {
      1: "This reverses both properties.",
      2: "Network ACLs are stateless and operate at the subnet boundary.",
      3: "Security groups are stateful and operate at the instance boundary.",
    },
    domain: 2, task: "2.4", topic: "Security groups vs network ACLs"
  },
];
