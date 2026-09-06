import { Breadcrumbs } from './Breadcrumbs';
import { CTASection } from './CTASection';
import { Hero } from './Hero';
import { RelatedServices } from './RelatedServices';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export interface SolutionDetailConfig {
  eyebrow: string;
  title: string;
  heroDescription: string;
  introParagraphs: string[];
  visualItems: string[];
  problems?: string[];
  capabilities?: string[];
  workingModel?: { title: string; description: string };
  services: { title: string; href: string }[];
  finalCta: { title: string; description?: string; action: { label: string; href: string } };
}

function AudienceVisual({ items }: { items: string[] }) {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Audience priorities</p>
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

export function SolutionDetailPage({ config }: { config: SolutionDetailConfig }) {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions/' }, { label: config.eyebrow }]} />
        </Container>
      </Section>

      <Hero
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.heroDescription}
        primaryAction={config.finalCta.action}
        visual={<AudienceVisual items={config.visualItems} />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="max-w-3xl space-y-4">
            {config.introParagraphs.map((paragraph) => (
              <p key={paragraph} className="body-large text-text-secondary readable-line-length">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {config.problems && (
        <Section spacing="none" padding="lg">
          <Container>
            <h2 className="h2 mb-8 heading-break">Relevant problems</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {config.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 border-l-2 border-brand-primary bg-bg-surface p-5 text-text-secondary">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {config.capabilities && (
        <Section spacing="none" padding="lg" background="subtle">
          <Container>
            <h2 className="h2 mb-8 heading-break">Relevant capability</h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {config.capabilities.map((capability) => (
                <li key={capability} className="border-t-2 border-brand-primary pt-4 text-text-secondary">
                  {capability}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {config.workingModel && (
        <Section spacing="none" padding="lg">
          <Container>
            <div className="max-w-3xl">
              <h2 className="h2 mb-5 heading-break">{config.workingModel.title}</h2>
              <p className="body-large text-text-secondary readable-line-length">{config.workingModel.description}</p>
            </div>
          </Container>
        </Section>
      )}

      <Section spacing="none" padding="lg" background="subtle">
        <Container>
          <RelatedServices title="Relevant services" services={config.services} />
        </Container>
      </Section>

      <CTASection
        title={config.finalCta.title}
        description={config.finalCta.description}
        primaryAction={config.finalCta.action}
      />
    </>
  );
}
