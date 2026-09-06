/**
 * Spacing Design Tokens
 * 
 * Based on DESIGN.md spacing system:
 * 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 144
 */

export const spacing = {
  // Base spacing units (in rem)
  '0': '0',
  '1': '0.25rem',     // 4px
  '2': '0.5rem',      // 8px
  '3': '0.75rem',     // 12px
  '4': '1rem',        // 16px
  '5': '1.25rem',     // 20px
  '6': '1.5rem',      // 24px
  '8': '2rem',        // 32px
  '10': '2.5rem',     // 40px
  '12': '3rem',       // 48px
  '16': '4rem',       // 64px
  '20': '5rem',       // 80px
  '24': '6rem',       // 96px
  '30': '7.5rem',     // 120px
  '36': '9rem',       // 144px
  
  // Semantic spacing
  small: '1rem',      // 16px
  medium: '1.5rem',   // 24px
  large: '2.5rem',    // 40px
  xlarge: '4rem',     // 64px
  '2xlarge': '6rem',  // 96px
  '3xlarge': '7.5rem', // 120px
  '4xlarge': '9rem',  // 144px
  
  // Section spacing (for content rhythm)
  section: {
    xs: '2.5rem',     // 40px
    sm: '4rem',       // 64px
    md: '6rem',       // 96px
    lg: '7.5rem',     // 120px
    xl: '9rem',       // 144px
  },
  
  // Container widths
  container: {
    xs: '20rem',      // 320px
    sm: '24rem',      // 384px
    md: '28rem',      // 448px
    lg: '32rem',      // 512px
    xl: '36rem',      // 576px
    '2xl': '42rem',   // 672px
    '3xl': '48rem',   // 768px
    '4xl': '56rem',   // 896px
    '5xl': '64rem',   // 1024px
    '6xl': '72rem',   // 1152px
    '7xl': '80rem',   // 1280px
    full: '100%',
  },
  
  // Grid system
  grid: {
    columns: {
      desktop: '12',
      tablet: '8',
      mobile: '4',
    },
    gap: {
      xs: '0.5rem',   // 8px
      sm: '1rem',     // 16px
      md: '1.5rem',   // 24px
      lg: '2rem',     // 32px
      xl: '2.5rem',   // 40px
    },
    gutter: {
      xs: '1rem',     // 16px
      sm: '1.5rem',   // 24px
      md: '2rem',     // 32px
      lg: '2.5rem',   // 40px
      xl: '3rem',     // 48px
    },
  },
  
  // Breakpoints (in pixels)
  breakpoints: {
    'xs': '360px',
    'sm': '390px',
    'md': '430px',
    'lg': '768px',
    'xl': '1024px',
    '2xl': '1280px',
    '3xl': '1440px',
  },
} as const;

export type SpacingTokens = typeof spacing;