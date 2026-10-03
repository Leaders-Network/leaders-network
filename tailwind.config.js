/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#E8F4FD',
          100: '#D1E9FB', 
          200: '#A3D3F7',
          300: '#75BDF3',
          400: '#47A7EF',
          500: '#0066CC', // Primary blue from logo
          600: '#0052A3',
          700: '#003D7A',
          800: '#002952',
          900: '#001429',
          950: '#000A14'
        },
        orange: {
          50: '#FFF7F5',
          100: '#FFEFEB',
          200: '#FFDFD6',
          300: '#FFCFC2',
          400: '#FFBFAD',
          500: '#FF6B35', // Primary orange from logo
          600: '#CC562A',
          700: '#99401F',
          800: '#662B15',
          900: '#33150A',
          950: '#1A0B05'
        },
        green: {
          50: '#F0F9F0',
          100: '#E1F3E1',
          200: '#C3E7C3',
          300: '#A5DBA5',
          400: '#87CF87',
          500: '#4CAF50', // Accent green from logo
          600: '#3D8C40',
          700: '#2E6930',
          800: '#1E4620',
          900: '#0F2310',
          950: '#081108'
        },
        red: {
          50: '#FEF2F2',
          100: '#FEE5E5',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E53E3E', // Accent red from logo
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A'
        },
        dark: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#1A1A1C', // Dark card background
          950: '#0A0A0B'  // Near-black background
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1', 
            transform: 'translateY(0)'
          }
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideUp: {
          '0%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(0, 102, 204, 0.3)'
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(0, 102, 204, 0.6)'
          }
        },
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow-brand': '0 0 20px rgba(0, 102, 204, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
};
