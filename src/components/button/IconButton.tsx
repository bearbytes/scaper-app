import React from 'react'
import { IconType } from 'react-icons'
import { IconSize } from '../theme'
import { Icon } from '../display/Icon'
import { Column, ColumnProps } from '../layout/FlexBox'
import { Label } from '../typography/Label'
import { css } from '@emotion/react'

export type IconButtonProps = ColumnProps & {
  icon?: IconType
  iconSize?: IconSize
  text?: string

  disabled?: boolean
}

export function IconButton(props: IconButtonProps) {
  const { icon, iconSize, text, disabled, style, ...columnProps } = props

  const buttonStyle = css({
    ':hover': { filter: 'brightness(150%)' },
    transition: 'all 0.2s',
  })

  return (
    <Column
      alignCenter
      color="elevated"
      textColor="inverted"
      {...columnProps}
      style={[buttonStyle, style]}
    >
      {icon && <Icon icon={icon} size={iconSize} />}
      {text && <Label text={text} />}
    </Column>
  )
}
