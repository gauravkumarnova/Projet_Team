interface ExperienceCardProps {
  category?: string;
  title: string;
  description: string;
  technologies?: string[];
  outcome?: string;
  isTeamExperience?: boolean;
  className?: string;
}

/**
 * ExperienceCard Component
 * 
 * Technical experience display component.
 * Based on DESIGN.md technical experience design rules.
 * 
 * CRITICAL: Must distinguish team experience from company case studies.
 * Do not use fake logos, client names, or invented metrics.
 */
export function ExperienceCard({
  category,
  title,
  description,
  technologies,
  outcome,
  isTeamExperience = true,
  className = '',
}: ExperienceCardProps) {
  return (
    <article
      className={`
        bg-bg-surface
        border
        border-border-default
        rounded-lg
        p-6
        transition-all
        duration-200
        ease-standard
        hover:shadow-lg
        hover:border-border-strong
        ${className}
      `}
    >
      {/* Category and team experience marker */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        {category && (
          <span className="inline-block px-3 py-1 bg-brand-subtle text-brand-primary rounded-full text-xs font-medium">
            {category}
          </span>
        )}
        
        {isTeamExperience && (
          <span className="inline-block px-3 py-1 bg-state-selected text-text-secondary rounded-full text-xs font-medium border border-border-subtle">
            Team Experience
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="h4 mb-3 text-text-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="body mb-4 text-text-secondary">
        {description}
      </p>

      {/* Technologies (if any) */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-bg-subtle text-text-secondary rounded text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Outcome (if any) */}
      {outcome && (
        <div className="pt-4 border-t border-border-subtle">
          <p className="body-small text-text-muted">
            {outcome}
          </p>
        </div>
      )}
    </article>
  );
}
