// DentalCare Dubai Design System
// Medical-grade UI components and standards

export const designSystem = {
  // Color Palette - Medical Professional
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE', 
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6', // Primary Brand Blue
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF', // Primary Dark
      900: '#1E3A8A',
      950: '#172554',
    },
    accent: {
      50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAE6FD',
      300: '#7DD3FC',
      400: '#38BDF8',
      500: '#0EA5E9', // Accent Blue
      600: '#0284C7',
      700: '#0369A1',
      800: '#075985',
      900: '#0C4A6E',
      950: '#082F49',
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      950: '#030712',
    },
    success: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E', // Success Green
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
      950: '#052E16',
    },
    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B', // Warning Amber
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
      950: '#451A03',
    },
    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444', // Error Red
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
      950: '#450A0A',
    },
  },

  // Typography System - Medical Readability
  typography: {
    fontFamily: {
      primary: ['Poppins', 'system-ui', 'sans-serif'],
      secondary: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },

  // Spacing System - Consistent Layout
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
  },

  // Border Radius - Medical Softness
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Shadows - Medical Depth
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    medical: '0 20px 40px -10px rgba(59, 130, 246, 0.15), 0 8px 16px -4px rgba(59, 130, 246, 0.1)',
  },

  // Component Standards
  components: {
    button: {
      primary: {
        backgroundColor: '#3B82F6',
        color: '#FFFFFF',
        padding: '0.75rem 2rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.2s ease-in-out',
        hover: {
          backgroundColor: '#2563EB',
          transform: 'translateY(-1px)',
          boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
        },
        focus: {
          outline: '2px solid #3B82F6',
          outlineOffset: '2px',
        },
      },
      secondary: {
        backgroundColor: '#F3F4F6',
        color: '#374151',
        padding: '0.75rem 2rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.2s ease-in-out',
        hover: {
          backgroundColor: '#E5E7EB',
          transform: 'translateY(-1px)',
        },
        focus: {
          outline: '2px solid #3B82F6',
          outlineOffset: '2px',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '#3B82F6',
        border: '2px solid #3B82F6',
        padding: '0.75rem 2rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.2s ease-in-out',
        hover: {
          backgroundColor: '#3B82F6',
          color: '#FFFFFF',
          transform: 'translateY(-1px)',
        },
        focus: {
          outline: '2px solid #3B82F6',
          outlineOffset: '2px',
        },
      },
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s ease-in-out',
      hover: {
        transform: 'translateY(-2px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
    input: {
      backgroundColor: '#FFFFFF',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      transition: 'all 0.2s ease-in-out',
      focus: {
        outline: 'none',
        borderColor: '#3B82F6',
        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      },
      error: {
        borderColor: '#EF4444',
        boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
      },
    },
  },

  // Layout Standards
  layout: {
    container: {
      maxWidth: '1280px',
      padding: '0 1rem',
      sm: { padding: '0 1.5rem' },
      lg: { padding: '0 2rem' },
    },
    section: {
      padding: '4rem 0',
      sm: { padding: '3rem 0' },
      lg: { padding: '6rem 0' },
    },
    grid: {
      gap: '1.5rem',
      sm: { gap: '2rem' },
      lg: { gap: '3rem' },
    },
  },

  // Animation Standards - Medical Subtlety
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
}

// Utility functions for design system
export const getColor = (color: string, shade: number = 500) => {
  return designSystem.colors[color]?.[shade] || color
}

export const getSpacing = (size: string) => {
  return designSystem.spacing[size] || size
}

export const getTypography = (size: string) => {
  return designSystem.typography.fontSize[size] || size
}
