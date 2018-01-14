import React from 'react'
import glamorous from 'glamorous'

import Content from '../../components/Content'
import scale from '../../utils/scale'
import { headers } from '../../utils/typography'

const Footer = glamorous.footer({})

const Background = glamorous.div({
  backgroundColor: 'rgba(0,0,0,0.88)',
  borderTop: '3px double white',
  paddingTop: `${scale(9) / 2 - 3}px`,
  minHeight: '100vh',
})

const Header = glamorous.header({
  textAlign: 'center',
  marginBottom: `-${scale(9) / 2 - 3}px`,
})

const H2 = glamorous.h2({
  display: 'inline-block',
  background: 'white',
  padding: `${scale(1)}px ${scale(0)}px`,
  border: '3px double black',
}, ...headers.h2)

const Section = glamorous.section({
  color: '#f8f9fa',
  letterSpacing: '2px',
})

export default function Contact() {
  return (
    <Footer id="yhteystiedot">
      <Header>
        <H2>Yhteystiedot</H2>
      </Header>
      <Background>
        <Content />
      </Background>
    </Footer>
  )
}
