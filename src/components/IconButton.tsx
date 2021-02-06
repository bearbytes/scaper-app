import { Box, BoxProps } from './Box'
import { Icon } from './Icon'
import { IconType } from 'react-icons'
import { Column, Row } from './FlexBox'
import { IconSize } from '../theme'
import { Label } from './Label'

export type IconButtonProps = BoxProps & {
  icon?: IconType
  iconSize?: IconSize
  text?: string

  disabled?: boolean
}

export function IconButton(props: IconButtonProps) {
  const { icon, iconSize, text, disabled, ...boxProps } = props

  return (
    <Column alignCenter color="elevated" borderRadius="M" {...boxProps}>
      {icon && <Icon icon={icon} size={iconSize} />}
      {text && <Label text={text} />}
    </Column>
  )
}
