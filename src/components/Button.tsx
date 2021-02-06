import { BoxProps } from './Box'
import { Icon } from './Icon'
import { IconType } from 'react-icons'
import { Row } from './FlexBox'

export type ButtonProps = BoxProps & {
  icon?: IconType
  text?: string

  disabled?: boolean
}

export function Button(props: ButtonProps) {
  const { icon, text, disabled, ...boxProps } = props

  return (
    <Row
      alignCenter
      borderRadius="S"
      gap="S"
      padHorizonal="M"
      color="elevated"
      maxWidth={250}
      {...boxProps}
    >
      {icon && <Icon icon={icon} />}
      <p>{text}</p>
    </Row>
  )
}
