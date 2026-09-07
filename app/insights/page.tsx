import { Breadcrumbs, Hero } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Cloud, DevOps & Technology Operations Insights',
  'Practical articles on cloud infrastructure, DevOps, managed technology, backup, modernization and streaming operations.',
  '/insights/',
);

const categories = [
  'Cloud & Infrastructure',
  'DevOps',
  'Managed Technology',
  'Business Continuity',
  'Software Modernisation',
  'Streaming Infrastructure',
];

function InsightsVisual() {
  return (
    <div className="w-full rounded-xl border border-border-strong bg-bg-inverse p-5 text-text-inverse shadow-lg sm:p-7">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-inverse-accent">Content focus</p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {categories.map((category, index) => (
          <li key={category} className="flex items-start gap-3 rounded-lg border border-text-inverse/15 bg-text-inverse/5 p-4">
            <span className="font-mono text-xs text-text-inverse-accent">0{index + 1}</span>
            <span className="text-sm font-medium">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights/' }]} />
        </Container>
      </Section>

      <Hero
        eyebrow="Insights"
        title="Practical thinking on building and operating technology."
        description="Technical articles focused on cloud infrastructure, DevOps, operations, software modernization, backup and specialist streaming environments."
        visual={<InsightsVisual />}
        visualSize="medium"
        className="pt-8 md:pt-12"
      />

      <Section background="subtle" spacing="none" padding="lg">
        <Container>
          <div className="max-w-3xl">
            <h2 className="h2 mb-5 heading-break">Technical articles are being prepared.</h2>
          </div>
        </Container>
      </Section>
    </>
  );
}
