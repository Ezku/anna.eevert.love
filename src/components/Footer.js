import React from 'react'
import glamorous from 'glamorous'

import Content from './Content'

import scale from '../utils/scale'
import { headers } from '../utils/typography'

const Background = glamorous.div({
  backgroundColor: '#212121',
  borderTop: '3px double white',
  paddingTop: `${scale(9) / 2 - 3}px`,
  minHeight: '100vh',
})

const Header = glamorous.header({
  textAlign: 'center',
  marginBottom: `-${scale(9) / 2 - 3}px`,
})

const H2 = glamorous.h2(
  {
    display: 'inline-block',
    background: 'white',
    padding: `${scale(1)}px ${scale(0)}px`,
    border: '3px double black',
  },
  headers.h2
)

export default function Footer(props) {
  const { header, children, ...otherProps } = props
  return (
    <footer {...otherProps}>
      <Header>
        <H2>{header}</H2>
      </Header>
      <Background>
        <Content>{children}</Content>
      </Background>
    </footer>
  )
}
