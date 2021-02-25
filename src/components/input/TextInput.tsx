import { BoxProps, useBoxStyle } from '../layout/Box'
import { theme } from '../theme'

export type TextInputProps = BoxProps & {
  value: string
  onChange(value: string): void
}

export function TextInput(props: TextInputProps) {
  const { value, onChange, ...boxProps } = props

  return (
    <input
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
          borderWidth: 1,
          borderColor: 'transparent',
          ':focus': {
            borderColor: theme.color.elevated,
          },
        },
      ]}
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  )
}
