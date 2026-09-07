import { Breadcrumbs } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Website Terms',
  'Website terms will be updated after final legal review.',
  '/terms/',
);

export default function TermsPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Website Terms', href: '/terms/' }]} />
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container size="4xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Legal</p>
            <h1 className="h1 mt-4 heading-break">Website Terms</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Final website terms will be added after the relevant business and legal details have been reviewed.
            </p>
          </div>

          <section aria-labelledby="terms-status" className="mt-16 max-w-3xl border-t border-border-default pt-8">
            <h2 id="terms-status" className="h2 heading-break">Website terms</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              No commercial terms, service guarantees, liability language or governing-law provisions are stated on this page.
            </p>
            <address className="mt-6 flex flex-col gap-1 text-base leading-relaxed text-text-secondary not-italic">
              <span>This website is operated by The Jaat Company, a proprietorship.</span>
              <span>319, Durgapuri Extension, New Delhi 110093, India</span>
              <a className="hover:text-brand-primary" href="mailto:contact@vurpe.com">contact@vurpe.com</a>
              <a className="hover:text-brand-primary" href="tel:+919873291282">9873291282</a>
            </address>
          </section>
        </Container>
      </Section>
    </>
  );
}
