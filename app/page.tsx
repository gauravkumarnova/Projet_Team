import {
  BuildRunFlow,
  CTASection,
  EngagementModel,
  ExperienceCard,
  Hero,
  ProcessTimeline,
  ProblemList,
  ServiceCard,
  TeamCard,
  TechnologyGroup,
} from '../components/marketing';
import { Container, Section } from '../components/layout';
import { createPageMetadata } from '../lib/seo';

export const metadata = createPageMetadata(
  'Cloud Engineering, DevOps & Managed Technology Services',
  'Cloud engineering, DevOps, managed infrastructure, software engineering and technical operations for startups, SMEs and digital businesses.',
  '/',
);
import { TextLink } from '../components/interactive';

const capabilityAreas = [
  {
    title: 'Cloud & DevOps',
    description: 'Design, automate and improve cloud infrastructure, deployment pipelines and engineering environments.',
    emphasis: 'primary' as const,
  },
  {
    title: 'Managed Infrastructure',
    description: 'Keep critical infrastructure monitored, maintained and operational after implementation.',
    emphasis: 'primary' as const,
  },
  {
    title: 'Software Engineering',
    description: 'Build business applications, portals, backend systems, APIs and Android solutions with deployment and operations in mind.',
    emphasis: 'secondary' as const,
  },
  {
    title: 'Streaming Infrastructure',
    description: 'Support specialist live and streaming workflows where infrastructure reliability and operational experience matter.',
    emphasis: 'supporting' as const,
  },
];

const problems = [
  {
    title: 'Deployments are still manual',
    description: 'Release processes are slow, inconsistent or dependent on individual engineers.',
    serviceLink: { label: 'Explore Cloud & DevOps', href: '/services/cloud-devops/' },
  },
  {
    title: 'Infrastructure has no clear owner',
    description: 'Servers and cloud resources exist, but monitoring, maintenance and incident responsibility are fragmented.',
    serviceLink: { label: 'Explore Managed Infrastructure', href: '/services/managed-cloud-infrastructure/' },
  },
  {
    title: 'Cloud architecture needs improvement',
    description: 'Costs, scalability, security configuration or operational complexity are becoming difficult to manage.',
    serviceLink: { label: 'Explore Cloud & DevOps', href: '/services/cloud-devops/' },
  },
  {
    title: 'Legacy systems are limiting progress',
    description: 'Existing applications or infrastructure are difficult to scale, deploy or maintain.',
    serviceLink: { label: 'Explore Migration & Modernisation', href: '/services/cloud-migration-modernisation/' },
  },
  {
    title: 'There is no dedicated DevOps capability',
    description: 'The development team needs infrastructure expertise without building every specialist role internally.',
    serviceLink: { label: 'Explore Fractional Technology Support', href: '/services/fractional-technology-team/' },
  },
  {
    title: 'Backups exist, but recovery is uncertain',
    description: 'Data may be backed up, but restore procedures and recovery readiness have not been properly validated.',
    serviceLink: { label: 'Explore Backup & DR', href: '/services/backup-disaster-recovery/' },
  },
  {
    title: 'A business process needs better software',
    description: 'Manual workflows, disconnected tools or legacy applications are creating operational friction.',
    serviceLink: { label: 'Explore Software Engineering', href: '/services/software-engineering/' },
  },
];

