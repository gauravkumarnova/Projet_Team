interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: Step[];
  className?: string;
}

/**
 * ProcessTimeline Component
 * 
 * Process visualization for Assess → Design → Build/Fix → Deploy → Monitor → Manage → Support
 * Based on DESIGN.md process component design.
 * 
 * IMPORTANT: Desktop: horizontal/staggered timeline, Mobile: vertical sequence
 */
export function ProcessTimeline({
  eyebrow,
  title,
  description,
  steps,
  className = '',
}: ProcessTimelineProps) {
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

      {/* Desktop Timeline */}
      <div className="hidden xl:block">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border-default -translate-y-1/2 z-0" />
          
          <div className="relative flex justify-between z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center max-w-xs ${index % 2 === 0 ? 'mt-0' : '-mt-16'}`}
              >
                {/* Step number bubble */}
                <div className="w-12 h-12 rounded-full bg-bg-inverse flex items-center justify-center mb-4">
                  <span className="text-text-inverse font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="bg-bg-surface border border-border-default rounded-lg p-5 shadow-sm">
                  <h3 className="h4 mb-2 text-text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="body-small text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Vertical Timeline */}
      <div className="xl:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border-default" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Step number bubble */}
                <div className="absolute -left-8 w-8 h-8 rounded-full bg-bg-inverse border-4 border-bg-primary flex items-center justify-center">
                  <span className="text-text-inverse font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="bg-bg-surface border border-border-default rounded-lg p-5">
                  <h3 className="h4 mb-2 text-text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="body-small text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
