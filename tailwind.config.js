/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        accent: {
          green: '#34d399',
          purple: '#a855f7',
          orange: '#fb923c',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'timeline-dot': 'timelineDot 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'timeline-line': 'timelineLine 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-slide': 'appleSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'apple-scale': 'appleScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        timelineDot: {
          '0%': { 
            transform: 'scale(0.3)', 
            opacity: '0',
            boxShadow: '0 0 0 0 rgba(2, 132, 199, 0.7)'
          },
          '50%': { 
            transform: 'scale(1.2)', 
            opacity: '0.8',
            boxShadow: '0 0 0 20px rgba(2, 132, 199, 0)'
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1',
            boxShadow: '0 0 20px 0 rgba(2, 132, 199, 0.4)'
          },
        },
        timelineLine: {
          '0%': { 
            height: '0%',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            height: '100%',
            opacity: '1'
          },
        },
        appleSlide: {
          '0%': { 
            transform: 'translateY(40px) scale(0.95)', 
            opacity: '0',
            filter: 'blur(2px)'
          },
          '100%': { 
            transform: 'translateY(0) scale(1)', 
            opacity: '1',
            filter: 'blur(0px)'
          },
        },
        appleScale: {
          '0%': { 
            transform: 'scale(0.8)', 
            opacity: '0'
          },
          '60%': { 
            transform: 'scale(1.05)', 
            opacity: '0.8'
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1'
          },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(2, 132, 199, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(2, 132, 199, 0.8)',
            transform: 'scale(1.02)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}