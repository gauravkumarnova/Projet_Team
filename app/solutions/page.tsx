import { Breadcrumbs, CTASection, Hero, SolutionAudienceCard } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { solutionAudiences } from '../../lib/solution-details';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Technology Solutions for Startups, SMEs, Agencies & Media Businesses',
  'Cloud, DevOps, software and managed technology solutions for startups, SaaS companies, SMEs, agencies and media businesses.',
  '/solutions/',
);

function SolutionsOverviewVisual() {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Choose your context</p>
      <div className="space-y-3">
        {solutionAudiences.map((audience, index) => (
          <div key={audience.href} className="flex items-start gap-3 rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <span className="font-mono text-xs text-text-inverse-accent">0{index + 1}</span>
            <span className="text-sm font-medium">{audience.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsOverviewPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions/' }]} />
        </Container>
      </Section>

      <Hero
        eyebrow="Solutions"
        title="Technical capability aligned to the way your business operates."
        description="Different businesses reach us with different constraints: missing DevOps capacity, legacy systems, unreliable infrastructure, software requirements or specialist technical workflows."
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
        visual={<SolutionsOverviewVisual />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="mb-12 max-w-3xl">
            <h2 className="h2 mb-5 heading-break">Choose the situation closest to yours.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutionAudiences.map((audience) => (
              <SolutionAudienceCard key={audience.href} {...audience} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Technical capability aligned to the way your business operates."
        primaryAction={{ label: 'Book a Technical Consultation', href: '/contact/' }}
      />
    </>
  );
}
