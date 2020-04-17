import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Oswald', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Assistant', 'Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['400', '700'],
    },
    {
      name: 'Georgia',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  scaleRatio: 3,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h2: {
      marginTop: rhythm(2),
    },
    h3: {
      marginTop: rhythm(2),
      fontFamily: ['Oswald', 'sans-serif'].join(','),
      fontWeight: '400',
    },
    h4: {
      fontFamily: ['Oswald', 'sans-serif'].join(','),
      fontWeight: '400',
    },
    h5: {
      fontFamily: ['Oswald', 'sans-serif'].join(','),
      fontWeight: '400',
    },
  }),
});

export default typography;
