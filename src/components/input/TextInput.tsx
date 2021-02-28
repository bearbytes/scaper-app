import React, { forwardRef, ReactNode, Ref } from 'react'
import { IconType } from 'react-icons'
import { Box, BoxProps, useBoxStyle } from '../layout/Box'
import { Row } from '../layout/FlexBox'
import { theme } from '../theme'
import { Label } from '../typography/Label'

export type TextInputProps = BoxProps & {
  value?: string
  onChange?(value: string): void
  onBlur?(): void

  type?: 'text' | 'number' | 'date'
  name?: string

  icon?: IconType
  prefix?: string
  error?: boolean
  disableAutoFocus?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      onBlur,

      type,
      name,

      icon: Icon,
      prefix,
      error,
      disableAutoFocus,

      ...boxProps
    } = props

    return (
      <Row
        alignCenterVertical
        color="semiTransparent"
        gap="none"
        borderRadius="S"
        padLeft="S"
        borderColor={error ? 'error' : 'transparent'}
        {...boxProps}
        style={{
          borderWidth: 2,
          ':focus-within': {
            borderColor: theme.color.focus,
          },
        }}
      >
        {Icon && <Icon style={{ minWidth: '1em' }} />}
        {prefix && <Label bold text={prefix} />}
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={e => onChange?.(e.currentTarget.value)}
          onFocus={disableAutoFocus ? undefined : e => e.currentTarget.select()}
          onBlur={onBlur}
          css={useBoxStyle({ padVertical: 'S', flex: true })}
        />
      </Row>
    )
  },
)
