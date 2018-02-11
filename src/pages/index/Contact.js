import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import scale from '../../utils/scale'
import { headers } from '../../utils/typography'

const H3 = glamorous.h3(
  {
    display: 'block',
    padding: `${scale(-3)}px ${scale(-5)}px`,
    borderBottom: '3px double black',
    marginBottom: `${scale(0)}px`,
  },
  headers.h3
)

const ContactCol = glamorous(Col)({
  marginBottom: `${scale(2)}px`,
})

const ContactBox = glamorous.div({
  padding: `${scale(0)}px ${scale(0)}px`,
  height: '100%',
  background: 'white',
  color: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '3px',
  boxShadow: '0 5px 15px 0 hsla(0,0%,4%,.9), 0 0 15px 0 hsla(0,0%,4%,.45)',
})

const P = glamorous.p({
  marginBottom: `${scale(0)}px`,
})

const DL = glamorous.dl({
  marginBottom: `${scale(0)}px`,
})

const DT = glamorous.dt({
  fontWeight: 'bold',
  display: 'inline-block',
})

const DD = glamorous.dd({
  margin: 0,
  textIndent: '2ch',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
})

const A = glamorous.a({})
const Mailto = ({ children }) => <A href={`mailto:${children}`}>{children}</A>

export default function Contact({ Footer }) {
  return (
    <Container>
      <Row justifyContent="center">
        <ContactCol span={{ sm: 10 / 12, md: 6 / 12, lg: 5 / 12 }}>
          <ContactBox>
            <H3>Hääpari</H3>
            <P>
              Ennakkotiedustelut järjestelyistä, lahjoista, aikataulusta jne, ellet halua yllättää.
            </P>
            <DL>
              <DT>Anna</DT>
              <DD>
                <Mailto>anna.m.torronen@gmail.com</Mailto>
              </DD>
              <DD>050-5335-993</DD>
            </DL>
            <DL>
              <DT>Eevert</DT>
              <DD>
                <Mailto>eevert.saukkokoski@gmail.com</Mailto>
              </DD>
              <DD>040-508-2297</DD>
            </DL>
          </ContactBox>
        </ContactCol>
        <ContactCol span={{ sm: 10 / 12, md: 6 / 12, lg: 5 / 12 }}>
          <ContactBox>
            <H3>Hääesikunta</H3>
            <P>Kun haluat yllättää, tai jos hääpäivänä iskee hätä. :)</P>
            <DL>
              <DT>Best Lady</DT>
              <DD>
                <Mailto>anna.torvinen@gmail.com</Mailto>
              </DD>
            </DL>
            <DL>
              <DT>Best Man</DT>
              <DD>
                <Mailto>otso.hannula@gmail.com</Mailto>
              </DD>
            </DL>
          </ContactBox>
        </ContactCol>
      </Row>
    </Container>
  )
}
