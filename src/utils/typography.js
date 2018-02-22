
import Typography from 'typography';


const typography = new Typography({
  title: 'Funky Fresh',
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ['Didact Gothic', 'sans-serif'],
  bodyFontFamily: ['Didact Gothic', 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 1200,
  googleFonts: [
    {
      name: 'Didact Gothic',
      styles: ['700', '400'],
    },
    {
      name: 'sans-serif',
      styles: ['700', '400'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;