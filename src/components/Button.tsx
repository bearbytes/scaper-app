import { Box, BoxProps } from './Box'
import { theme } from '../theme'

export type ButtonProps = BoxProps & {
  icon?: string
  text?: string

  disabled?: boolean
}

export function Button(props: ButtonProps) {
  const { icon, text, disabled, ...boxProps } = props
  return <Box {...boxProps} borderRadius="S" />
}
