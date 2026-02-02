/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Premium Medical Blue (Gulf Standard)
          dark: '#1E3A8A', // Deep Medical Blue
          light: '#3B82F6', // Light Medical Blue
        },
        accent: {
          DEFAULT: '#3B82F6', // Professional Medical Blue Accent
          dark: '#2563EB', // Darker Blue Accent
          light: '#60A5FA', // Lighter Blue Accent
        },
        secondary: {
          DEFAULT: '#F3F4F6', // Light Gray/Mint accent
          dark: '#E5E7EB', // Darker accent
          light: '#F9FAFB', // Lighter accent
        },
        white: {
          DEFAULT: '#FFFFFF',
          soft: '#F9FAFB', // Off-white for backgrounds
        },
        gray: {
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
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'medical': '0 20px 40px -10px rgba(59, 130, 246, 0.15), 0 8px 16px -4px rgba(59, 130, 246, 0.1)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
