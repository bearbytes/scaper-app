import React, { forwardRef, ReactNode, Ref } from 'react'
import { IconType } from 'react-icons'
import { Box, BoxProps, useBoxStyle } from '../layout/Box'
import { Row } from '../layout/FlexBox'
import { theme } from '../theme'
import { Label } from '../typography/Label'

export type TextInputProps = BoxProps & {
  value?: string
  onChange?(value: string): void

  type?: 'text' | 'number' | 'date'
  name?: string

  onBlur?(): void
  onFocus?(): void

  icon?: IconType
  prefix?: string
  error?: boolean
  disableSelectOnFocus?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      value,
      onChange,

      type,
      name,

      onBlur,
      onFocus,

      icon: Icon,
      prefix,
      error,
      disableSelectOnFocus,

      ...boxProps
    } = props

    return (
      <Row
        alignCenterVertical
        color="input"
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
          onFocus={e => {
            if (!disableSelectOnFocus) e.currentTarget.select()
            onFocus?.()
          }}
          onBlur={onBlur}
          css={useBoxStyle({ padVertical: 'S', flex: true })}
        />
      </Row>
    )
  },
)
