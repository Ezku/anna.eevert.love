import glamorous from 'glamorous'

import scale from '../utils/scale'
import { headers } from '../utils/typography'

export const P = glamorous.p({
  marginBottom: `${scale(0)}px`,
})

export const H3 = glamorous.h3(
  {
    display: 'inline-block',
    padding: `${scale(-3)}px ${scale(-5)}px`,
    borderBottom: '3px double rgba(0,0,0,0.2)',
    marginBottom: `${scale(0)}px`,
  },
  headers.h3
)

export const Section = glamorous.section({
  marginBottom: `${scale(2)}px`,
})

export const A = glamorous.a({
  color: '#2980b9',
  textDecoration: 'none',
  ':visited': {
    color: '#2980b9',
  },
  borderBottom: '1px double #2980b9',
})