const services = [
  {
    title: 'Cloud & DevOps Engineering',
    description: 'Build a more reliable path from code to production. AWS infrastructure, CI/CD, Infrastructure as Code, containers, deployment automation, monitoring and engineering environment improvements.',
    link: { label: 'Explore Cloud & DevOps', href: '/services/cloud-devops/' },
    variant: 'primary' as const,
  },
  {
    title: 'Managed Cloud & Infrastructure',
    description: 'Keep infrastructure managed after it goes live. Monitoring, alerting, maintenance, troubleshooting, backup operations, performance management and ongoing infrastructure support.',
    link: { label: 'Explore Managed Infrastructure', href: '/services/managed-cloud-infrastructure/' },
    variant: 'primary' as const,
  },
  {
    title: 'Cloud Migration & Modernisation',
    description: 'Move from difficult legacy environments to infrastructure built for modern operations. Assessment, architecture redesign, migration, containerization, deployment modernization, monitoring and post-migration support.',
    link: { label: 'Explore Migration & Modernisation', href: '/services/cloud-migration-modernisation/' },
    variant: 'secondary' as const,
  },
  {
    title: 'Fractional / Dedicated Technology Team',
    description: 'Add specialist technical capability without building every role in-house. Fractional DevOps, cloud engineering, infrastructure operations, engineering support and white-label technical delivery.',
    link: { label: 'Explore Fractional Technology Support', href: '/services/fractional-technology-team/' },
    variant: 'secondary' as const,
  },
  {
    title: 'Software Engineering',
    description: 'Build business software with deployment and operations in mind. Web applications, internal portals, customer portals, backend systems, APIs, Android applications and application modernization.',
    link: { label: 'Explore Software Engineering', href: '/services/software-engineering/' },
    variant: 'secondary' as const,
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Prepare for recovery—not just backup completion. Backup architecture, database backups, infrastructure snapshots, restore procedures, recovery planning and disaster-recovery readiness.',
    link: { label: 'Explore Backup & DR', href: '/services/backup-disaster-recovery/' },
    variant: 'supporting' as const,
  },
  {
    title: 'Streaming Infrastructure',
    description: 'Specialist infrastructure support for live and streaming workflows. Streaming architecture, HLS, RTMP, SRT, UDP, encoding/decoding, monitoring, redundancy and operational support.',
    link: { label: 'Explore Streaming Infrastructure', href: '/services/streaming-infrastructure/' },
    variant: 'supporting' as const,
  },
];

const experienceAreas = [
  {
    title: 'Production AWS Infrastructure',
    description: 'Experience supporting and engineering AWS environments using services including EC2, S3, RDS, VPC, ELB, IAM, CloudWatch, ECR and ECS.',
    technologies: ['EC2', 'S3', 'RDS', 'VPC', 'ELB', 'IAM', 'CloudWatch', 'ECR', 'ECS'],
  },
  {
    title: 'DevOps & Infrastructure Automation',
    description: 'Experience with CI/CD pipelines, Terraform, Ansible, CloudFormation, Docker, Kubernetes, EKS, Helm and deployment automation.',
    technologies: ['CI/CD', 'Terraform', 'Ansible', 'CloudFormation', 'Docker', 'Kubernetes', 'EKS', 'Helm'],
  },
  {
    title: 'Database & Infrastructure Operations',
    description: 'Experience involving database migration, backup and restore operations, infrastructure troubleshooting, monitoring and high-concurrency environments.',
    technologies: ['Database migration', 'Backup and restore', 'Monitoring', 'High-concurrency environments'],
  },
  {
    title: 'Technical & Broadcast Operations',
    description: 'Experience across infrastructure operations, servers, storage, monitoring, live systems, technical troubleshooting and operational delivery.',
    technologies: ['Infrastructure operations', 'Servers', 'Storage', 'Monitoring', 'Live systems'],
  },
  {
    title: 'Streaming Workflows',
    description: 'Experience with HLS, RTMP, SRT, UDP, encoding/decoding and live technical environments.',
    technologies: ['HLS', 'RTMP', 'SRT', 'UDP', 'Encoding / Decoding'],
  },
  {
    title: 'Web & Android Engineering',
    description: 'Experience building responsive web solutions, backend functionality and Android applications around client and business requirements.',
    technologies: ['Web solutions', 'Backend functionality', 'Android applications'],
  },
];

