import React from 'react'
import glamorous from 'glamorous'

import scale from '../utils/scale'
import { narrow, normal } from '../utils/breakpoints'
import { headers } from '../utils/typography'

const Section = glamorous.section({
  minHeight: '100vh',
  paddingBottom: `${scale(5)}px`,
})

const HeroContainer = glamorous.div(
  {
    minHeight: '256px',
    height: '50vw',
    maxHeight: '512px',
    backgroundSize: 'cover',
    backgroundClip: 'content-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 35%',
    borderBottom: '3px double black',
  },
  ({ hero }) => ({
    backgroundImage: `url(${hero})`,
  })
)

const Header = glamorous.header({
  textAlign: 'center',
  marginTop: `-${3 + scale(4 + 2 + 1) / 2}px`,
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

export default function HeroSection(props) {
  const { children, header, hero, ...otherProps } = props
  return (
    <Section {...otherProps}>
      <HeroContainer hero={hero} />
      <Header>
        <H2>{header}</H2>
      </Header>
      {children}
    </Section>
  )
}
