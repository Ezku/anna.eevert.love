import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.648,
  scaleRatio: 2.718,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['700'],
    },
    {
      name: 'Overpass Mono',
      styles: ['300', '500'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Overpass Mono', 'monospace'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 500,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#0071bc',
    },
    'a:visited': {
      color: '#4c2c92',
    },
  }),
})

export default typography
