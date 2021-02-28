import { css } from '@emotion/react'
import { CSSObject } from '@emotion/serialize'
import React from 'react'
import { Box, BoxProps } from '../layout/Box'
import { theme } from '../theme'
import Link from 'next/link'

export type LabelProps = BoxProps & {
  text: string

  title?: boolean
  bold?: boolean
  underline?: boolean
  strikethrough?: boolean

  xsmall?: boolean
  small?: boolean
  large?: boolean

  linkTo?: string

  alignLeft?: boolean
  alignRight?: boolean
  alignCenter?: boolean
}
export function Label(props: LabelProps) {
  const {
    text,

    title,
    bold,
    underline,
    strikethrough,

    xsmall,
    small,
    large,

    linkTo,

    alignLeft,
    alignCenter,
    alignRight,

    style,
    ...boxProps
  } = props

  let fontSize: CSSObject['fontSize']
  if (xsmall) fontSize = theme.fontSize.xsmall
  else if (small) fontSize = theme.fontSize.small
  else if (large) fontSize = theme.fontSize.large

  let fontWeight: CSSObject['fontWeight']
  if (bold) fontWeight = 'bold'

  let textDecoration: CSSObject['textDecoration']
  if (strikethrough) textDecoration = 'line-through'
  else if (underline) textDecoration = 'underline'

  let textAlign: CSSObject['textAlign']
  if (alignLeft) textAlign = 'left'
  else if (alignCenter) textAlign = 'center'
  else if (alignRight) textAlign = 'right'

  let fontFamily: CSSObject['fontFamily']
  if (title) fontFamily = 'Lobster Two'

  const labelStyle = css({
    fontSize,
    fontWeight,
    textDecoration,
    textAlign,
    fontFamily,
    lineHeight: '1em',
  })

  return (
    <Box {...boxProps} style={[labelStyle, style]}>
      {linkTo ? (
        <Link href={linkTo}>
          <a>{text}</a>
        </Link>
      ) : (
        text
      )}
    </Box>
  )
}
