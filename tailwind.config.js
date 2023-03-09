module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      body: 'Work Sans',
      primary: 'Playfair Display',
      secondary: 'Mulish',
      thirdly: 'Beyond The Mountains',
      four: 'Broadway Copyist Text Ext',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        iconDone: 'url("./img/about/done.svg")',
      },
      colors: {
        // primary: '#0E1112',
        grey: '#484B4B',

        // accent: '#EEF7F9',

        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
