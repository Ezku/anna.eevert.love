import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import glamorous from 'glamorous'
import scale from '../utils/scale'
import { headers } from '../utils/typography'

const Background = glamorous.div({
  background: 'white',
  boxShadow: '0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.05)',
  marginBottom: '2px',
})

const Content = glamorous.div({
  margin: '0 auto',
  maxWidth: 960,
  padding: `${scale(0)}px ${scale(0)}px`,
  textAlign: 'center',
})

const Home = glamorous.h1(
  {
    margin: 0,
    marginBottom: `${scale(-4)}px`,
  },
  ...headers.h1
)

const MainLink = glamorous(Link)({
  color: 'rgba(0, 0, 0, 0.8)',
  textDecoration: 'none',
  ':visited': {
    color: 'rgba(0, 0, 0, 0.8)',
  },
})

const And = glamorous.span({
  fontSize: '1.27em',
  color: 'rgba(0, 0, 0, 0.7)',
  verticalAlign: 'bottom',
  margin: '0 -0.1em',
})

const Nav = glamorous.nav({
  marginBottom: 0,
})

const SecondaryLink = glamorous(Link)(
  {
    color: 'rgba(0, 0, 0, 0.8)',
    textDecoration: 'none',
    ':visited': {
      color: 'rgba(0, 0, 0, 0.8)',
    },
    fontFamily: 'Overpass Mono',
    fontWeight: 700,
    borderBottom: '3px double black',
    margin: `0 ${scale(1) / 2}px`,
  },
  headers.h5
)

const Header = ({ children }) => (
  <Headroom>
    <Background>
      <Content>
        <Home>
          <MainLink to="/">
            Anna <And>&</And> Eevert
          </MainLink>
        </Home>
        {children({
          Nav,
          Link: SecondaryLink,
        })}
      </Content>
    </Background>
  </Headroom>
)

export default Header
