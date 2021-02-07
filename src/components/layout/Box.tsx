import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'
import { Spacing, Color, TextColor, BorderRadius, theme } from '../theme'

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
  maxWidth?: number | string

  height?: number | string
  maxHeight?: number | string

  borderRadius?: BorderRadius

  onPress?(): void
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
    maxWidth,
    height,
    maxHeight,

    borderRadius,

    onPress,
  } = props

  const boxStyle = css({
    padding: theme.spacing[pad],
    paddingLeft: theme.spacing[padLeft ?? padHorizonal],
    paddingRight: theme.spacing[padRight ?? padHorizonal],
    paddingTop: theme.spacing[padTop ?? padVertical],
    paddingBottom: theme.spacing[padBottom ?? padVertical],

    flex: typeof flex == 'number' ? flex : flex == true ? 1 : undefined,

    backgroundColor: theme.color[color],
    color: theme.textColor[textColor],

    width,
    maxWidth,
    height,
    maxHeight,

    borderRadius: theme.borderRadius[borderRadius],
  })

  return (
    <div css={[boxStyle, style]} onClick={props.onPress}>
      {children}
    </div>
  )
}
