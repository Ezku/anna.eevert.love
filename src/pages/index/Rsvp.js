import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import scale from '../../utils/scale'
import { narrow, normal } from '../../utils/breakpoints'
import { headers } from '../../utils/typography'

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
          <ButtonLink href="http://ilta.rsvp.anna.eevert.love">Ilmoittaudun iltajuhlaan</ButtonLink>
        </RsvpColumn>
      </Row>
    </Container>
  )
}
