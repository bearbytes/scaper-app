import { css } from '@emotion/react'
import React, { useState } from 'react'
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

  const [pending, setPending] = useState(false)

  const onPress = props.onPress
    ? async () => {
        if (pending) return
        setPending(true)
        await Promise.resolve(props.onPress?.())
        setPending(false)
      }
    : undefined

  const buttonStyle = css({
    ':hover': { filter: 'brightness(150%)' },
    transition: 'all 0.2s',
  })

  const pendingStyle = pending
    ? css({
        ':hover': { filter: 'sepia(60%)' },
        filter: 'sepia(60%)',
      })
    : undefined

  return (
    <Row
      alignCenter
      borderRadius="S"
      gap="S"
      padHorizonal="M"
      color="elevated"
      textColor="inverted"
      maxWidth={250}
      {...rowProps}
      style={[buttonStyle, pendingStyle, style]}
      onPress={onPress}
    >
      {icon && <Icon icon={icon} />}
      <p>{text}</p>
    </Row>
  )
}
