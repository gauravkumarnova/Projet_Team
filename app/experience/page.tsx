import { Breadcrumbs, CTASection, ExperienceCard, Hero } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Selected Technical Experience | Cloud, DevOps, Operations & Software',
  'Explore professional technical experience brought by the team across AWS, DevOps, infrastructure operations, streaming, web and Android engineering.',
  '/experience/',
);

const experienceCategories = [
  {
    title: 'Cloud & DevOps',
    items: [
      {
        title: 'Production AWS Infrastructure',
        description: 'Professional experience involving production AWS environments, infrastructure provisioning, monitoring, networking, databases, access controls and operational support.',
        technologies: ['AWS', 'Infrastructure provisioning', 'Monitoring', 'Networking', 'Databases', 'Access controls'],
      },
      {
        title: 'CI/CD & Automation',
        description: 'Experience implementing CI/CD pipelines and infrastructure automation using Jenkins, GitHub Actions, GitLab CI, Terraform, Ansible and CloudFormation.',
        technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Terraform', 'Ansible', 'CloudFormation'],
      },
      {
        title: 'Containers & Orchestration',
        description: 'Experience with Docker, Kubernetes, EKS and Helm in relevant infrastructure environments.',
        technologies: ['Docker', 'Kubernetes', 'EKS', 'Helm'],
      },
      {
        title: 'Database Migration',
        description: 'Experience involving MySQL migration, including zero-downtime migration work in a previous professional environment.',
        technologies: ['MySQL', 'Database migration'],
      },
      {
        title: 'Monitoring & Alerting',
        description: 'Experience with CloudWatch, Prometheus, Grafana, ELK and related monitoring/alerting workflows.',
        technologies: ['CloudWatch', 'Prometheus', 'Grafana', 'ELK'],
      },
      {
        title: 'Backup & Restore',
        description: 'Experience supporting infrastructure backup and restoration processes.',
        technologies: ['Backup', 'Restoration'],
      },
    ],
  },
  {
    title: 'Technical Operations',
    items: [
      {
        title: 'Infrastructure Operations',
        description: 'Professional experience across servers, storage, monitoring, system troubleshooting, maintenance and technical operations.',
        technologies: ['Servers', 'Storage', 'Monitoring', 'Troubleshooting', 'Maintenance'],
      },
      {
        title: 'Live Technical Environments',
        description: 'Experience supporting live operational workflows where technical reliability and timely troubleshooting are important.',
        technologies: ['Live operations', 'Technical reliability', 'Troubleshooting'],
      },
      {
        title: 'Documentation & Delivery',
        description: 'Experience with technical documentation, operational coordination, implementation support and stakeholder communication.',
        technologies: ['Documentation', 'Operational coordination', 'Implementation support', 'Stakeholder communication'],
      },
    ],
  },
  {
    title: 'Streaming',
    items: [
      {
        title: 'Protocol & Workflow Experience',
        description: 'Professional experience involving HLS, RTMP, SRT and UDP.',
        technologies: ['HLS', 'RTMP', 'SRT', 'UDP'],
      },
      {
        title: 'Encoding & Decoding',
        description: 'Experience across technical environments involving video encoding and decoding.',
        technologies: ['Encoding', 'Decoding'],
      },
      {
        title: 'Live Infrastructure',
        description: 'Experience supporting live and broadcast-oriented technical infrastructure.',
        technologies: ['Live infrastructure', 'Broadcast operations'],
      },
    ],
  },
  {
    title: 'Software',
    items: [
      {
        title: 'Web Development',
        description: 'Professional experience building responsive web solutions using technologies including PHP, JavaScript, HTML and CSS.',
        technologies: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Android Development',
        description: 'Experience building Android applications around client requirements.',
        technologies: ['Android'],
      },
      {
        title: 'Requirements & Scoping',
        description: 'Experience translating client requirements into project scope and technical implementation.',
        technologies: ['Requirements gathering', 'Project scope', 'Technical implementation'],
      },
    ],
  },
];

function ExperienceVisual() {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Team experience</p>
      <div className="grid grid-cols-2 gap-3">
        {experienceCategories.map((category) => (
          <div key={category.title} className="rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <p className="text-sm font-semibold">{category.title}</p>
            <p className="mt-1 text-xs text-text-inverse-muted">Professional capability</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experience' }]} />
        </Container>
      </Section>

      <Hero
        eyebrow="Selected Technical Experience"
        title="Experience built in real technical environments."
        description="Our team brings professional experience across cloud infrastructure, DevOps, technical operations, streaming systems and software development."
        visual={<ExperienceVisual />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="inverse" spacing="none" padding="lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg font-semibold leading-relaxed text-text-inverse md:text-xl">
              The examples on this page represent professional experience brought by individual team members from previous roles and engagements. They are not presented as projects delivered by the new company unless explicitly stated.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <div className="space-y-16">
            {experienceCategories.map((category) => (
              <section key={category.title} aria-labelledby={`${category.title.toLowerCase().replaceAll(' ', '-')}-heading`}>
                <h2 id={`${category.title.toLowerCase().replaceAll(' ', '-')}-heading`} className="h2 mb-8 heading-break">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <ExperienceCard
                      key={item.title}
                      category={category.title}
                      title={item.title}
                      description={item.description}
                      technologies={item.technologies}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Have a requirement that matches this capability?"
        description="Let's discuss the current environment, technical problem and expected outcome."
        primaryAction={{ label: 'Discuss Your Requirements', href: '/contact/' }}
      />
    </>
  );
}
