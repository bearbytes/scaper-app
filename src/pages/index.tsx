import React from 'react'
import { Box, Column, Row } from '../components'

export default function Index() {
  return (
    <Column flex color="background" gap="S">
      <Row alignLeft color="primary" gap="S">
        <Box color="highlight">Box1</Box>
        <Box color="highlight">Box2</Box>
      </Row>
      <Row alignRight color="primary" gap="S">
        <Box color="highlight">Box1</Box>
        <Box color="highlight">Box2</Box>
      </Row>
      <Row alignCenter color="primary" gap="S">
        <Box color="highlight">Box1</Box>
        <Box color="highlight">Box2</Box>
      </Row>
    </Column>
  )
}
