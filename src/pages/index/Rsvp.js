import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import scale from '../../utils/scale'
import { narrow, normal } from '../../utils/breakpoints'
import { headers, highlightFontFamily } from '../../utils/typography'
import Lede from '../../components/Lede'

const ButtonLink = glamorous.a(
  {
    fontFamily: highlightFontFamily.join(', '),
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
  },
  headers.h5
)

const RsvpColumn = glamorous(Col)({
  textAlign: 'center',
})

export default function Rsvp() {
  return (
    <Container>
      <Lede>
        Oletko saapumassa päiväosuuteen vai iltaosuuteen?<br />(Tarkista kutsusta, jos et ole varma.
        :)
      </Lede>
      <Row justifyContent="center">
        <RsvpColumn span={{ sm: 6 / 12, md: 4 / 12 }}>
          <ButtonLink href="http://paiva.rsvp.anna.eevert.love" target="_blank">
            Saavun päiväosuuteen klo 14:00
          </ButtonLink>
        </RsvpColumn>
        <RsvpColumn span={{ sm: 6 / 12, md: 4 / 12 }}>
          <ButtonLink href="http://ilta.rsvp.anna.eevert.love" target="_blank">
            Saavun iltaosuuteen klo 19:00
          </ButtonLink>
        </RsvpColumn>
      </Row>
    </Container>
  )
}
