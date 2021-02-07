import React from 'react'
import { IconType } from 'react-icons'
import { IconSize } from '../theme'
import { Icon } from '../display/Icon'
import { BoxProps } from '../layout/Box'
import { Column } from '../layout/FlexBox'
import { Label } from '../typography/Label'

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
