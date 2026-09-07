import {
  Breadcrumbs,
  BuildRunFlow,
  CTASection,
  EngagementModel,
  Hero,
  ServiceCard,
} from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Cloud, DevOps, Managed Infrastructure & Software Engineering Services',
  'Explore cloud engineering, DevOps, managed infrastructure, migration, fractional technology support, software engineering, backup and streaming infrastructure services.',
  '/services/',
);

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

function ServicesOverviewVisual() {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Technical service ownership</p>
      <div className="space-y-3">
        <div className="rounded-lg border border-brand-primary/60 bg-brand-primary/10 p-4">
          <p className="text-sm font-semibold">Build and improve</p>
          <p className="mt-1 text-sm text-text-inverse-muted">Cloud, DevOps, migration and software engineering</p>
        </div>
        <div className="ml-5 h-5 border-l border-brand-subtle" aria-hidden="true" />
        <div className="rounded-lg border border-text-inverse/20 bg-text-inverse/5 p-4">
          <p className="text-sm font-semibold">Operate and support</p>
          <p className="mt-1 text-sm text-text-inverse-muted">Managed infrastructure, recovery and streaming operations</p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesOverviewPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }]} />
        </Container>
      </Section>

      <Hero
        eyebrow="Services"
        title="Technical services from implementation through ongoing operations."
        description="Whether you need to improve an existing environment, build a new system or add specialist technical capacity, our services connect cloud, software and operations around one goal: technology that is easier to run reliably."
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
        visual={<ServicesOverviewVisual />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <h2 className="h2 mb-5 heading-break">Start with the problem you need to solve.</h2>
            <p className="body-large text-text-secondary readable-line-length">We support focused implementation projects as well as ongoing technical operations.</p>
            <p className="body mt-4 text-text-secondary readable-line-length">Use the seven service areas below to find the relevant technical path, from cloud engineering and managed infrastructure through software, recovery and streaming operations.</p>
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
            title="From build to ongoing technical ownership."
            description="Applications and infrastructure should not become disconnected after launch. Our service model allows implementation, deployment, monitoring and ongoing operations to work as one technical lifecycle."
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
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <h2 className="h2 mb-5 heading-break">Project, managed service or embedded technical capability.</h2>
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

      <CTASection
        title="Not sure which service fits?"
        description="Describe the current environment and the problem you are trying to solve. We can help identify the right starting point."
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
      />
    </>
  );
}
