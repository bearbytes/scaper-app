import React from 'react'
import { Box, BoxProps } from '../layout/Box'

export type LabelProps = BoxProps & {
  text: string
}

export function Label(props: LabelProps) {
  const { text, ...boxProps } = props
  return <Box {...boxProps}>{props.text}</Box>
}
