import { PrimaryButton } from '../interactive/PrimaryButton';

interface EngagementModelProps {
  title: string;
  description: string;
  bestFor: string[];
  cta?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  isEmphasized?: boolean;
  className?: string;
}

/**
 * EngagementModel Component
 * 
 * Engagement model display component.
 * Based on DESIGN.md engagement model design rules.
 * 
 * IMPORTANT: Do not style as SaaS pricing cards. No fabricated prices.
 * Managed Service may receive subtle emphasis.
 */
export function EngagementModel({
  title,
  description,
  bestFor,
  cta,
  isEmphasized = false,
  className = '',
}: EngagementModelProps) {
  return (
    <div
      className={`
        ${isEmphasized ? 'border-brand-primary ring-2 ring-brand-subtle' : 'border-border-default'}
        bg-bg-surface
        border
        rounded-lg
        p-6
        md:p-8
        flex
        flex-col
        h-full
        transition-all
        duration-200
        ease-standard
        hover:shadow-lg
        ${className}
      `}
    >
      {/* Title */}
      <h3 className={`h3 mb-3 ${isEmphasized ? 'text-brand-primary' : 'text-text-primary'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="body mb-6 text-text-secondary flex-grow">
        {description}
      </p>

      {/* Best For section */}
      <div className="mb-6">
        <h4 className="body-small font-semibold mb-3 text-text-primary">
          Best when:
        </h4>
        
        <ul className="space-y-2">
          {bestFor.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2"
            >
              <svg
                className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              
              <span className="body-small text-text-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      {cta && (
        <div className="mt-auto">
          <PrimaryButton
            size="md"
            fullWidth
            onClick={cta.onClick}
            as={cta.href ? 'link' : 'button'}
            href={cta.href}
          >
            {cta.label}
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}
