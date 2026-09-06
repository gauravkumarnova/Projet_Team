/**
 * Shadow Design Tokens
 * 
 * Based on DESIGN.md: Prefer subtle borders over heavy shadows.
 * Use shadows only where elevation genuinely matters.
 */

export const shadows = {
  // Elevation levels
  elevation: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  },

  // Semantic shadows (use sparingly)
  semantic: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    'card-elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    modal: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    dropdown: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    focus: '0 0 0 3px rgba(59, 130, 246, 0.5)',
  },

  // Inset shadows
  inset: {
    xs: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    md: 'inset 0 4px 6px 0 rgba(0, 0, 0, 0.05)',
  },

  // Rules:
  // - Avoid large blurry shadows
  // - Avoid glowing cards
  // - Avoid neon borders
  // - Avoid glassmorphism everywhere
} as const;

export type ShadowTokens = typeof shadows;