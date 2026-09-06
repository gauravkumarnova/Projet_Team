import { Container } from '../layout/Container';

interface CTAAction {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description?: string;
  eyebrow?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  className?: string;
}

export function CTASection({
  title,
  description,
  eyebrow,
  primaryAction,
  secondaryAction,
  className = '',
}: CTASectionProps) {
  return (
    <section className={`bg-bg-inverse py-16 md:py-24 ${className}`}>
      <Container size="5xl">
        <div className="text-center">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-text-inverse-accent">
              {eyebrow}
            </p>
          )}

          <h2 className="h2 mb-5 text-text-inverse heading-break">{title}</h2>

          {description && (
            <p className="body-large mx-auto mb-8 max-w-3xl text-text-inverse-muted readable-line-length">
              {description}
            </p>
          )}

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={primaryAction.href}
              className="inline-flex items-center justify-center rounded-button bg-brand-primary px-8 py-4 text-center text-lg font-medium text-text-on-brand transition-colors duration-150 ease-standard hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-state-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-inverse"
            >
              {primaryAction.label}
            </a>

            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="inline-flex items-center justify-center rounded-button border border-text-inverse/40 bg-transparent px-8 py-4 text-center text-lg font-medium text-text-inverse transition-colors duration-150 ease-standard hover:border-text-inverse hover:bg-text-inverse/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-state-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-inverse"
              >
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
