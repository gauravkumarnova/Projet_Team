import { Breadcrumbs } from '../../components/marketing';
import { Container, Section } from '../../components/layout';
import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata(
  'Privacy Policy',
  'Privacy information for the current website and enquiry form.',
  '/privacy/',
);

const formFields = [
  'Name',
  'Business Email',
  'Company',
  'Country',
  'Service Required',
  'Short Project Description',
];

export default function PrivacyPage() {
  return (
    <>
      <Section spacing="none" padding="sm">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy/' }]} />
        </Container>
      </Section>

      <Section spacing="none" padding="lg">
        <Container size="4xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Privacy</p>
            <h1 className="h1 mt-4 heading-break">Privacy Policy</h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              This page provides the current website privacy information. Final legal policy wording will be added after the relevant company and data-processing details have been reviewed.
            </p>
          </div>

          <div className="mt-16 max-w-3xl space-y-12">
            <section aria-labelledby="business-identity">
              <h2 id="business-identity" className="h2 heading-break">Business identity and contact</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                This website is operated by The Jaat Company, a proprietorship.
              </p>
              <address className="mt-4 flex flex-col gap-1 text-base leading-relaxed text-text-secondary not-italic">
                <span>319, Durgapuri Extension</span>
                <span>New Delhi 110093, India</span>
                <a className="hover:text-brand-primary" href="mailto:contact@vurpe.com">contact@vurpe.com</a>
                <a className="hover:text-brand-primary" href="tel:+919873291282">9873291282</a>
              </address>
            </section>

            <section aria-labelledby="information-collected">
              <h2 id="information-collected" className="h2 heading-break">Information submitted through the enquiry form</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                The current contact form asks for the following project information:
              </p>
              <ul className="mt-5 grid gap-3 text-base text-text-secondary sm:grid-cols-2">
                {formFields.map((field) => (
                  <li key={field} className="border-l-2 border-brand-primary pl-4">{field}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="current-handling">
              <h2 id="current-handling" className="h2 heading-break">Current website handling</h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                The current form does not connect to an external email, CRM or form provider. Final details about storage, retention, providers and applicable legal requirements remain subject to legal and technical review.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
