import React, { forwardRef } from 'react'
import { TextInput, TextInputProps } from './TextInput'

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
