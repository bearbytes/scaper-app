import { css } from '@emotion/react'
import { CSSInterpolation, CSSObject } from '@emotion/serialize'
import React from 'react'
import { IoCubeOutline } from 'react-icons/io5'
import { Box, BoxProps } from '../layout/Box'
import { theme } from '../theme'

export type LabelProps = BoxProps & {
  text: string

  bold?: boolean
  underline?: boolean
  strikethrough?: boolean

  small?: boolean
  large?: boolean
}
export function Label(props: LabelProps) {
  const {
    text,
    bold,
    underline,
    strikethrough,
    small,
    large,
    style,
    ...boxProps
  } = props

  let fontSize: CSSObject['fontSize']
  if (small) fontSize = theme.fontSize.small
  if (large) fontSize = theme.fontSize.large

  let fontWeight: CSSObject['fontWeight']
  if (bold) fontWeight = 'bold'

  let textDecoration: CSSObject['textDecoration']
  if (underline) textDecoration = 'underline'
  if (strikethrough) textDecoration = 'line-through'

  const labelStyle = css({ fontSize, fontWeight, textDecoration })

  return (
    <Box {...boxProps} style={[labelStyle, style]}>
      {props.text}
    </Box>
  )
}
