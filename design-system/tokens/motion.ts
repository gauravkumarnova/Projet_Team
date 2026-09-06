/**
 * Motion Design Tokens
 * 
 * Based on DESIGN.md: Motion should communicate state or structure.
 * Keep timing fast and restrained.
 * Respect prefers-reduced-motion.
 */

export const motion = {
  // Duration (in milliseconds)
  duration: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    slowest: '500ms',
  },

  // Timing functions
  easing: {
    linear: 'linear',
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design standard
    'decelerate': 'cubic-bezier(0, 0, 0.2, 1)', // Entering animations
    'accelerate': 'cubic-bezier(0.4, 0, 1, 1)', // Exiting animations
  },

  // Delay (in milliseconds)
  delay: {
    none: '0ms',
    short: '50ms',
    medium: '100ms',
    long: '200ms',
  },

  // Animation presets
  presets: {
    // Micro interactions: ~120–200ms
    micro: {
      duration: '150ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Component transitions: ~180–300ms
    component: {
      duration: '250ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Larger reveal transitions: ~300–500ms
    reveal: {
      duration: '400ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Button interactions
    button: {
      hover: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
      active: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Navigation transitions
    navigation: {
      menu: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
      page: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Accordion/expansion
    expansion: {
      height: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // Stagger animations (for lists/collections)
  stagger: {
    fast: '50ms',
    medium: '100ms',
    slow: '150ms',
  },

  // Reduced motion support
  reduced: {
    duration: '0ms',
    transition: 'none',
  },
} as const;

export type MotionTokens = typeof motion;