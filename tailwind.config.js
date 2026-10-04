/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#FAF9F5',
          100: '#F5F2E9',
          cream: '#E9E4CF',     // Swatch 1: Cream Linen
          sage: '#CAD8C5',      // Swatch 2: Soft Sage
          sand: '#C3AF83',      // Swatch 3: Warm Sand
          muted: '#7E8F6A',     // Swatch 4: Muted Olive
          primary: '#607742',   // Swatch 5: Olive Green
          dark: '#3E4D2A',      // Swatch 6: Dark Olive (For buttons!)
          deep: '#26311A',      // Deepest dark olive for button hover
          text: '#1F2818',      // Rich dark forest olive text
          subtext: '#526049',   // Muted reading text
          border: '#D8D3C3',    // Delicate warm border
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(0, 242, 254, 0.3)',
        'glow-blue': '0 0 40px -10px rgba(79, 172, 254, 0.3)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 14px 40px rgba(0, 242, 254, 0.12)',
      }
    },
  },
  plugins: [],
}
