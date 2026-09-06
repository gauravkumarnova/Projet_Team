import { ReactNode } from 'react';
import { TextLink } from '../interactive/TextLink';

interface ServiceCardProps {
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
  variant?: 'primary' | 'secondary' | 'supporting';
  icon?: ReactNode;
  className?: string;
}

/**
 * ServiceCard Component
 * 
 * Reusable service card component with hierarchy support.
 * Based on DESIGN.md service hierarchy rules:
 * - Primary: Cloud & DevOps, Managed Cloud & Infrastructure (larger treatment)
 * - Secondary: Migration, Fractional, Software (medium treatment)
 * - Supporting: Backup & DR, Streaming (smaller but clear)
 * 
 * IMPORTANT: Do not include fake metrics or meaningless icons.
 */
export function ServiceCard({
  title,
  description,
  link,
  variant = 'secondary',
  icon,
  className = '',
}: ServiceCardProps) {
  // Variant styles
  const variantClasses = {
    primary: 'border-brand-primary shadow-lg hover:shadow-xl',
    secondary: 'border-border-default shadow-md hover:shadow-lg',
    supporting: 'border-border-subtle shadow-sm hover:shadow-md',
  };

  // Size/padding based on variant
  const paddingClasses = {
    primary: 'p-8',
    secondary: 'p-6',
    supporting: 'p-5',
  };

  // Title size based on variant
  const titleSizeClasses = {
    primary: 'text-xl font-semibold',
    secondary: 'text-lg font-semibold',
    supporting: 'text-base font-semibold',
  };

  return (
    <article
      className={`
        ${variantClasses[variant]}
        ${paddingClasses[variant]}
        bg-bg-surface
        border
        rounded-lg
        transition-all
        duration-200
        ease-standard
        flex
        flex-col
        h-full
        hover:-translate-y-1
        focus-within:ring-2
        focus-within:ring-state-focus
        focus-within:ring-offset-2
        focus-within:outline-none
        ${className}
      `}
    >
      {/* Icon (optional) */}
      {icon && (
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-subtle text-brand-primary">
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-grow">
        <h3 className={`${titleSizeClasses[variant]} mb-3 text-text-primary`}>
          {title}
        </h3>
        
        <p className="body-small mb-4 text-text-secondary">
          {description}
        </p>
      </div>

      {/* Link */}
      {link && (
        <div className="mt-auto pt-4">
          <TextLink
            href={link.href}
            variant="brand"
            underline="hover"
            className="font-medium"
          >
            {link.label}
          </TextLink>
        </div>
      )}
    </article>
  );
}