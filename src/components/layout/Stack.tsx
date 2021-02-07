import React from 'react'
import { Box, BoxProps } from './Box'

type StackProps = BoxProps

export function Stack(props: StackProps) {
  const { style, children, ...boxProps } = props
  return (
    <Box {...boxProps} style={[{ position: 'relative' }, style]}>
      {React.Children.map(children, child => (
        <div css={{ position: 'absolute' }}>{child}</div>
      ))}
    </Box>
  )
}
