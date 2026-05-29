export const dbaServices = [
  {
    slug: "sql-server-administration",
    name: "SQL Server Administration",
    tagline: "End-to-end management of your enterprise SQL infrastructure.",
    shortDesc: "Dedicated database administration services keeping your Microsoft SQL Server environments stable, healthy, and highly available.",
    longDesc: "Rajes Solutions offers comprehensive SQL Server Administration services tailored to maintain your mission-critical setups. Our team handles everything from standard installations and configuration adjustments to complex cluster management, AlwaysOn Availability Group configurations, and routine patch applications. We operate as an extension of your IT division, offering 24/7 reliability and proactive adjustments.",
    icon: "Database",
    themeColor: "from-blue-700 to-indigo-800",
    seo: {
      title: "SQL Server Database Administration | Remote DBA | Rajes Solutions",
      description: "Get professional, 24/7 Remote SQL Server DBA Support. We manage clustering, AlwaysOn, patching, user access, and system health checks.",
      keywords: "SQL Server DBA, Remote DBA support, database administration, SQL Server clustering, AlwaysOn"
    },
    capabilities: [
      {
        title: "AlwaysOn & Failover Clustering",
        description: "Design and implement high availability (HA) and disaster recovery (DR) architectures to target 99.99% system uptime."
      },
      {
        title: "Version Upgrades & Patching",
        description: "Plan and execute zero-downtime upgrades, service pack applications, and cumulative security patch updates."
      },
      {
        title: "Capacity Planning",
        description: "Analyze data growth trends, evaluate disk configurations, and plan storage scalability parameters before issues arise."
      },
      {
        title: "User Management & Auditing",
        description: "Maintain role-based security permissions, audit logins, and implement schemas to track database usage patterns."
      }
    ],
    deliverables: [
      "24/7/365 active DBA support and incident response.",
      "Monthly server health scorecards and infrastructure recommendations.",
      "Seamless software and patch updates with minimal maintenance windows.",
      "Robust Disaster Recovery testing and setup."
    ],
    faqs: [
      {
        question: "What versions of SQL Server do you support?",
        answer: "We support all modern enterprise versions, including SQL Server 2012, 2014, 2016, 2017, 2019, and 2022, both on-premises and on cloud platforms (Azure SQL, AWS RDS)."
      },
      {
        question: "How do you handle 24/7 emergency support?",
        answer: "We run a rotating team of certified DBAs. When an critical incident occurs, our monitoring system automatically pages the primary on-call DBA, triggering an investigation within minutes."
      }
    ]
  },
  {
    slug: "performance-tuning",
    name: "Performance Tuning",
    tagline: "Accelerate slow queries and unlock database throughput.",
    shortDesc: "Comprehensive database optimization, query tuning, index restructuring, and resource allocation to eliminate bottleneck points.",
    longDesc: "Slow database response times drag down your entire web application. Rajes Solutions specializes in deep-dive SQL performance tuning. We look beyond basic settings to inspect query execution plans, trace deadlocks, rebuild fragmented indexes, and optimize tempdb usage. We squeeze maximum performance out of your existing hardware, saving thousands in cloud scaling costs.",
    icon: "Zap",
    themeColor: "from-amber-500 to-red-600",
    seo: {
      title: "SQL Performance Tuning & Optimization | Rajes Solutions",
      description: "Fix slow SQL queries, optimize execution plans, rebuild indexes, and eliminate database bottlenecks with our DBA tuning services.",
      keywords: "SQL tuning, query optimization, database performance tuning, index fragmentation, fix slow SQL"
    },
    capabilities: [
      {
        title: "Execution Plan Analysis",
        description: "Identify index scans, bad card estimations, key lookups, and rewrite complex SQL queries to enforce fast seek plans."
      },
      {
        title: "Index Optimization",
        description: "Design optimal clustered and non-clustered indexes. Implement index strategies and remove unused indexes."
      },
      {
        title: "Locks & Deadlock Resolution",
        description: "Identify transaction blocking patterns. Adjust isolation levels (e.g. RCSI) and resolve deadlock errors."
      },
      {
        title: "Resource Governor & Settings",
        description: "Configure MAXDOP, cost threshold for parallelism, memory limits, and database settings to match your workloads."
      }
    ],
    deliverables: [
      "Up to 80% speedup in slow-running transactions and reports.",
      "Optimized CPU and RAM consumption profiles, delaying expensive hardware upgrades.",
      "Clear before-and-after query performance reports.",
      "Establishment of regular index maintenance scripts."
    ],
    faqs: [
      {
        question: "Can performance tuning be done on live production servers?",
        answer: "Yes, we conduct analysis using lightweight, non-invasive tools (like Extended Events, DMVs, and Query Store). High-impact changes, like index rebuilds or schema updates, are scheduled during off-peak hours."
      },
      {
        question: "Do you optimize application code or just the database?",
        answer: "We identify the problematic SQL queries, and provide optimized rewrite templates and index suggestions to your application developers."
      }
    ]
  },
  {
    slug: "backup-recovery",
    name: "Backup & Recovery",
    tagline: "Protect your enterprise data with resilient recovery plans.",
    shortDesc: "Design, implementation, and regular verification of automated backup routines to guarantee zero data loss.",
    longDesc: "A backup plan is only as good as its last successful restore test. Rajes Solutions provides complete backup and recovery management. We design customized backup schedules (Full, Differential, Transaction Log) matching your business Recovery Point Objective (RPO) and Recovery Time Objective (RTO). Most importantly, we run automated restore tests to verify backups before a disaster occurs.",
    icon: "ShieldCheck",
    themeColor: "from-emerald-600 to-blue-700",
    seo: {
      title: "SQL Backup & Disaster Recovery Solutions | Rajes Solutions",
      description: "Guarantee business continuity with automated database backups, log shipping, remote storage sync, and recovery verification.",
      keywords: "database backup, SQL disaster recovery, RPO RTO, log shipping, backup restoration test"
    },
    capabilities: [
      {
        title: "Custom RPO/RTO Strategies",
        description: "Formulate schedules to limit data loss risks and minimize system restore recovery times during failures."
      },
      {
        title: "Log Shipping & Replication",
        description: "Configure warm standby database instances via transaction log shipping or merge/transactional replication models."
      },
      {
        title: "Offsite & Cloud Archiving",
        description: "Sync backups securely to off-premises cloud storage (Azure Blob, AWS S3) with end-to-end encryption."
      },
      {
        title: "Restore Verification Audits",
        description: "Perform scheduled test restores of backup files to check for page corruption and confirm recovery consistency."
      }
    ],
    deliverables: [
      "Fully automated, error-free backup routines.",
      "Disaster recovery runbooks detailing step-by-step restoration orders.",
      "Encrypted offsite backup storage paths.",
      "Certified compliance logs validating that restore tests are successful."
    ],
    faqs: [
      {
        question: "How do you protect backup files from ransomware?",
        answer: "We implement immutable backups and use write-once-read-many (WORM) cloud buckets, ensuring files cannot be modified or deleted even if the primary network is compromised."
      },
      {
        question: "How often do you test disaster recovery?",
        answer: "We typically run full restore verification tests monthly or quarterly, providing detailed validation reports to your compliance officer."
      }
    ]
  },
  {
    slug: "database-monitoring",
    name: "Database Monitoring",
    tagline: "Proactive alerting and health dashboards for zero downtime.",
    shortDesc: "24/7 performance tracking, disk space warnings, CPU utilization tracking, and immediate anomaly notifications.",
    longDesc: "Don't wait for your users to tell you the application is slow. Rajes Solutions installs enterprise-grade monitoring systems that check database metrics in real-time. We keep track of database size growth, transaction rates, blocking chains, and disk space limits, resolving small issues before they scale into severe downtime events.",
    icon: "Activity",
    themeColor: "from-sky-500 to-indigo-600",
    seo: {
      title: "24/7 SQL Database Monitoring & Alerting | Rajes Solutions",
      description: "Monitor SQL Server round-the-clock. Track blocking queries, disk alerts, memory stress, and error logs with real-time DBA alerting.",
      keywords: "database monitoring, SQL Server alert, disk space monitoring, server telemetry, 24/7 DBA"
    },
    capabilities: [
      {
        title: "Real-time Metrics Dashboards",
        description: "Track CPU stress, page life expectancy, buffer cache ratios, and active transaction counts in live dashboards."
      },
      {
        title: "Granular Alerting Systems",
        description: "Configure tiered alert protocols (Info, Warning, Critical) sent directly to MS Teams, Slack, email, or pager systems."
      },
      {
        title: "Disk Space Predictors",
        description: "Predict disk capacity runout timelines using historic growth metrics to enable proactive expansions."
      },
      {
        title: "SQL Error Log Scanning",
        description: "Scan system event viewer files and database engine logs automatically to flag page errors, corruptions, or login failures."
      }
    ],
    deliverables: [
      "Custom monitoring dashboard installations tailored for your operations team.",
      "Configured warning trigger matrices for database health metrics.",
      "Prompt notifications and resolutions for alerts.",
      "Weekly diagnostic logs summarizing CPU, memory, and query growth statistics."
    ],
    faqs: [
      {
        question: "Do you install heavy agents on our production servers?",
        answer: "No, we use lightweight, agentless monitoring solutions that run query DMV collectors, consuming less than 1% of server CPU resources."
      },
      {
        question: "Can you integrate with our existing monitoring tools (e.g. Datadog, Zabbix)?",
        answer: "Yes, we can configure and optimize alerts in your pre-existing systems, including Datadog, Dynatrace, New Relic, or Prometheus."
      }
    ]
  },
  {
    slug: "migration-support",
    name: "Migration Support",
    tagline: "Seamless transitions to cloud databases and modern versions.",
    shortDesc: "Risk-free database migration plans, cross-platform transitions, and cloud migrations with near-zero business downtime.",
    longDesc: "Migrating databases presents significant risks of data loss or extended outages. Rajes Solutions offers expert migration assistance. Whether you are moving SQL Server to Azure, migrating MySQL to AWS, or upgrading legacy 2008 databases to SQL Server 2022, we plan and validate every step, running parallel validations to ensure a smooth transition.",
    icon: "RefreshCw",
    themeColor: "from-violet-600 to-fuchsia-600",
    seo: {
      title: "SQL Database Migration Services | On-Premises to Cloud | Rajes Solutions",
      description: "Migrate SQL databases safely. legacy upgrades, SQL Server to Azure SQL, AWS migration, and cross-platform database transfers.",
      keywords: "database migration, cloud migration, legacy SQL upgrade, database transfer, SQL Server to Azure"
    },
    capabilities: [
      {
        title: "Pre-Migration Assessments",
        description: "Audit legacy features, evaluate schema compatibilities, and identify compatibility errors before migration begins."
      },
      {
        title: "Near-Zero Downtime Moves",
        description: "Utilize transactional replication, log shipping, or cloud migration engines to keep systems in sync until cutover."
      },
      {
        title: "Cloud Re-platforming",
        description: "Convert physical VMs to cloud managed platforms like Azure SQL Database or AWS RDS, optimizing configs."
      },
      {
        title: "Data Verification Audits",
        description: "Perform strict checksum tests and schema validation runs to guarantee every record matches precisely post-migration."
      }
    ],
    deliverables: [
      "Detailed step-by-step migration plan and risk assessment document.",
      "Configured migration pipeline with rollback procedures.",
      "Minimal cutover maintenance windows (often under 30 minutes).",
      "Post-migration performance tuning and configuration verification."
    ],
    faqs: [
      {
        question: "How do you minimize downtime during cutover?",
        answer: "We keep a replica server synced in near real-time. During cutover, we set the source database to read-only, apply final transaction logs, and immediately point connection strings to the target."
      },
      {
        question: "Can you help migrate to cloud-native database options?",
        answer: "Yes, we specialize in moving traditional SQL Server workloads into Azure SQL Database or AWS RDS, configuring scaling profiles."
      }
    ]
  },
  {
    slug: "security-management",
    name: "Security Management",
    tagline: "Lock down your data assets and maintain compliance.",
    shortDesc: "Implement advanced database hardening, transparent data encryption (TDE), access auditing, and regulatory compliance.",
    longDesc: "Database engines are prime targets for cyberattacks. Rajes Solutions Security Management protects your database layer. We implement strict security configurations: disabling insecure protocols, setting up Transparent Data Encryption (TDE), auditing data updates, masking sensitive fields, and protecting against SQL injections.",
    icon: "ShieldAlert",
    themeColor: "from-rose-700 to-navy-900",
    seo: {
      title: "SQL Database Security & Hardening | Rajes Solutions",
      description: "Secure your database assets. We configure Transparent Data Encryption (TDE), audit access logs, mask sensitive data, and enforce SSL.",
      keywords: "database security, SQL hardening, TDE encryption, database audit, HIPAA GDPR compliance"
    },
    capabilities: [
      {
        title: "Transparent Data Encryption (TDE)",
        description: "Configure encryption at rest to prevent unauthorized access via database backup file thefts."
      },
      {
        title: "Dynamic Data Masking",
        description: "Mask sensitive fields (like credit card numbers or phone contacts) for non-authorized system users."
      },
      {
        title: "Access Control & Audit Logs",
        description: "Enforce least privilege principles, integrate Active Directory logins, and monitor login attempts."
      },
      {
        title: "Vulnerability Scanning",
        description: "Run regular tests to flag security loopholes, trace missing patches, and verify server configuration states."
      }
    ],
    deliverables: [
      "Hardened database server settings matching CIS Benchmarks.",
      "Active database encryption keys (TDE) and certificate backups.",
      "Detailed user authorization matrices.",
      "Compliance audit logs ready for ISO 27001, HIPAA, or GDPR checks."
    ],
    faqs: [
      {
        question: "Does encryption degrade database performance?",
        answer: "With modern hardware that supports AES-NI instruction sets, configuring Transparent Data Encryption (TDE) typically introduces a negligible CPU overhead of under 2-3%."
      },
      {
        question: "Can you help resolve database security flags raised during external IT audits?",
        answer: "Yes, we regularly review audit findings, draft remediation plans, and execute hardening updates to secure your databases."
      }
    ]
  }
];
