import { ReactNode } from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  expertise?: string[];
  portrait?: ReactNode;
  className?: string;
}

/**
 * TeamCard Component
 * 
 * Team profile display component.
 * Based on DESIGN.md team design rules.
 * 
 * IMPORTANT: Do not include giant biographies, fake social links, or unnecessary personal details.
 * Use professional portrait if approved, otherwise use deliberate non-photo layout.
 */
export function TeamCard({
  name,
  role,
  description,
  expertise,
  portrait,
  className = '',
}: TeamCardProps) {
  return (
    <article
      className={`
        bg-bg-surface
        border
        border-border-default
        rounded-lg
        overflow-hidden
        transition-all
        duration-200
        ease-standard
        hover:shadow-lg
        hover:border-border-strong
        ${className}
      `}
    >
      {/* Portrait or placeholder */}
      <div className="aspect-square bg-bg-subtle flex items-center justify-center p-8">
        {portrait ? (
          <div className="w-full h-full flex items-center justify-center">
            {portrait}
          </div>
        ) : (
          <div className="w-24 h-24 rounded-full bg-bg-inverse flex items-center justify-center">
            <span className="text-text-inverse text-3xl font-bold">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="h4 mb-1 text-text-primary">
          {name}
        </h3>
        
        <p className="body-small mb-4 text-brand-primary font-medium">
          {role}
        </p>

        <p className="body mb-4 text-text-secondary">
          {description}
        </p>

        {/* Expertise (if any) */}
        {expertise && expertise.length > 0 && (
          <div className="pt-4 border-t border-border-subtle">
            <h4 className="body-small font-semibold mb-2 text-text-primary">
              Selected Expertise
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {expertise.map((item, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1.5 bg-bg-subtle text-text-secondary rounded-full text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}