import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import scale from '../../utils/scale'
import { Section, H3, P, A, DL, DD, DT } from '../../components/Typography'

const FullWidthH3 = glamorous(H3)({
  display: 'block',
  borderBottom: '3px double black',
})

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

const Mailto = ({ children }) => <A href={`mailto:${children}`}>{children}</A>

const ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
}

const EllipsisDD = glamorous(DD)(ellipsis)

export default function Contact({ Footer }) {
  return (
    <Container>
      <Row justifyContent="center">
        <ContactCol span={{ sm: 10 / 12, md: 6 / 12, lg: 5 / 12 }}>
          <ContactBox>
            <FullWidthH3>Hääpari</FullWidthH3>
            <P>
              Ennakkotiedustelut järjestelyistä, lahjoista, aikataulusta jne, ellet halua yllättää.
            </P>
            <DL>
              <DT>Anna</DT>
              <EllipsisDD>
                <Mailto>anna.m.torronen@gmail.com</Mailto>
              </EllipsisDD>
              <DD>050-5335-993</DD>
            </DL>
            <DL>
              <DT>Eevert</DT>
              <EllipsisDD>
                <Mailto>eevert.saukkokoski@gmail.com</Mailto>
              </EllipsisDD>
              <DD>040-508-2297</DD>
            </DL>
          </ContactBox>
        </ContactCol>
        <ContactCol span={{ sm: 10 / 12, md: 6 / 12, lg: 5 / 12 }}>
          <ContactBox>
            <FullWidthH3>Hääesikunta</FullWidthH3>
            <P>Kun haluat yllättää, tai jos hääpäivänä iskee hätä. :)</P>
            <DL>
              <DT>Best Lady</DT>
              <EllipsisDD>
                <Mailto>anna.torvinen@gmail.com</Mailto>
              </EllipsisDD>
            </DL>
            <DL>
              <DT>Best Man</DT>
              <EllipsisDD>
                <Mailto>otso.hannula@gmail.com</Mailto>
              </EllipsisDD>
            </DL>
          </ContactBox>
        </ContactCol>
      </Row>
    </Container>
  )
}
