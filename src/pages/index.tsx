import { Box, Column, Label, Row } from '@components'
import { FaBeer } from 'react-icons/fa'
import { Button } from '../components/Button'

export default function Index() {
  return (
    <Row>
      <Button icon={FaBeer} text="ButtonText" />
    </Row>
  )
}
