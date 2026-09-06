/**
 * Border Design Tokens
 * 
 * Based on DESIGN.md border and radius specifications.
 * Use restrained radius and subtle borders over heavy shadows.
 */

export const borders = {
  // Border widths
  width: {
    none: '0',
    xs: '1px',
    sm: '2px',
    md: '3px',
    lg: '4px',
    xl: '6px',
  },

  // Border radius (restrained)
  radius: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',   // Pill shape (for small labels/tags)
    
    // Semantic radius
    button: '0.375rem',     // 6px - moderate radius for buttons
    input: '0.375rem',      // 6px - moderate radius for inputs
    card: '0.5rem',         // 8px - subtle/moderate radius for cards
    container: '0.25rem',   // 4px - only when composition benefits
    tag: '9999px',          // Pill shape for small labels/tags/status markers
  },

  // Border styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },

  // Border presets
  presets: {
    default: {
      width: '1px',
      style: 'solid',
      color: 'var(--color-border-default)',
    },
    strong: {
      width: '2px',
      style: 'solid',
      color: 'var(--color-border-strong)',
    },
    subtle: {
      width: '1px',
      style: 'solid',
      color: 'var(--color-border-subtle)',
    },
    brand: {
      width: '2px',
      style: 'solid',
      color: 'var(--color-border-brand)',
    },
    focus: {
      width: '3px',
      style: 'solid',
      color: 'var(--color-state-focus)',
    },
  },
} as const;

export type BorderTokens = typeof borders;