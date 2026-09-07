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

export function ProcessTimeline({
  eyebrow,
  title,
  description,
  steps,
  className = '',
}: ProcessTimelineProps) {
  return (
    <div className={className}>
      <div className="mb-16 text-center">
        {eyebrow && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-brand-subtle px-3 py-1.5 text-sm font-medium uppercase tracking-wide text-brand-primary">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="h2 mb-4 heading-break">
          {title}
        </h2>

        {description && (
          <p className="body-large mx-auto mb-0 max-w-3xl text-text-secondary readable-line-length">
            {description}
          </p>
        )}
      </div>

      <div className="hidden xl:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 z-0 h-0.5 -translate-y-1/2 bg-border-default" />

          <div className="relative z-10 flex gap-3">
            {steps.map((step) => (
              <div key={step.number} className="flex min-w-0 flex-1 flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bg-inverse">
                  <span className="text-lg font-bold text-text-inverse">
                    {step.number}
                  </span>
                </div>

                <div className="flex h-full min-h-[178px] w-full flex-col rounded-lg border border-border-default bg-bg-surface p-4 shadow-sm">
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

      <div className="hidden grid-cols-2 gap-5 md:grid xl:hidden">
        {steps.map((step) => (
          <div key={step.number} className="flex min-w-0 items-start gap-4 rounded-lg border border-border-default bg-bg-surface p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-inverse">
              <span className="text-sm font-bold text-text-inverse">
                {step.number}
              </span>
            </div>

            <div>
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

      <div className="md:hidden">
        <div className="relative pl-8">
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-border-default" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border-4 border-bg-primary bg-bg-inverse">
                  <span className="text-sm font-bold text-text-inverse">
                    {step.number}
                  </span>
                </div>

                <div className="rounded-lg border border-border-default bg-bg-surface p-5">
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