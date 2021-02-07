import { css } from '@emotion/react'
import React from 'react'
import { Box, BoxProps } from '../layout/Box'
import { FontSize, theme, Theme } from '../theme'

export type LabelProps = BoxProps & {
  text: string

  small?: boolean
  large?: boolean
}
export function Label(props: LabelProps) {
  const { text, small, large, style, ...boxProps } = props

  let fontSize: string
  if (small) fontSize = theme.fontSize.small
  if (large) fontSize = theme.fontSize.large

  const labelStyle = css({ fontSize })

  return (
    <Box {...boxProps} style={[labelStyle, style]}>
      {props.text}
    </Box>
  )
}