const technologyGroups = [
  { title: 'Cloud', technologies: ['AWS'] },
  {
    title: 'Infrastructure & DevOps',
    technologies: ['Linux', 'Docker', 'Kubernetes', 'EKS', 'Helm', 'Terraform', 'Ansible', 'CloudFormation'],
  },
  { title: 'CI/CD', technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI'] },
  { title: 'Monitoring & Observability', technologies: ['Prometheus', 'Grafana', 'ELK', 'CloudWatch', 'Zabbix'] },
  { title: 'Web, Backend & Data', technologies: ['PHP', 'JavaScript', 'Nginx', 'Apache', 'MySQL', 'MongoDB', 'Redis'] },
  { title: 'Streaming', technologies: ['HLS', 'RTMP', 'SRT', 'UDP', 'Encoding / Decoding'] },
];

const engagementModels = [
  {
    title: 'Fixed Project',
    description: 'For cloud migrations, DevOps implementation, infrastructure projects, software development, modernization and disaster-recovery work.',
    bestFor: ['The scope and intended outcome can be clearly defined.'],
  },
  {
    title: 'Monthly Managed Service',
    description: 'For infrastructure management, monitoring, maintenance, DevOps, backup operations and ongoing technical support.',
    bestFor: ['The environment needs continuous technical ownership after implementation.'],
    isEmphasized: true,
  },
  {
    title: 'Fractional / Dedicated Technology Team',
    description: 'For startups, SaaS companies, agencies and businesses that need additional specialist capability without building every function internally.',
    bestFor: ['Your existing team needs dependable technical capacity over time.'],
  },
];

const teamMembers = [
  {
    name: 'Gaurav',
    role: 'Solutions & Delivery',
    description: 'Brings 12+ years of professional experience across technical operations and broadcast engineering, including infrastructure operations, monitoring, live systems, streaming workflows, troubleshooting, backup/recovery operations, technical documentation and project delivery.',
  },
  {
    name: 'Aman',
    role: 'Cloud & DevOps Engineering',
    description: 'Brings 3+ years of Linux and cloud infrastructure experience across AWS, CI/CD, containers, Infrastructure as Code, monitoring, production operations, database migration, backup/restore and infrastructure optimization.',
  },
  {
    name: 'Harsh',
    role: 'Growth & Software Engineering',
    description: 'Brings 5+ years of freelance web-development experience alongside Android development and business-development experience, covering web technologies, client requirements, project scoping, partnerships and customer communication.',
  },
];

function OwnershipVisual() {
  const layers = [
    ['Applications', 'Business systems and workflows'],
    ['Cloud infrastructure', 'Compute, storage, networks and access'],
    ['Deployment automation', 'Repeatable paths from code to production'],
    ['Monitoring & operations', 'Visibility, maintenance and support'],
  ];

  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-text-inverse/20 pb-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Technical ownership</span>
        <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        {layers.map(([title, description], index) => (
          <div key={title} className="relative rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-text-inverse-accent">0{index + 1}</span>
              <div>
                <p className="text-base font-semibold">{title}</p>
                <p className="mt-1 text-sm text-text-inverse-muted">{description}</p>
              </div>
            </div>
            {index < layers.length - 1 && (
              <span className="absolute -bottom-3 left-7 z-10 text-text-inverse-accent" aria-hidden="true">↓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Cloud Engineering · DevOps · Managed Technology"
        title="Build reliable technology. Run it with confidence."
        description="We help startups, SMEs and digital businesses build, deploy and operate applications and cloud infrastructure—from DevOps and AWS environments to software engineering, monitoring and ongoing technical support."
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
        secondaryAction={{ label: 'Explore Services', href: '/services/' }}
        visual={<OwnershipVisual />}
        visualSize="medium"
        className="bg-bg-primary"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">Engineering + Operations</p>
            <h2 className="h2 mb-6 heading-break">Technology delivery should not stop at deployment.</h2>
            <div className="space-y-4 body-large text-text-secondary readable-line-length">
              <p>Building an application or provisioning infrastructure is only part of the job. Reliable technology also needs repeatable deployments, monitoring, backups, operational ownership and ongoing support.</p>
              <p>Our capabilities connect software engineering, cloud infrastructure, DevOps and technical operations so businesses can work with one focused technical team across the lifecycle.</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {capabilityAreas.map((capability) => (
              <ServiceCard
                key={capability.title}
                title={capability.title}
                description={capability.description}
                variant={capability.emphasis}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <ProblemList
            eyebrow="Problems We Solve"
            title="When technology becomes difficult to operate, growth becomes harder."
            description="We work on the infrastructure, deployment and software problems that often appear as businesses grow or technical environments become more complex."
            problems={problems}
          />
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">Core Services</p>
            <h2 className="h2 mb-5 heading-break">Engineering services designed around real operational needs.</h2>
            <p className="body-large text-text-secondary readable-line-length">Engage us for a focused project, ongoing managed support or additional technical capability for your existing team.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                link={service.link}
                variant={service.variant}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <BuildRunFlow
            eyebrow="One Technical Lifecycle"
            title="Build it. Deploy it. Run it. Protect it. Support it."
            description="Technology works better when development, infrastructure and operations are treated as connected responsibilities rather than isolated projects."
            stages={[
              {
                title: 'BUILD',
                description: 'Build business applications, portals, APIs and technical systems around real operational requirements.',
              },
              {
                title: 'DEPLOY',
                description: 'Create repeatable deployment processes and infrastructure using cloud engineering, CI/CD and automation.',
              },
              {
                title: 'RUN',
                description: 'Monitor and maintain the infrastructure that keeps applications available.',
              },
              {
                title: 'PROTECT',
                description: 'Improve visibility, backup readiness and operational resilience.',
              },
              {
                title: 'SUPPORT',
                description: 'Continue improving, troubleshooting and supporting the environment as requirements change.',
              },
            ]}
          />

          <p className="mx-auto mt-12 max-w-3xl text-center text-xl font-semibold text-text-primary">
            One technology partner from application to infrastructure to ongoing operations.
          </p>
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">Why Work With Us</p>
            <h2 className="h2 mb-5 heading-break">A focused team across software, infrastructure and operations.</h2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
            <article className="border-l-2 border-brand-primary pl-5">
              <h3 className="h4 mb-3">Engineering + Operations</h3>
              <p className="body text-text-secondary">We combine application engineering with infrastructure and operational capability, helping reduce the handoffs that often appear between development and production support.</p>
            </article>
            <article className="border-l-2 border-brand-primary pl-5">
              <h3 className="h4 mb-3">Build + Run Capability</h3>
              <p className="body text-text-secondary">We can support both implementation and what happens afterwards—from deployment and monitoring to ongoing technical operations.</p>
            </article>
            <article className="border-l-2 border-brand-primary pl-5">
              <h3 className="h4 mb-3">Flexible Engagement</h3>
              <p className="body text-text-secondary">Use the team for a defined project, monthly managed service or fractional technical capability.</p>
            </article>
            <article className="border-l-2 border-brand-primary pl-5">
              <h3 className="h4 mb-3">Technical Communication</h3>
              <p className="body text-text-secondary">We translate operational requirements into practical technical work and maintain clear communication across business and engineering stakeholders.</p>
            </article>
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <ProcessTimeline
            eyebrow="How We Work"
            title="A practical path from technical problem to stable operation."
            steps={[
              { number: '01', title: 'Assess', description: 'Understand the current environment, requirements, risks and business priorities.' },
              { number: '02', title: 'Design', description: 'Define the architecture, implementation approach and responsibilities.' },
              { number: '03', title: 'Build / Fix', description: 'Implement the application, infrastructure, automation or remediation work.' },
              { number: '04', title: 'Deploy', description: 'Move changes into the required environment through controlled deployment.' },
              { number: '05', title: 'Monitor', description: 'Establish visibility into system health, performance and important operational signals.' },
              { number: '06', title: 'Manage', description: 'Maintain infrastructure, backups and recurring technical operations where included in the engagement.' },
              { number: '07', title: 'Support', description: 'Troubleshoot issues, improve the environment and provide ongoing engineering support where required.' },
            ]}
          />
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">Selected Technical Experience</p>
            <h2 className="h2 mb-5 heading-break">Practical experience across production infrastructure, software and technical operations.</h2>
            <p className="body text-text-secondary">The capabilities below reflect professional experience brought by members of the team from previous engineering, development and technical operations roles. They should not be interpreted as projects delivered by the new company unless explicitly identified as such.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceAreas.map((experience) => (
              <ExperienceCard
                key={experience.title}
                title={experience.title}
                description={experience.description}
                technologies={experience.technologies}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">Technical Capability</p>
            <h2 className="h2 mb-5 heading-break">Tools selected around the problem—not the other way around.</h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {technologyGroups.map((group) => (
              <TechnologyGroup
                key={group.title}
                title={group.title}
                technologies={group.technologies.map((name) => ({ name }))}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">Ways to Work With Us</p>
            <h2 className="h2 mb-5 heading-break">Choose the level of technical ownership you need.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <EngagementModel
                key={model.title}
                title={model.title}
                description={model.description}
                bestFor={model.bestFor}
                isEmphasized={model.isEmphasized}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-primary">The Team</p>
            <h2 className="h2 mb-5 heading-break">Complementary capability across delivery, cloud and software.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>

          <div className="mt-8">
            <TextLink href="/about/" variant="brand" underline="hover" className="font-medium">
              Meet the Team
            </TextLink>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Start With the Problem"
        title="Tell us what is difficult to build, deploy or operate."
        description="We can review the requirement, identify the relevant technical path and determine whether a project, assessment or ongoing engagement makes sense."
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
        secondaryAction={{ label: 'Request a Cloud Assessment', href: '/contact/' }}
      />

    </>
  );
}
