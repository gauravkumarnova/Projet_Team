import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Container Component
 * 
 * Responsive container with maximum width constraint.
 * Based on DESIGN.md: Approximately 1200–1280px desktop maximum.
 */
export function Container({
  children,
  className = '',
  size = '7xl', // 1280px default
  padding = 'md', // 2rem (32px) on desktop, 1.5rem (24px) on mobile
}: ContainerProps) {
  // Size classes
  const sizeClasses = {
    xs: 'max-w-20rem',     // 320px
    sm: 'max-w-24rem',     // 384px
    md: 'max-w-28rem',     // 448px
    lg: 'max-w-32rem',     // 512px
    xl: 'max-w-36rem',     // 576px
    '2xl': 'max-w-42rem',  // 672px
    '3xl': 'max-w-48rem',  // 768px
    '4xl': 'max-w-56rem',  // 896px
    '5xl': 'max-w-64rem',  // 1024px
    '6xl': 'max-w-72rem',  // 1152px
    '7xl': 'max-w-80rem',  // 1280px
    full: 'max-w-full',
  };

  // Padding classes
  const paddingClasses = {
    none: 'px-0',
    xs: 'px-4 md:px-6',     // 1rem (16px) mobile, 1.5rem (24px) desktop
    sm: 'px-4 md:px-8',     // 1rem (16px) mobile, 2rem (32px) desktop
    md: 'px-6 md:px-8',     // 1.5rem (24px) mobile, 2rem (32px) desktop
    lg: 'px-6 md:px-10',    // 1.5rem (24px) mobile, 2.5rem (40px) desktop
    xl: 'px-6 md:px-12',    // 1.5rem (24px) mobile, 3rem (48px) desktop
  };

  return (
    <div className={`mx-auto ${sizeClasses[size]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}