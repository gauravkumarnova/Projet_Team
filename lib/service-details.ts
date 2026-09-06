import type { ServiceDetailConfig } from '../components/marketing/ServiceDetailPage';

export const cloudDevops: ServiceDetailConfig = {
  eyebrow: 'Cloud & DevOps Engineering',
  title: 'Make infrastructure and deployments easier to operate, repeat and scale.',
  description: 'We help teams improve AWS infrastructure, deployment pipelines, automation, containers and monitoring so engineering environments are less dependent on manual processes and individual knowledge.',
  primaryAction: { label: 'Request a Cloud Assessment', href: '/contact/' },
  secondaryAction: { label: 'Book a Technical Consultation', href: '/contact/' },
  visualItems: ['AWS infrastructure', 'CI/CD and automation', 'Containers and Kubernetes', 'Monitoring and operations'],
  context: {
    title: 'Cloud and DevOps problems often appear as operational friction.',
    bullets: [
      'deployments are manual or inconsistent',
      'environments are difficult to reproduce',
      'AWS architecture needs review',
      'infrastructure changes are not automated',
      'monitoring is incomplete',
      'scaling has become difficult',
      'developers are spending too much time on infrastructure',
      'the team lacks dedicated DevOps capability',
    ],
  },
  capabilities: {
    title: 'Cloud engineering across infrastructure, automation and deployment.',
    items: [
      { title: 'AWS Infrastructure', description: 'Architecture and implementation across relevant AWS services, networking, compute, databases, storage, access controls and monitoring.' },
      { title: 'CI/CD', description: 'Design and improvement of deployment pipelines using tools such as Jenkins, GitHub Actions and GitLab CI.' },
      { title: 'Infrastructure as Code', description: 'Repeatable infrastructure management using Terraform, Ansible and CloudFormation where appropriate.' },
      { title: 'Containers', description: 'Docker-based application packaging and Kubernetes/EKS implementation where container orchestration is justified.' },
      { title: 'Monitoring', description: 'Operational visibility using CloudWatch, Prometheus, Grafana, ELK and related monitoring approaches.' },
      { title: 'Linux & Web Infrastructure', description: 'Linux systems, Nginx, Apache and supporting infrastructure configuration.' },
    ],
  },
  approach: {
    title: 'Improve the environment without adding unnecessary complexity.',
    paragraphs: ['We begin with the current architecture, deployment process and operational requirements. The implementation is then designed around the actual scale, team and reliability needs rather than automatically introducing more tooling.'],
  },
  experience: {
    title: 'Experience brought by the team includes:',
    bullets: [
      'production AWS infrastructure',
      'CI/CD implementation',
      'Infrastructure as Code',
      'Docker and Kubernetes environments',
      'database migration',
      'monitoring and alerting',
      'backup and restore operations',
      'infrastructure security configuration',
      'cloud cost optimization',
      'high-concurrency infrastructure exposure',
    ],
    note: 'These are team experience areas and are not automatically new-company case studies.',
  },
  related: [
    { title: 'Managed Cloud & Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    { title: 'Cloud Migration & Modernisation', href: '/services/cloud-migration-modernisation/' },
    { title: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
    { title: 'Fractional / Dedicated Technology Team', href: '/services/fractional-technology-team/' },
  ],
  faqs: [
    { question: 'Do you only work with AWS?', answer: "AWS is the team's strongest verified cloud capability and is the primary cloud platform represented on this website. Other cloud platforms should not be advertised as core expertise unless verified." },
    { question: 'Can you work with an existing development team?', answer: "Yes. The engagement can focus on infrastructure and DevOps while the client's existing developers continue to own application development." },
    { question: 'Do we need Kubernetes?', answer: 'Not necessarily. Kubernetes should be used when the operational and scaling requirements justify it. Simpler infrastructure is often preferable when it meets the requirement reliably.' },
    { question: 'Can this become an ongoing service?', answer: 'Yes. A project can transition into Managed Cloud & Infrastructure when ongoing monitoring, maintenance or operational support is required.' },
  ],
  finalCta: {
    title: 'Need a clearer view of your current cloud environment?',
    description: 'Start with an assessment of architecture, deployment, monitoring, backup and operational risks.',
    action: { label: 'Request a Cloud Assessment', href: '/contact/' },
  },
};

export const managedCloud: ServiceDetailConfig = {
  eyebrow: 'Managed Cloud & Infrastructure',
  title: 'Keep critical infrastructure managed after deployment.',
  description: 'We provide ongoing technical ownership for cloud and server environments through monitoring, maintenance, troubleshooting, backup operations and infrastructure support.',
  primaryAction: { label: 'Book a Technical Consultation', href: '/contact/' },
  secondaryAction: { label: 'Request a Cloud Assessment', href: '/contact/' },
  visualItems: ['Monitoring and alerting', 'Infrastructure maintenance', 'Backup operations', 'Troubleshooting and support'],
  context: {
    title: "Infrastructure should not become everyone's secondary responsibility.",
    paragraphs: ['As environments grow, operational work often becomes fragmented between developers, vendors and internal teams. Monitoring is reactive, maintenance is delayed and ownership becomes unclear.', 'Managed infrastructure creates a defined technical function around the environment.'],
  },
  capabilities: {
    title: 'What we manage',
    items: [
      { title: 'Monitoring & Alerting', description: 'Establish visibility into system health and important operational signals so issues can be identified earlier.' },
      { title: 'Infrastructure Maintenance', description: 'Support recurring infrastructure tasks, configuration management and environment upkeep within the agreed scope.' },
      { title: 'Troubleshooting', description: 'Investigate infrastructure and operational issues and coordinate remediation where required.' },
      { title: 'Backup Operations', description: 'Manage agreed backup processes and help maintain practical restore readiness.' },
      { title: 'Performance & Reliability', description: 'Review infrastructure behavior and address recurring operational bottlenecks where they fall within scope.' },
      { title: 'Infrastructure Security Hardening', description: 'Support practical infrastructure security configuration such as access controls, network rules, SSL and related hardening within verified capability.' },
    ],
  },
  approach: {
    title: 'A managed service should define ownership clearly.',
    paragraphs: ['The exact scope, systems, responsibilities, response expectations and escalation path are agreed before the service begins.'],
    bullets: ['This is not positioned as a full cybersecurity/SOC service.'],
  },
  related: [
    { title: 'Cloud & DevOps Engineering', href: '/services/cloud-devops/' },
    { title: 'Backup & Disaster Recovery', href: '/services/backup-disaster-recovery/' },
    { title: 'Fractional / Dedicated Technology Team', href: '/services/fractional-technology-team/' },
  ],
  faqs: [
    { question: 'Is this traditional IT support?', answer: 'No. The service is focused on cloud, servers, application infrastructure, DevOps-related operations, monitoring and related technical environments rather than general desktop/helpdesk support.' },
    { question: 'Can you take over an existing environment?', answer: 'Potentially, yes. An assessment should first establish the architecture, access, documentation, current risks and required scope.' },
    { question: 'Can a project move into managed support?', answer: 'Yes. This is a preferred path when infrastructure requires ongoing ownership after implementation.' },
  ],
  finalCta: {
    title: 'Need clearer ownership of your infrastructure?',
    description: "Let's review the environment, current responsibilities and operational gaps.",
    action: { label: 'Book a Technical Consultation', href: '/contact/' },
  },
};

export const cloudMigration: ServiceDetailConfig = {
  eyebrow: 'Cloud Migration & Modernisation',
  title: 'Modernise infrastructure without losing sight of operations.',
  description: 'We help businesses assess existing environments, design a practical target architecture and move toward cloud infrastructure, automation and monitoring that are easier to operate.',
  primaryAction: { label: 'Request a Cloud Assessment', href: '/contact/' },
  visualItems: ['Assess existing environments', 'Design practical architecture', 'Migrate through controlled implementation', 'Validate and operate'],
  context: {
    title: 'Migration is often driven by an operational problem—not the cloud itself.',
    bullets: ['aging infrastructure', 'difficult deployments', 'scaling limitations', 'inconsistent environments', 'database migration requirements', 'weak monitoring', 'infrastructure that is difficult to reproduce', 'growing maintenance overhead'],
  },
  process: {
    title: 'A controlled path from assessment to operation.',
    steps: [
      { number: '01', title: 'Assess', description: 'Review the existing architecture, dependencies, deployment process, data, monitoring, backup and operational constraints.' },
      { number: '02', title: 'Design', description: 'Define a target architecture and migration approach based on actual requirements.' },
      { number: '03', title: 'Prepare', description: 'Build the required infrastructure, automation, deployment process and migration controls.' },
      { number: '04', title: 'Migrate', description: 'Move workloads, applications or databases through a controlled implementation.' },
      { number: '05', title: 'Validate', description: 'Check application behavior, infrastructure, monitoring and required operational functions.' },
      { number: '06', title: 'Operate', description: 'Transition to internal ownership or ongoing managed support.' },
    ],
  },
  capabilities: {
    title: 'Modernisation scope',
    items: [
      { title: 'AWS Infrastructure', description: 'Assess and implement relevant AWS infrastructure as part of the target environment.' },
      { title: 'Architecture Redesign', description: 'Redesign the architecture around actual requirements and operational constraints.' },
      { title: 'Database Migration', description: 'Plan and implement database migration within the agreed environment.' },
      { title: 'Containerization', description: 'Introduce containers where they support the operational requirements.' },
      { title: 'CI/CD Modernization', description: 'Improve deployment processes with repeatable automation.' },
      { title: 'Infrastructure as Code', description: 'Manage repeatable infrastructure using appropriate automation.' },
      { title: 'Monitoring Implementation', description: 'Establish operational visibility for the modernized environment.' },
      { title: 'Backup Improvements', description: 'Improve backup readiness and related operational procedures.' },
      { title: 'Operational Documentation', description: 'Document the environment, responsibilities and operating procedures.' },
    ],
  },
  finalCta: {
    title: 'Planning a migration or dealing with legacy infrastructure?',
    description: 'Start by understanding the current environment and the risks that need to be managed.',
    action: { label: 'Request a Cloud Assessment', href: '/contact/' },
  },
};

export const fractionalTeam: ServiceDetailConfig = {
  eyebrow: 'Fractional / Dedicated Technology Team',
  title: 'Add technical capability without building every specialist role in-house.',
  description: 'We support startups, SaaS businesses, agencies and growing companies that need dependable cloud, DevOps, infrastructure or engineering capacity alongside their existing team.',
  primaryAction: { label: 'Book a Technical Consultation', href: '/contact/' },
  visualItems: ['Fractional DevOps', 'Cloud and infrastructure', 'Engineering support', 'White-label technical delivery'],
  context: {
    title: 'Use specialist capability where you need it most.',
    bullets: ['developers need DevOps support', 'infrastructure work is consuming product-engineering time', 'a company needs cloud expertise but not a full internal cloud team', 'an agency needs technical delivery capacity', 'workloads vary and permanent hiring is difficult to justify', 'a growing business needs ongoing technical support across several areas'],
  },
  capabilities: {
    title: 'Capability areas',
    items: [
      { title: 'Fractional DevOps', description: 'CI/CD, deployment automation, Infrastructure as Code, containers, cloud environments and engineering support.' },
      { title: 'Cloud & Infrastructure', description: 'AWS, Linux, monitoring, server operations, backup and infrastructure troubleshooting.' },
      { title: 'Engineering Support', description: 'Web/backend/application work aligned with the agreed engagement scope.' },
      { title: 'White-Label Technical Delivery', description: 'Technical delivery support for agencies where responsibilities, communication and client-facing arrangements are clearly agreed.' },
    ],
  },
  approach: {
    title: 'Designed to extend your team—not create another management layer.',
    bullets: ['scope', 'technical responsibilities', 'communication channel', 'access', 'priorities', 'escalation path', 'delivery cadence'],
  },
  finalCta: {
    title: 'Need specialist capability without another full-time hire?',
    description: 'Tell us which technical responsibilities are currently missing or overloaded.',
    action: { label: 'Book a Technical Consultation', href: '/contact/' },
  },
};

export const softwareEngineering: ServiceDetailConfig = {
  eyebrow: 'Software Engineering',
  title: 'Build software around the way your business actually works.',
  description: 'We develop business applications, portals, backend systems, APIs and Android solutions—and can also support the cloud infrastructure, deployment and ongoing operations behind them.',
  primaryAction: { label: 'Discuss Your Project', href: '/contact/' },
  secondaryAction: { label: 'Book a Technical Consultation', href: '/contact/' },
  visualItems: ['Business applications', 'Web applications and portals', 'Backend systems and APIs', 'Deployment and operations'],
  context: {
    title: 'Software should remove operational friction, not add another disconnected tool.',
    bullets: ['replacing manual workflows', 'building internal business tools', 'creating customer or partner portals', 'connecting systems through APIs', 'developing backend functionality', 'building Android applications', 'modernizing existing applications', 'improving deployment and infrastructure around an application'],
  },
  capabilities: {
    title: 'Software engineering capability',
    items: [
      { title: 'Business Applications', description: 'Custom systems designed around defined operational requirements.' },
      { title: 'Web Applications & Portals', description: 'Responsive web applications, internal portals and customer-facing interfaces.' },
      { title: 'Backend Systems & APIs', description: 'Backend functionality and APIs required to support business workflows and application integrations.' },
      { title: 'Android Applications', description: 'Android development for approved business/mobile requirements.' },
      { title: 'Application Modernisation', description: 'Improve or rebuild existing applications where architecture, maintainability or deployment has become a constraint.' },
    ],
  },
  lifecycle: {
    title: 'The application is only one part of the production system.',
    description: 'Where required, the same engagement can extend into Build → Deploy → Monitor → Manage → Support. This reduces the gap between software delivery and the infrastructure required to operate it.',
  },
  finalCta: {
    title: 'Have a workflow, application or system that needs to be built or modernised?',
    description: 'Share the business requirement and current technical context.',
    action: { label: 'Discuss Your Project', href: '/contact/' },
  },
};

export const backupRecovery: ServiceDetailConfig = {
  eyebrow: 'Backup & Disaster Recovery',
  title: 'A backup is only useful when recovery works.',
  description: 'We help businesses review backup readiness, improve recovery procedures and reduce uncertainty around restoring important systems and data after an incident.',
  primaryAction: { label: 'Request a Cloud Assessment', href: '/contact/' },
  visualItems: ['Backup assessment', 'Restore procedures', 'Recovery planning', 'Recovery testing'],
  context: {
    title: 'Backup completion does not automatically mean recovery readiness.',
    bullets: ['What is being backed up?', 'How frequently?', 'Where are backups stored?', 'Who monitors failures?', 'How is access controlled?', 'Has restoration been tested?', 'What systems must be recovered first?', 'How long can the business tolerate disruption?'],
  },
  capabilities: {
    title: 'Recovery-focused capability',
    items: [
      { title: 'Backup Assessment', description: 'Review current backup coverage, processes and obvious operational gaps.' },
      { title: 'Database Backup', description: 'Support appropriate database backup processes within the agreed environment.' },
      { title: 'Infrastructure Snapshots', description: 'Use infrastructure-level backup/snapshot mechanisms where appropriate.' },
      { title: 'Restore Procedures', description: 'Document and validate practical restoration steps for agreed systems.' },
      { title: 'Recovery Planning', description: 'Identify important dependencies and recovery priorities.' },
      { title: 'Disaster Recovery', description: 'Design a practical recovery approach based on system importance and agreed business requirements.' },
      { title: 'Recovery Testing', description: 'Test agreed recovery procedures rather than assuming backups are sufficient.' },
    ],
  },
  finalCta: {
    title: 'Not sure whether your current backups are enough?',
    description: 'Start with an assessment of backup coverage, restore procedures and operational risk.',
    action: { label: 'Request a Cloud Assessment', href: '/contact/' },
  },
};

export const streamingInfrastructure: ServiceDetailConfig = {
  eyebrow: 'Streaming Infrastructure',
  title: 'Infrastructure support for live and streaming environments where reliability matters.',
  description: 'We bring specialist experience across live technical operations, streaming protocols, encoding/decoding, infrastructure monitoring and operational troubleshooting.',
  primaryAction: { label: 'Book a Technical Consultation', href: '/contact/' },
  visualItems: ['Streaming architecture', 'HLS, RTMP, SRT and UDP', 'Encoding and decoding', 'Monitoring and redundancy'],
  context: {
    title: 'Streaming environments can involve multiple points of failure across contribution, encoding, transport, infrastructure, monitoring and delivery.',
    bullets: ['live infrastructure', 'stream transport', 'protocol workflows', 'encoding and decoding', 'monitoring', 'redundancy planning', 'operational troubleshooting'],
  },
  capabilities: {
    title: 'Streaming infrastructure capability',
    items: [
      { title: 'Streaming Architecture', description: 'Support the design and review of infrastructure required around live or streaming workflows.' },
      { title: 'Protocols', description: 'Experience with HLS, RTMP, SRT and UDP workflows.' },
      { title: 'Encoding / Decoding', description: 'Technical experience involving video encoding and decoding environments.' },
      { title: 'Monitoring', description: 'Operational monitoring and troubleshooting around live technical systems.' },
      { title: 'Reliability & Redundancy', description: 'Support practical architecture and operational planning around service continuity requirements.' },
      { title: 'Operations Support', description: 'Bring technical operations experience into environments where live systems require disciplined monitoring and response.' },
    ],
  },
  experience: {
    title: 'Credibility note',
    bullets: ['Streaming capability is based on relevant professional technical and broadcast operations experience brought by the team.'],
    note: 'Previous employer work is not presented as new-company case studies.',
  },
  finalCta: {
    title: 'Have a live or streaming infrastructure requirement?',
    description: 'Share the workflow, current environment and reliability challenge.',
    action: { label: 'Book a Technical Consultation', href: '/contact/' },
  },
};
