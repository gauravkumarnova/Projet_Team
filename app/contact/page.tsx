import { Breadcrumbs, Hero } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { ContactForm } from '../../components/contact/ContactForm';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Contact | Cloud, DevOps & Technology Engineering',
  'Discuss a cloud, DevOps, infrastructure, software, migration, backup or streaming requirement with our technical team.',
  '/contact/',
);

function ContactVisual() {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">A clear next step</p>
      <div className="space-y-3">
        {['Review the requirement', 'Clarify the environment', 'Recommend a next step'].map((step, index) => (
          <div key={step} className="flex items-start gap-3 rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <span className="font-mono text-xs text-text-inverse-accent">0{index + 1}</span>
            <span className="text-sm font-medium">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const nextSteps = [
  {
    title: 'We review the requirement',
    description: 'We look at the information you provide and identify the relevant capability area.',
  },
  {
    title: 'We clarify the environment',
    description: 'Where necessary, we ask about the current architecture, business requirement, constraints and expected outcome.',
  },
  {
    title: 'We recommend a next step',
    description: 'Depending on the requirement, that may be a technical consultation, assessment, defined project or ongoing engagement discussion.',
  },
];

export default function ContactPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact/' }]} />
        </Container>
      </Section>

      <Hero
        eyebrow="Contact"
        title="Tell us what you need to build, improve or operate."
        description="Share the current requirement, environment and main technical problem. We will use that context to determine the most relevant next step."
        visual={<ContactVisual />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <h2 className="h2 mb-5 heading-break">A technical conversation before a sales pitch.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <article key={step.title} className="border-t-2 border-brand-primary pt-5">
                <p className="mb-3 font-mono text-sm text-brand-primary">0{index + 1}</p>
                <h3 className="h4 mb-3">{step.title}</h3>
                <p className="body text-text-secondary">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container size="4xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="h2 heading-break">Project / Technical Requirement</h2>
          </div>
          <ContactForm />
          <address className="mt-10 border-t border-border-default pt-8 not-italic">
            <h2 className="h3">Public contact</h2>
            <div className="mt-3 flex flex-col gap-2 text-text-secondary">
              <a className="hover:text-brand-primary" href="mailto:contact@vurpe.com">contact@vurpe.com</a>
              <a className="hover:text-brand-primary" href="tel:+919873291282">9873291282</a>
            </div>
          </address>
        </Container>
      </Section>
    </>
  );
}
