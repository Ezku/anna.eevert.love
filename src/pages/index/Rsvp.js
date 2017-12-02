import React from 'react'
import glamorous from 'glamorous'

import Content from '../../components/Content'

import hero from './rsvp-hero.jpg'

const Hero = glamorous.img()
const HeroContainer = glamorous.div({
  maxHeight: '512px',
  overflowY: 'hidden',
})

export default function Rsvp() {
  return (
    <div>
      <HeroContainer>
        <Hero src={hero} />
      </HeroContainer>
      <Content>rsvp pls</Content>
    </div>
  )
}
