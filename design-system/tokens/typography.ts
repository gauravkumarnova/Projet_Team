/**
 * Typography Design Tokens
 * 
 * Use fluid typography with clamp() where appropriate.
 * All values are suggestions based on DESIGN.md ranges.
 */

export const typography = {
  // Font families
  fontFamily: {
    sans: 'var(--font-family-sans)',
    mono: 'var(--font-family-mono)',
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Font sizes (fluid where possible)
  fontSize: {
    // Display sizes
    'display-xl': 'clamp(3.5rem, 5vw + 1rem, 4.5rem)', // 56-72px
    display: 'clamp(3rem, 4vw + 1rem, 4rem)', // 48-64px
    
    // Heading sizes
    h1: 'clamp(2.375rem, 3vw + 1rem, 3rem)', // 38-48px mobile, 56-72px desktop
    h2: 'clamp(1.875rem, 2.5vw + 1rem, 2.25rem)', // 30-38px mobile, 40-52px desktop
    h3: 'clamp(1.375rem, 2vw + 1rem, 1.75rem)', // 22-28px mobile, 26-32px desktop
    h4: 'clamp(1.125rem, 1.5vw + 1rem, 1.5rem)', // 18-24px mobile, 22-28px desktop
    
    // Body sizes
    'body-large': 'clamp(1.125rem, 1vw + 1rem, 1.25rem)', // 18-20px
    body: 'clamp(1rem, 0.5vw + 1rem, 1.125rem)', // 16-18px
    'body-small': 'clamp(0.875rem, 0.25vw + 1rem, 1rem)', // 14-16px
    
    // Utility sizes
    caption: 'clamp(0.75rem, 0.25vw + 1rem, 0.875rem)', // 12-14px
    label: 'clamp(0.75rem, 0.25vw + 1rem, 0.875rem)', // 12-14px
  },

  // Line heights
  lineHeight: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },

  // Text styles (precomputed combinations)
  styles: {
    'display-xl': {
      fontSize: 'clamp(3.5rem, 5vw + 1rem, 4.5rem)',
      lineHeight: '1.1',
      fontWeight: '800',
      letterSpacing: '-0.025em',
    },
    'display': {
      fontSize: 'clamp(3rem, 4vw + 1rem, 4rem)',
      lineHeight: '1.1',
      fontWeight: '800',
      letterSpacing: '-0.025em',
    },
    h1: {
      fontSize: 'clamp(2.375rem, 3vw + 1rem, 3rem)',
      lineHeight: '1.2',
      fontWeight: '700',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: 'clamp(1.875rem, 2.5vw + 1rem, 2.25rem)',
      lineHeight: '1.3',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: 'clamp(1.375rem, 2vw + 1rem, 1.75rem)',
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '0',
    },
    h4: {
      fontSize: 'clamp(1.125rem, 1.5vw + 1rem, 1.5rem)',
      lineHeight: '1.5',
      fontWeight: '600',
      letterSpacing: '0',
    },
    'body-large': {
      fontSize: 'clamp(1.125rem, 1vw + 1rem, 1.25rem)',
      lineHeight: '1.75',
      fontWeight: '400',
      letterSpacing: '0',
    },
    body: {
      fontSize: 'clamp(1rem, 0.5vw + 1rem, 1.125rem)',
      lineHeight: '1.75',
      fontWeight: '400',
      letterSpacing: '0',
    },
    'body-small': {
      fontSize: 'clamp(0.875rem, 0.25vw + 1rem, 1rem)',
      lineHeight: '1.6',
      fontWeight: '400',
      letterSpacing: '0',
    },
    caption: {
      fontSize: 'clamp(0.75rem, 0.25vw + 1rem, 0.875rem)',
      lineHeight: '1.4',
      fontWeight: '400',
      letterSpacing: '0.025em',
    },
    label: {
      fontSize: 'clamp(0.75rem, 0.25vw + 1rem, 0.875rem)',
      lineHeight: '1.4',
      fontWeight: '500',
      letterSpacing: '0.025em',
    },
  },
} as const;

export type TypographyTokens = typeof typography;