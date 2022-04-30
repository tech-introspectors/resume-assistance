module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, rgba(11, 33, 54, 0.91) 0%, #080029 100%)',
      },
      colors: {
        primaryDark: '#0B1120',
        secondaryDark: '#0B2136',
        primaryBlue: '#0EA5E9',
        brightTextColor: '#B2B8C1',
        lightTextColor: '#828FA3',
      },
    },
  },
  plugins: [],
}
