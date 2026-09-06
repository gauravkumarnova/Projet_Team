import { Breadcrumbs, BuildRunFlow, CTASection, Hero, TeamCard } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'About Our Technology Engineering Team',
  'Meet the team combining technical operations, AWS and DevOps engineering, software development and business delivery capability.',
  '/about/',
);

const teamMembers = [
  {
    name: 'Gaurav',
    role: 'Solutions & Delivery',
    description: 'Gaurav brings 12+ years of professional experience across technical operations and broadcast engineering. His experience includes infrastructure operations, monitoring, live systems, streaming protocols, encoding/decoding, servers and storage, troubleshooting, backup and recovery operations, technical documentation, enterprise communication and project delivery.',
  },
  {
    name: 'Aman',
    role: 'Cloud & DevOps Engineering',
    description: 'Aman brings 3+ years of professional Linux and cloud infrastructure experience. His capability includes AWS, CI/CD, Docker, Kubernetes/EKS, Helm, Terraform, Ansible, CloudFormation, monitoring, Linux systems, database operations, infrastructure automation, backup/restore, production cloud operations and cost optimization.',
  },
  {
    name: 'Harsh',
    role: 'Growth & Software Engineering',
    description: 'Harsh brings 5+ years of freelance web-development experience alongside Android development and business-development experience. His background includes PHP, JavaScript, responsive web development, client requirement gathering, project scoping, business development, partnerships, market research and customer communication.',
  },
];

const operatingPrinciples = [
  {
    title: 'Solve the actual problem',
    description: 'Technology choices should follow business and operational requirements.',
  },
  {
    title: 'Keep ownership clear',
    description: 'Projects work better when responsibilities and escalation paths are understood.',
  },
  {
    title: 'Prefer maintainable systems',
    description: 'Complexity should be introduced only when it creates meaningful value.',
  },
  {
    title: 'Think beyond deployment',
    description: 'Monitoring, backup, operations and support are part of production technology.',
  },
  {
    title: 'Communicate clearly',
    description: 'Technical work should remain understandable to the people responsible for the business outcome.',
  },
];

function AboutVisual() {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Complementary capability</p>
      <div className="space-y-3">
        {['Solutions & Delivery', 'Cloud & DevOps Engineering', 'Growth & Software Engineering'].map((area, index) => (
          <div key={area} className="flex items-start gap-3 rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <span className="font-mono text-xs text-text-inverse-accent">0{index + 1}</span>
            <span className="text-sm font-medium">{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        </Container>
      </Section>

      <Hero
        eyebrow="About"
        title="A focused technical team built around complementary capability."
        description="We combine technical operations, cloud and DevOps engineering, software development and business communication to help organizations build and operate technology with clearer ownership."
        visual={<AboutVisual />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="max-w-4xl">
            <h2 className="h2 mb-6 heading-break">Small enough to stay focused. Broad enough to connect the technical lifecycle.</h2>
            <div className="space-y-4 body-large text-text-secondary readable-line-length">
              <p className="font-semibold text-text-primary">Cloud Engineering &amp; Managed Technology Services for growing businesses.</p>
              <p>The team is structured around three complementary areas: solutions and delivery, cloud and DevOps engineering, and growth and software engineering.</p>
              <p>The objective is not to imitate a large outsourcing company. It is to provide focused technical capability where businesses need reliable implementation and ongoing ownership.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <BuildRunFlow
            eyebrow="Build + Run"
            title="Build and run should not be separate conversations."
            description="Applications depend on infrastructure. Infrastructure depends on deployment discipline, monitoring, backup and operations."
            stages={[
              { title: 'BUILD', description: 'Applications & Systems' },
              { title: 'DEPLOY', description: 'Cloud & DevOps' },
              { title: 'RUN', description: 'Managed Infrastructure' },
              { title: 'PROTECT', description: 'Monitoring, Backup & Recovery' },
              { title: 'SUPPORT', description: 'Ongoing Engineering & Operations' },
            ]}
          />
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="max-w-4xl">
            <h2 className="h2 mb-6 heading-break">Understand the environment before prescribing the stack.</h2>
            <p className="body-large text-text-secondary readable-line-length">We start with the business requirement and current technical reality. Architecture, tooling and engagement scope should follow the problem—not technology trends.</p>
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-4xl">
            <h2 className="h2 mb-5 heading-break">Complementary experience across delivery, infrastructure and software.</h2>
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
        </Container>
      </Section>

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-4xl">
            <h2 className="h2 mb-5 heading-break">Operating principles</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <article key={principle.title} className="border-l-2 border-brand-primary pl-5">
                <h3 className="h4 mb-3">{principle.title}</h3>
                <p className="body text-text-secondary">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Looking for a technical partner rather than another disconnected vendor?"
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
      />
    </>
  );
}
