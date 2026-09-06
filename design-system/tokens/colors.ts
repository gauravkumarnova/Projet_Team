/**
 * Color Design Tokens
 * 
 * IMPORTANT: Brand-specific values are replaceable.
 * The final brand palette is: NEEDS INPUT
 * 
 * Use semantic tokens so palette can be changed centrally.
 */

// Base colors (semantic, can be updated for brand)
export const colors = {
  // Background colors
  background: {
    primary: 'var(--color-bg-primary)',
    subtle: 'var(--color-bg-subtle)',
    surface: 'var(--color-bg-surface)',
    'surface-elevated': 'var(--color-bg-surface-elevated)',
    inverse: 'var(--color-bg-inverse)',
  },

  // Text colors
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted: 'var(--color-text-muted)',
    inverse: 'var(--color-text-inverse)',
    onBrand: 'var(--color-text-on-brand)',
    inverseAccent: 'var(--color-text-inverse-accent)',
    inverseMuted: 'var(--color-text-inverse-muted)',
  },

  // Border colors
  border: {
    default: 'var(--color-border-default)',
    strong: 'var(--color-border-strong)',
    subtle: 'var(--color-border-subtle)',
    brand: 'var(--color-border-brand)',
  },

  // Brand colors (replaceable)
  brand: {
    primary: 'var(--color-brand-primary)',
    hover: 'var(--color-brand-hover)',
    active: 'var(--color-brand-active)',
    subtle: 'var(--color-brand-subtle)',
  },

  // Functional colors
  functional: {
    success: 'var(--color-functional-success)',
    warning: 'var(--color-functional-warning)',
    error: 'var(--color-functional-error)',
    info: 'var(--color-functional-info)',
  },

  // State colors
  state: {
    hover: 'var(--color-state-hover)',
    focus: 'var(--color-state-focus)',
    disabled: 'var(--color-state-disabled)',
    selected: 'var(--color-state-selected)',
  },
} as const;

export type ColorTokens = typeof colors;
