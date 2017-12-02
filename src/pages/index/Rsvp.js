import React from 'react'
import glamorous from 'glamorous'

import Content from '../../components/Content'

import hero from './rsvp-hero.jpg'

const HeroContainer = glamorous.div({
  minHeight: '256px',
  height: '50vw',
  maxHeight: '512px',
  background: `url(${hero}) 50% 50% no-repeat`,
  backgroundSize: 'cover',
})

export default function Rsvp() {
  return (
    <div>
      <HeroContainer />
      <Content>rsvp pls</Content>
    </div>
  )
}
