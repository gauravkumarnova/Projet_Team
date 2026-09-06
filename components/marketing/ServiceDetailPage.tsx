import { BuildRunFlow } from './BuildRunFlow';
import { Breadcrumbs } from './Breadcrumbs';
import { CTASection } from './CTASection';
import { FAQ } from './FAQ';
import { Hero } from './Hero';
import { RelatedServices } from './RelatedServices';
import { ProcessTimeline } from './ProcessTimeline';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceDetailConfig {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  visualItems: string[];
  context?: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  };
  capabilities?: {
    title: string;
    items: ServiceCapability[];
  };
  approach?: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  };
  process?: {
    title: string;
    steps: { number: string; title: string; description: string }[];
  };
  lifecycle?: {
    title: string;
    description: string;
  };
  experience?: {
    title: string;
    bullets: string[];
    note: string;
  };
  related?: { title: string; href: string }[];
  faqs?: { question: string; answer: string }[];
  finalCta: {
    title: string;
    description: string;
    action: { label: string; href: string };
  };
}

function ServiceVisual({ items }: { items: string[] }) {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Technical focus</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <span className="font-mono text-xs text-text-inverse-accent">0{index + 1}</span>
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CopySection({
  title,
  paragraphs,
  bullets,
  background = 'default',
}: {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  background?: 'default' | 'subtle';
}) {
  return (
    <Section background={background} spacing="none" padding="lg">
      <Container>
        <div className="max-w-4xl">
          <h2 className="h2 mb-6 heading-break">{title}</h2>
          {paragraphs?.map((paragraph) => (
            <p key={paragraph} className="body-large mb-4 text-text-secondary readable-line-length">
              {paragraph}
            </p>
          ))}
          {bullets && (
            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 border-l-2 border-brand-primary pl-4 text-text-secondary">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </Section>
  );
}

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: config.eyebrow }]} />
        </Container>
      </Section>

      <Hero
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
        primaryAction={config.primaryAction}
        secondaryAction={config.secondaryAction}
        visual={<ServiceVisual items={config.visualItems} />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      {config.context && (
        <CopySection
          title={config.context.title}
          paragraphs={config.context.paragraphs}
          bullets={config.context.bullets}
          background="subtle"
        />
      )}

      {config.capabilities && (
        <Section spacing="none" padding="lg">
          <Container>
            <h2 className="h2 mb-10 heading-break">{config.capabilities.title}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {config.capabilities.items.map((capability) => (
                <article key={capability.title} className="border-t-2 border-brand-primary pt-5">
                  <h3 className="h4 mb-3">{capability.title}</h3>
                  <p className="body text-text-secondary">{capability.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {config.approach && (
        <CopySection
          title={config.approach.title}
          paragraphs={config.approach.paragraphs}
          bullets={config.approach.bullets}
        />
      )}

      {config.process && (
        <Section spacing="none" padding="lg" background="subtle">
          <Container>
            <ProcessTimeline title={config.process.title} steps={config.process.steps} />
          </Container>
        </Section>
      )}

      {config.lifecycle && (
        <Section spacing="none" padding="lg" background="subtle">
          <Container>
            <BuildRunFlow
              title={config.lifecycle.title}
              description={config.lifecycle.description}
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
      )}

      {config.experience && (
        <CopySection
          title={config.experience.title}
          bullets={config.experience.bullets}
        />
      )}

      {config.experience && (
        <Section spacing="none" padding="sm">
          <Container>
            <p className="border-l-2 border-border-strong pl-4 text-sm text-text-muted">{config.experience.note}</p>
          </Container>
        </Section>
      )}

      {config.related && config.related.length > 0 && (
        <Section spacing="none" padding="lg" background="subtle">
          <Container>
            <RelatedServices services={config.related} />
          </Container>
        </Section>
      )}

      {config.faqs && config.faqs.length > 0 && (
        <Section spacing="none" padding="lg">
          <Container>
            <FAQ title="Frequently asked questions" items={config.faqs} />
          </Container>
        </Section>
      )}

      <CTASection
        title={config.finalCta.title}
        description={config.finalCta.description}
        primaryAction={config.finalCta.action}
      />
    </>
  );
}
