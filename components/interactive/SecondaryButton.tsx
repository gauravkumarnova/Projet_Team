import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'link';
  href?: string;
}

/**
 * SecondaryButton Component
 * 
 * Secondary CTA button with all required states.
 * Used for: Explore Services, contextual secondary navigation
 * 
 * Based on DESIGN.md: neutral/outline/subtle
 */
export function SecondaryButton({
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
}: SecondaryButtonProps) {
  // Variant styles
  const variantClasses = {
    default: 'bg-bg-surface text-text-primary border border-border-default hover:bg-state-hover active:bg-state-selected',
    outline: 'bg-transparent text-text-primary border border-border-strong hover:border-brand-primary hover:text-brand-primary active:bg-state-selected',
    ghost: 'bg-transparent text-text-primary hover:bg-state-hover active:bg-state-selected',
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
    : 'cursor-pointer transition-all duration-150 ease-standard';

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
