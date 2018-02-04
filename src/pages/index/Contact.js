import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import Content from '../../components/Content'
import scale from '../../utils/scale'
import { headers } from '../../utils/typography'

const Footer = glamorous.footer({})

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
  ...headers.h2
)

const Section = glamorous.section({
  color: '#f8f9fa',
  letterSpacing: '2px',
})

const H3 = glamorous.h3(
  {
    display: 'block',
    padding: `${scale(-3)}px ${scale(-5)}px`,
    borderBottom: '3px double black',
    marginBottom: `${scale(0)}px`,
  },
  headers.h3
)

const ContactColumn = glamorous(Col)({
  margin: `${scale(0)}px ${scale(0)}px`,
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
})

const A = glamorous.a({})
const Mailto = ({ children }) => <A href={`mailto:${children}`}>{children}</A>

export default function Contact() {
  return (
    <Footer id="yhteystiedot">
      <Header>
        <H2>Yhteystiedot</H2>
      </Header>
      <Background>
        <Content>
          <Container>
            <Row justifyContent="center">
              <ContactColumn span={{ sm: 10 / 12, md: 5 / 12 }}>
                <H3>Hääpari</H3>
                <P>
                  Ennakkotiedustelut järjestelyistä, lahjoista, aikataulusta jne, ellet halua
                  yllättää.
                </P>
                <DL>
                  <DT>Anna</DT>
                  <DD>
                    <Mailto>anna.m.torronen@gmail.com</Mailto>
                  </DD>
                  <DD>050-533-5993</DD>
                </DL>
                <DL>
                  <DT>Eevert</DT>
                  <DD>
                    <Mailto>anna.m.torronen@gmail.com</Mailto>
                  </DD>
                  <DD>040-508-2297</DD>
                </DL>
              </ContactColumn>
              <ContactColumn span={{ sm: 10 / 12, md: 5 / 12 }}>
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
              </ContactColumn>
            </Row>
          </Container>
        </Content>
      </Background>
    </Footer>
  )
}
