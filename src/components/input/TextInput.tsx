import React, { forwardRef, Ref } from 'react'
import { Box, BoxProps, useBoxStyle } from '../layout/Box'
import { Row } from '../layout/FlexBox'
import { theme } from '../theme'
import { Label } from '../typography/Label'

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
  onBlur?(): void

  type?: 'text' | 'number'
  name?: string

  prefix?: string
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
      onBlur,
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
