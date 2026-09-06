import { ReactNode } from 'react';

interface TechnologyItem {
  name: string;
  icon?: ReactNode;
}

interface TechnologyGroupProps {
  title: string;
  technologies: TechnologyItem[];
  className?: string;
}

/**
 * TechnologyGroup Component
 * 
 * Grouped technology capability display.
 * Based on DESIGN.md technology capability section rules.
 * 
 * IMPORTANT: Avoid uncontrolled logo walls. Use text labels and restrained icons.
 * Technology display is proof, not the headline.
 */
export function TechnologyGroup({
  title,
  technologies,
  className = '',
}: TechnologyGroupProps) {
  return (
    <div className={className}>
      {/* Group title */}
      <h3 className="h4 mb-4 text-text-primary">
        {title}
      </h3>

      {/* Technologies grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-3 bg-bg-surface border border-border-subtle rounded hover:border-border-default hover:bg-bg-subtle transition-colors duration-150"
          >
            {/* Icon (optional) */}
            {tech.icon && (
              <div className="flex-shrink-0 w-5 h-5 text-text-muted">
                {tech.icon}
              </div>
            )}
            
            {/* Technology name */}
            <span className="body-small text-text-secondary truncate">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}