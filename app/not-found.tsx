import { PrimaryButton, SecondaryButton } from '../components/interactive';
import { Container, Section } from '../components/layout';

export default function NotFound() {
  return (
    <Section spacing="none" padding="xl">
      <Container size="4xl">
        <div className="max-w-2xl">
          <p className="eyebrow">404</p>
          <h1 className="h1 mt-4 heading-break">This page could not be found.</h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            The page may have moved, the address may be incorrect, or the content may no longer be available.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <PrimaryButton as="link" href="/">Return Home</PrimaryButton>
            <SecondaryButton as="link" href="/services/">Explore Services</SecondaryButton>
            <SecondaryButton as="link" href="/contact/" variant="ghost">Contact Us</SecondaryButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
