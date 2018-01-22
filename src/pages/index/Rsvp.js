import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import Content from '../../components/Content'
import scale from '../../utils/scale'
import { narrow, normal } from '../../utils/breakpoints'
import { headers } from '../../utils/typography'

import hero from './rsvp-hero-color.jpg'

const Section = glamorous.section(
  {
    minHeight: '100vh',
    paddingBottom: `${scale(5)}px`,
    // Match Headroom elementheight
    paddingTop: '116px',
    marginTop: '-116px',
  },
  narrow(bp => ({
    paddingTop: '128px',
    marginTop: '-128px',
  })),
  normal(bp => ({
    paddingTop: '144px',
    marginTop: '-144px',
  }))
)

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

const H2 = glamorous.h2(
  {
    display: 'inline-block',
    background: 'white',
    padding: `${scale(1)}px ${scale(0)}px`,
    border: '3px double black',
  },
  ...headers.h2
)

const Lede = glamorous.p({
  marginBottom: `${scale(0)}px`,
})

const ButtonLink = glamorous.a({
  display: 'inline-block',
  padding: `${scale(2)}px ${scale(1)}px`,
  margin: `${scale(0)}px ${scale(0)}px`,
  background: 'white',
  textDecoration: 'none',
  borderBottom: '3px double black',
  fontWeight: 'bold',
  color: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '3px',
  boxShadow: '0 2px 3px 0 hsla(0,0%,4%,.1), 0 0 5px 0 hsla(0,0%,4%,.05)',
  transition: 'box-shadow ease-out 0.166s',
  ':hover': {
    boxShadow: '0 2px 6px 0 hsla(0,0%,4%,.2), 0 0 10px 0 hsla(0,0%,4%,.1)',
  },
  ':visited, :active, :focus': {
    color: 'rgba(0, 0, 0, 0.8)',
  },
})

const RsvpColumn = glamorous(Col)({
  textAlign: 'center',
})

export default function Rsvp() {
  return (
    <Section id="rsvp">
      <HeroContainer />
      <Header>
        <H2>RSVP</H2>
      </Header>
      <Container>
        <Row justifyContent="center">
          <RsvpColumn span={{ xs: 1, md: 8 / 12, lg: 6 / 12 }}>
            <Lede>
              Oletko saapumassa päiväjuhlaan (alkaen klo 14) vai iltajuhlaan (alkaen klo 19)?
            </Lede>
          </RsvpColumn>
        </Row>
        <Row justifyContent="center">
          <RsvpColumn span={{ sm: 6 / 12, md: 5 / 12 }}>
            <ButtonLink href="http://paiva.rsvp.anna.eevert.love">
              Ilmoittaudun päiväjuhlaan
            </ButtonLink>
          </RsvpColumn>
          <RsvpColumn span={{ sm: 6 / 12, md: 5 / 12 }}>
            <ButtonLink href="http://ilta.rsvp.anna.eevert.love">
              Ilmoittaudun iltajuhlaan
            </ButtonLink>
          </RsvpColumn>
        </Row>
      </Container>
    </Section>
  )
}
