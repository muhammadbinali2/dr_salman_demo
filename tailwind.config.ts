import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Accent - Muted Medical Teal/Blue
        primary: {
          DEFAULT: '#0d9488', // Muted teal - medical, calm, premium
          dark: '#0f766e',     // Darker for hover states
          light: '#14b8a6',    // Lighter for subtle highlights
          subtle: '#e6fffa',   // Very light for backgrounds
        },
        // Text Colors - Near-black, not pure black
        text: {
          primary: '#1f2937',   // Near-black for headings
          secondary: '#4b5563', // Medium gray for body
          tertiary: '#6b7280',  // Lighter gray for muted text
        },
        // Background Colors - Light grays
        bg: {
          DEFAULT: '#e9e9e9',   // Light gray background
          alt: '#f0f0f0',       // Slightly darker gray for section contrast
          subtle: '#e8e8e8',    // Medium light gray for cards/alternating sections
          tint: '#ecfdf5',      // Very subtle tint for highlights
        },
        // Border Colors - Subtle and refined
        border: {
          DEFAULT: '#e2e8f0',  // Soft border
          light: '#f1f5f9',     // Very light border
          accent: '#cbd5e1',    // Slightly darker for emphasis
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'base': ['1.125rem', { lineHeight: '1.8' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'primary-soft': '0 2px 8px rgba(13, 148, 136, 0.1)',
        'primary-medium': '0 4px 12px rgba(13, 148, 136, 0.15)',
        'primary-large': '0 8px 24px rgba(13, 148, 136, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

