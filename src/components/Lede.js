import React from 'react'
import glamorous from 'glamorous'
import { Container, Row, Col } from 'glamorous-grid'

import scale from '../utils/scale'

const P = glamorous.p({
  marginBottom: `${scale(0)}px`,
  textAlign: 'center',
})

export default function Lede({ children }) {
  return (
    <Row justifyContent="center">
      <Col span={{ xs: 1, md: 8 / 12, lg: 6 / 12 }}>
        <P>{children}</P>
      </Col>
    </Row>
  )
}
