import { BoxProps } from '../layout/Box'

export type TextInputProps = {
  value: string
  onChange(value: string): void
}

export function TextInput(props: TextInputProps) {
  const { value, onChange } = props

  return <input value={value} onChange={e => onChange(e.currentTarget.value)} />
}
