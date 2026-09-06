import { TextLink } from '../interactive/TextLink';

interface ProblemItem {
  title: string;
  description: string;
  serviceLink?: {
    label: string;
    href: string;
  };
}

interface ProblemListProps {
  eyebrow?: string;
  title: string;
  description?: string;
  problems: ProblemItem[];
  className?: string;
}

/**
 * ProblemList Component
 * 
 * Structured problem-led navigation component.
 * Based on DESIGN.md problems section design.
 * 
 * IMPORTANT: Helps visitors self-identify problems and find relevant services.
 */
export function ProblemList({
  eyebrow,
  title,
  description,
  problems,
  className = '',
}: ProblemListProps) {
  return (
    <div className={className}>
      {/* Header */}
      <div className="mb-12 text-center">
        {eyebrow && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1.5 bg-brand-subtle text-brand-primary rounded-full text-sm font-medium tracking-wide uppercase">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="h2 mb-4 heading-break">
          {title}
        </h2>

        {description && (
          <p className="body-large mx-auto mb-0 text-text-secondary readable-line-length max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="p-6 bg-bg-surface border border-border-default rounded-lg hover:border-brand-primary hover:shadow-lg transition-all duration-200 ease-standard"
          >
            <h3 className="h4 mb-3 text-text-primary">
              {problem.title}
            </h3>

            <p className="body-small mb-4 text-text-secondary">
              {problem.description}
            </p>

            {problem.serviceLink && (
              <div className="mt-auto">
                <TextLink
                  href={problem.serviceLink.href}
                  variant="brand"
                  underline="hover"
                  className="font-medium"
                >
                  {problem.serviceLink.label}
                </TextLink>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}