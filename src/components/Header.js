import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import glamorous from 'glamorous'

const Background = glamorous.div({
  background: 'rebeccapurple',
  marginBottom: '1.45rem',
})

const Content = glamorous.div({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
})

const Home = glamorous.h1({
  margin: 0,
})

const Header = () => (
  <Headroom>
    <Background>
      <Content>
        <Home>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Gatsby
          </Link>
        </Home>
      </Content>
    </Background>
  </Headroom>
)

export default Header
