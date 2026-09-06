import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'link';
  href?: string;
}

/**
 * PrimaryButton Component
 * 
 * Primary CTA button with all required states.
 * Used for: Book a Technical Consultation, Request a Cloud Assessment, Discuss Your Project
 * 
 * Based on DESIGN.md: brand accent, strong contrast, obvious interactive state
 */
export function PrimaryButton({
  children,
  variant = 'default',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  as = 'button',
  href,
  className = '',
  disabled,
  ...props
}: PrimaryButtonProps) {
  // Variant styles
  const variantClasses = {
    default: 'bg-brand-primary text-text-on-brand hover:bg-brand-hover active:bg-brand-active',
    destructive: 'bg-functional-error text-text-on-brand hover:bg-red-700 active:bg-red-800',
    success: 'bg-functional-success text-text-on-brand hover:bg-emerald-700 active:bg-emerald-800',
  };

  // Size styles
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-button',
    md: 'px-6 py-3 text-base rounded-button',
    lg: 'px-8 py-4 text-lg rounded-button',
  };

  // State classes
  const stateClasses = disabled || isLoading
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer transition-colors duration-150 ease-standard';

  // Focus styles (accessible)
  const focusClasses = 'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-state-focus focus-visible:ring-offset-2';

  // Width class
  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClassName = `
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${stateClasses}
        ${focusClasses}
        ${widthClass}
        font-medium
        inline-flex
        items-center
        justify-center
        text-center
        select-none
        touch-manipulation
        ${className}
      `;
  const content = isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          <span className="opacity-75">{children}</span>
        </>
      ) : (
        children
      );

  if (as === 'link') {
    return (
      <a
        href={href}
        className={buttonClassName}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
