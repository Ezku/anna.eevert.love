import React from 'react'
import glamorous from 'glamorous'

import Content from '../../components/Content'
import scale from '../../utils/scale'

import hero from './rsvp-hero.jpg'

const HeroContainer = glamorous.div({
  minHeight: '256px',
  height: '50vw',
  maxHeight: '512px',
  background: `url(${hero}) 50% 50% no-repeat`,
  backgroundSize: 'cover',
  backgroundClip: 'content-box',
  borderBottom: '3px double black',
})

const Header = glamorous.header({
  textAlign: 'center',
  marginTop: `-${3 + scale(4 + 2 + 1) / 2}px`,
})

const H2 = glamorous.h2({
  display: 'inline-block',
  fontSize: `${scale(4)}px`,
  lineHeight: `${scale(4)}px`,
  background: 'white',
  padding: `${scale(1)}px ${scale(0)}px`,
  border: '3px double black',
})

export default function Rsvp() {
  return (
    <section>
      <HeroContainer />
      <Header>
        <H2>RSVP</H2>
      </Header>
    </section>
  )
}
