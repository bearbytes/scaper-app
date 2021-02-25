import React, { forwardRef, Ref } from 'react'
import { BoxProps, useBoxStyle } from '../layout/Box'
import { theme } from '../theme'

export type NumberInputProps = Omit<TextInputProps, 'value' | 'onChange'> & {
  value?: number
  onChange?(value: number): void
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => (
    <TextInput
      ref={ref}
      {...props}
      value={props.value?.toString()}
      onChange={text => props.onChange?.(parseFloat(text))}
      type="number"
    />
  ),
)

export type TextInputProps = BoxProps & {
  value?: string
  onChange?(value: string): void

  type?: 'text' | 'number'
  name?: string

  error?: boolean
  disableAutoFocus?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      type,
      name,
      value,
      onChange,
      error,
      disableAutoFocus,
      ...boxProps
    } = props

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        onFocus={disableAutoFocus ? undefined : e => e.currentTarget.select()}
        css={[
          useBoxStyle({
            pad: 'S',
            color: 'semiTransparent',
            borderRadius: 'S',
            ...boxProps,
          }),
          {
            fontSize: '1em',
            outline: 0,
            borderWidth: 2,
            borderColor: 'transparent',
            ':focus': {
              borderColor: theme.color.focus,
            },
          },
          error && {
            borderColor: theme.color.error,
          },
        ]}
      />
    )
  },
)
