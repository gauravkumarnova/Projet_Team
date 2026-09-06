import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  background?: 'default' | 'subtle' | 'surface' | 'elevated' | 'inverse';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

/**
 * Section Component
 * 
 * Reusable section component with controlled spacing and backgrounds.
 * Based on DESIGN.md spacing: 96–144px desktop, 64–96px mobile.
 */
export function Section({
  children,
  className = '',
  spacing = 'lg', // 6rem (96px) desktop default
  background = 'default',
  padding = 'md', // 6rem (96px) desktop, 4rem (64px) mobile
  id,
}: SectionProps) {
  // Spacing classes (vertical margin between sections)
  const spacingClasses = {
    none: 'my-0',
    xs: 'my-10',      // 2.5rem (40px)
    sm: 'my-16',      // 4rem (64px)
    md: 'my-20',      // 5rem (80px)
    lg: 'my-24',      // 6rem (96px) desktop default
    xl: 'my-30',      // 7.5rem (120px)
    '2xl': 'my-36',   // 9rem (144px)
    '3xl': 'my-40',   // 10rem (160px)
    '4xl': 'my-48',   // 12rem (192px)
  };

  // Background classes
  const backgroundClasses = {
    default: 'bg-bg-primary',
    subtle: 'bg-bg-subtle',
    surface: 'bg-bg-surface',
    elevated: 'bg-bg-surface-elevated',
    inverse: 'bg-bg-inverse text-text-inverse',
  };

  // Padding classes (inner padding within section)
  const paddingClasses = {
    none: 'py-0',
    xs: 'py-10',      // 2.5rem (40px)
    sm: 'py-16',      // 4rem (64px) mobile default
    md: 'py-16 md:py-24', // 4rem (64px) mobile, 6rem (96px) desktop
    lg: 'py-20 md:py-30', // 5rem (80px) mobile, 7.5rem (120px) desktop
    xl: 'py-24 md:py-36', // 6rem (96px) mobile, 9rem (144px) desktop
  };

  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}