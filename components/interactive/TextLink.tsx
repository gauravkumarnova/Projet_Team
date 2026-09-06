import { AnchorHTMLAttributes, ReactNode, forwardRef } from 'react';

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'default' | 'brand' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  underline?: 'always' | 'hover' | 'none';
  external?: boolean;
}

/**
 * TextLink Component
 * 
 * Accessible text link with semantic states.
 * Used for: service detail links, related resources, inline navigation
 * 
 * Based on DESIGN.md: text links should be descriptive and accessible
 */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(function TextLink({
  children,
  variant = 'default',
  size = 'md',
  underline = 'hover',
  external = false,
  className = '',
  href,
  ...props
}, ref) {
  // Variant styles
  const variantClasses = {
    default: 'text-text-primary hover:text-brand-primary',
    brand: 'text-brand-primary hover:text-brand-hover',
    inverse: 'text-text-inverse hover:text-text-inverse-accent',
  };

  // Size styles
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // Underline styles
  const underlineClasses = {
    always: 'underline underline-offset-2',
    hover: 'hover:underline hover:underline-offset-2',
    none: 'no-underline',
  };

  // Focus styles (accessible)
  const focusClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-state-focus focus-visible:ring-offset-1';

  // External link attributes
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      ref={ref}
      href={href}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${underlineClasses[underline]}
        ${focusClasses}
        transition-colors
        duration-150
        ease-standard
        cursor-pointer
        ${className}
      `}
      {...externalProps}
      {...props}
    >
      {children}
      {external && (
        <span className="inline-block ml-1" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
});
