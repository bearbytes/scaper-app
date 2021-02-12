import { css } from '@emotion/react'
import React from 'react'
import { IconType } from 'react-icons'
import { Icon } from '../display/Icon'
import { Row, RowProps } from '../layout/FlexBox'

export type ButtonProps = RowProps & {
  icon?: IconType
  text?: string

  disabled?: boolean
}

export function Button(props: ButtonProps) {
  const { icon, text, disabled, style, ...rowProps } = props

  const buttonStyle = css({
    ':hover': { filter: 'brightness(150%)' },
    transition: 'all 0.2s',
  })

  return (
    <Row
      alignCenter
      borderRadius="S"
      gap="S"
      padHorizonal="M"
      color="elevated"
      maxWidth={250}
      {...rowProps}
      style={[buttonStyle, style]}
    >
      {icon && <Icon icon={icon} />}
      <p>{text}</p>
    </Row>
  )
}
