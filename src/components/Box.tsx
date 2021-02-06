import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'
import { Color, Spacing, TextColor, theme } from '../theme'

export type BoxProps = {
  children?: ReactNode

  style?: SerializedStyles

  pad?: Spacing
  padVertical?: Spacing
  padHorizonal?: Spacing
  padLeft?: Spacing
  padRight?: Spacing
  padTop?: Spacing
  padBottom?: Spacing

  flex?: number | boolean

  color?: Color
  textColor?: TextColor

  width?: number | string
  height?: number | string
}

export function Box(props: BoxProps) {
  const {
    children,
    style,

    pad,
    padVertical,
    padHorizonal,
    padLeft,
    padRight,
    padTop,
    padBottom,

    flex,

    color,
    textColor,

    width,
    height,
  } = props

  const boxStyle = css({
    padding: theme.spacings[pad],
    paddingLeft: theme.spacings[padLeft ?? padHorizonal],
    paddingRight: theme.spacings[padRight ?? padHorizonal],
    paddingTop: theme.spacings[padTop ?? padVertical],
    paddingBottom: theme.spacings[padBottom ?? padVertical],

    flex: typeof flex == 'number' ? flex : flex == true ? 1 : undefined,

    backgroundColor: theme.colors[color],
    color: theme.textColors[textColor],

    width,
    height,
  })

  return <div css={[boxStyle, style]}>{children}</div>
}
