export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#0e3e2e',
        secondary: '#e79c56',
        background: '#f9f1de',
        accent: '#1d6e50',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(14, 62, 46, 0.25)',
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'leaf-fall': 'leafFall 15s linear infinite',
      },
      keyframes: {
        leafFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};