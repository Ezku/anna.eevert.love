import React from 'react'
import { Container, Row, Col } from 'glamorous-grid'

export default function SingleColumnContent({ children }) {
  return (
    <Container>
      <Row justifyContent="center">
        <Col span={{ md: 8 / 12 }}>{children}</Col>
      </Row>
    </Container>
  )
}
