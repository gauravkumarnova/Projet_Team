import { ReactNode } from 'react';
import { Container } from '../layout/Container';
import { PrimaryButton } from '../interactive/PrimaryButton';
import { SecondaryButton } from '../interactive/SecondaryButton';

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  visual?: ReactNode;
  visualPosition?: 'left' | 'right' | 'top' | 'bottom';
  visualSize?: 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * Hero Component
 * 
 * Reusable hero component for page introductions.
 * Based on DESIGN.md hero design rules and layout.
 * 
 * IMPORTANT: Content must come from CONTENT.md, not hardcoded.
 * Visuals should be technical diagrams, not generic stock images.
 */
export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  visual,
  visualPosition = 'right',
  visualSize = 'medium',
  className = '',
}: HeroProps) {
  // Visual position classes
  const visualPositionClasses = {
    left: 'md:flex-row-reverse',
    right: 'md:flex-row',
    top: 'flex-col',
    bottom: 'flex-col-reverse',
  };

  // Visual size classes
  const visualSizeClasses = {
    small: 'md:w-2/5',
    medium: 'md:w-1/2',
    large: 'md:w-3/5',
  };

  // Content size classes (inverse of visual size)
  const contentSizeClasses = {
    small: 'md:w-3/5',
    medium: 'md:w-1/2',
    large: 'md:w-2/5',
  };

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container size="7xl">
        <div className={`flex flex-col ${visualPositionClasses[visualPosition]} items-center gap-12 md:gap-16`}>
          {/* Content */}
          <div className={`w-full ${contentSizeClasses[visualSize]}`}>
            {eyebrow && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1.5 bg-brand-subtle text-brand-primary rounded-full text-sm font-medium tracking-wide uppercase">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className="h1 mb-6 heading-break">
              {title}
            </h1>

            {description && (
              <p className="body-large mb-8 text-text-secondary readable-line-length">
                {description}
              </p>
            )}

            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryAction && (
                  <PrimaryButton
                    size="lg"
                    onClick={primaryAction.onClick}
                    as={primaryAction.href ? 'link' : 'button'}
                    href={primaryAction.href}
                    className="sm:flex-shrink-0"
                  >
                    {primaryAction.label}
                  </PrimaryButton>
                )}
                
                {secondaryAction && (
                  <SecondaryButton
                    size="lg"
                    variant="outline"
                    onClick={secondaryAction.onClick}
                    as={secondaryAction.href ? 'link' : 'button'}
                    href={secondaryAction.href}
                    className="sm:flex-shrink-0"
                  >
                    {secondaryAction.label}
                  </SecondaryButton>
                )}
              </div>
            )}
          </div>

          {/* Visual */}
          {visual && (
            <div className={`w-full ${visualSizeClasses[visualSize]} flex items-center justify-center`}>
              <div className="relative w-full max-w-lg mx-auto">
                {visual}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
