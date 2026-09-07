import { ReactNode } from 'react';

interface Stage {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface BuildRunFlowProps {
  eyebrow?: string;
  title: string;
  description?: string;
  stages: Stage[];
  className?: string;
}

/**
 * BuildRunFlow Component
 * 
 * Signature lifecycle component: BUILD → DEPLOY → RUN → PROTECT → SUPPORT
 * Based on DESIGN.md Build + Run visual component requirements.
 * 
 * IMPORTANT: Desktop: horizontal flow, Mobile: vertical flow
 * Do not make it look like a generic sales funnel.
 */
export function BuildRunFlow({
  eyebrow,
  title,
  description,
  stages,
  className = '',
}: BuildRunFlowProps) {
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

      {/* Stages - Desktop horizontal flow */}
      <div className="hidden xl:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border-default -translate-y-1/2 z-0" />
          
          <div className="relative flex justify-between z-10">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
              >
                {/* Stage circle */}
                <div className="w-16 h-16 rounded-full bg-bg-inverse border-4 border-bg-primary flex items-center justify-center mb-4 relative">
                  {stage.icon ? (
                    <div className="text-text-inverse">
                      {stage.icon}
                    </div>
                  ) : (
                    <span className="text-text-inverse font-bold text-lg">
                      {index + 1}
                    </span>
                  )}
                  
                  {/* Arrow (except for last stage) */}
                  {index < stages.length - 1 && (
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-8 h-8 text-border-default"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Stage content */}
                <h3 className="h4 mb-2 text-text-primary">
                  {stage.title}
                </h3>
                
                <p className="body-small text-text-secondary">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stages - Mobile vertical flow */}
      <div className="xl:hidden space-y-8">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            {/* Stage indicator */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bg-inverse flex items-center justify-center">
              {stage.icon ? (
                <div className="text-text-inverse">
                  {stage.icon}
                </div>
              ) : (
                <span className="text-text-inverse font-bold">
                  {index + 1}
                </span>
              )}
            </div>

            {/* Stage content */}
            <div>
              <h3 className="h4 mb-2 text-text-primary">
                {stage.title}
              </h3>
              
              <p className="body-small text-text-secondary">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
