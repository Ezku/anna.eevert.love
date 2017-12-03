import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import glamorous from 'glamorous'
import scale from '../utils/scale'

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

const Home = glamorous.h1({
  margin: 0,
  fontSize: '1rem',
})

const MainLink = glamorous(Link)({
  color: '#28a745',
  textDecoration: 'none',
  ':visited': {
    color: '#28a745',
  },
  fontSize: `${scale(2)}px`,
  lineHeight: `${scale(3)}px`,
})

const Nav = glamorous.nav({
  marginBottom: `-${scale(1) - 1}px`,
})

const SecondaryLink = glamorous(Link)({
  color: 'rgba(0, 0, 0, 0.8)',
  textDecoration: 'none',
  ':visited': {
    color: 'rgba(0, 0, 0, 0.8)',
  },
  fontFamily: 'Overpass Mono',
  fontWeight: 700,
  borderBottom: '3px double black',
  fontSize: `${scale(1)}px`,
  lineHeight: `${scale(3)}px`,
  margin: `0 ${scale(1) / 2}px`,
})

const Header = () => (
  <Headroom>
    <Background>
      <Content>
        <Home>
          <MainLink to="/">
            anna <small>&#x2764;</small> eevert
          </MainLink>
        </Home>
        <Nav>
          <SecondaryLink to="/#rsvp">RSVP</SecondaryLink>
          <SecondaryLink to="/#yhteystiedot">Yhteystiedot</SecondaryLink>
        </Nav>
      </Content>
    </Background>
  </Headroom>
)

export default Header
