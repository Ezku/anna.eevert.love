import Typography from 'typography'

import scale from './scale'
import { narrow, normal } from './breakpoints'

const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif',
]
export const headerFontFamily = ['Playfair Display', 'serif']
export const bodyFontFamily = ['futura-pt', ...systemFontStack]
export const highlightFontFamily = ['Overpass Mono', 'monospace']

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.648,
  scaleRatio: 2.718,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['700'],
    },
    {
      name: 'Overpass Mono',
      styles: ['300', '500', '700'],
    },
  ],
  headerFontFamily: headerFontFamily,
  bodyFontFamily: bodyFontFamily,
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#0071bc',
    },
    'a:visited': {
      color: '#4c2c92',
    },
  }),
})

export const headers = {
  h1: [
    {
      fontSize: `${scale(3)}px`,
      lineHeight: `${scale(4)}px`,
    },
    narrow(bp => ({
      fontSize: `${scale(4)}px`,
      lineHeight: `${scale(5)}px`,
    })),
    normal(bp => ({
      fontSize: `${scale(5)}px`,
      lineHeight: `${scale(6)}px`,
    })),
  ],
  h2: [
    {
      fontSize: `${scale(2)}px`,
      lineHeight: `${scale(2)}px`,
    },
    narrow(bp => ({
      fontSize: `${scale(3)}px`,
      lineHeight: `${scale(3)}px`,
    })),
    normal(bp => ({
      fontSize: `${scale(4)}px`,
      lineHeight: `${scale(4)}px`,
    })),
  ],
  h3: [
    {
      fontSize: `${scale(1)}px`,
      lineHeight: `${scale(2)}px`,
    },
    narrow(bp => ({
      fontSize: `${scale(2)}px`,
      lineHeight: `${scale(3)}px`,
    })),
    normal(bp => ({
      fontSize: `${scale(3)}px`,
      lineHeight: `${scale(4)}px`,
    })),
  ],
  h4: [
    {
      fontSize: `${scale(0)}px`,
      lineHeight: `${scale(1)}px`,
    },
    narrow(bp => ({
      fontSize: `${scale(1)}px`,
      lineHeight: `${scale(2)}px`,
    })),
    normal(bp => ({
      fontSize: `${scale(2)}px`,
      lineHeight: `${scale(3)}px`,
    })),
  ],
}

export default typography
