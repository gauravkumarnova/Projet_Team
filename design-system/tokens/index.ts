/**
 * Design Tokens Index
 * 
 * Centralized export of all design tokens.
 * This is the single source of truth for design system values.
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './borders';
export * from './shadows';
export * from './motion';

// Re-export types for convenience
export type { ColorTokens } from './colors';
export type { TypographyTokens } from './typography';
export type { SpacingTokens } from './spacing';
export type { BorderTokens } from './borders';
export type { ShadowTokens } from './shadows';
export type { MotionTokens } from './motion';

// Design token groups as specified in DESIGN.md
export const tokens = {
  colors: {
    // Background
    '--color-bg-primary': '#ffffff',
    '--color-bg-subtle': '#f8fafc',
    '--color-bg-surface': '#ffffff',
    '--color-bg-surface-elevated': '#ffffff',
    '--color-bg-inverse': '#0f172a',
    
    // Text
    '--color-text-primary': '#0f172a',
    '--color-text-secondary': '#475569',
    '--color-text-muted': '#64748b',
    '--color-text-inverse': '#ffffff',
    '--color-text-on-brand': '#ffffff',
    '--color-text-inverse-accent': '#93c5fd',
    '--color-text-inverse-muted': '#cbd5e1',
    
    // Border
    '--color-border-default': '#e2e8f0',
    '--color-border-strong': '#cbd5e1',
    '--color-border-subtle': '#f1f5f9',
    '--color-border-brand': 'var(--color-brand-primary)',
    
    // Brand (replaceable - NEEDS INPUT)
    '--color-brand-primary': '#2563eb',
    '--color-brand-hover': '#1d4ed8',
    '--color-brand-active': '#1e40af',
    '--color-brand-subtle': '#dbeafe',
    
    // Functional
    '--color-functional-success': '#059669',
    '--color-functional-warning': '#d97706',
    '--color-functional-error': '#dc2626',
    '--color-functional-info': '#0ea5e9',
    
    // State
    '--color-state-hover': 'rgba(15, 23, 42, 0.04)',
    '--color-state-focus': 'rgba(37, 99, 235, 0.5)',
    '--color-state-disabled': 'rgba(15, 23, 42, 0.12)',
    '--color-state-selected': 'rgba(37, 99, 235, 0.1)',
  },
  
  typography: {
    '--font-family-sans': 'ui-sans-serif, system-ui, sans-serif, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    '--font-family-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  
  zIndex: {
    '--z-index-base': '0',
    '--z-index-sticky': '10',
    '--z-index-dropdown': '100',
    '--z-index-overlay': '200',
    '--z-index-modal': '300',
    '--z-index-toast': '400',
  },
  
  // Focus styles (accessible)
  focus: {
    '--focus-ring-width': '3px',
    '--focus-ring-color': 'var(--color-state-focus)',
    '--focus-ring-offset': '2px',
  },
} as const;

export type DesignTokens = typeof tokens;
