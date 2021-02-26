import { css } from '@emotion/react'
import { CSSInterpolation, Interpolation } from '@emotion/serialize'
import { ReactNode, useState } from 'react'
import {
  Spacing,
  Color,
  TextColor,
  BorderRadius,
  theme,
  matchingTextColor,
} from '../theme'

export type BoxProps = {
  children?: ReactNode

  style?: CSSInterpolation

  pad?: Spacing
  padVertical?: Spacing
  padHorizonal?: Spacing
  padLeft?: Spacing
  padRight?: Spacing
  padTop?: Spacing
  padBottom?: Spacing

  flex?: number | boolean

  opacity?: number
  color?: Color
  textColor?: TextColor

  width?: number | string
  maxWidth?: number | string

  height?: number | string
  maxHeight?: number | string

  borderColor?: Color
  shadowColor?: Color
  borderRadius?: BorderRadius

  onPress?(): void | Promise<void>
}

export function Box(props: BoxProps) {
  const style = useBoxStyle(props)

  return (
    <div css={style} onClick={props.onPress}>
      {props.children}
    </div>
  )
}

export function useBoxStyle(props: BoxProps): CSSInterpolation {
  let {
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

    opacity,
    color,
    textColor,

    width,
    maxWidth,
    height,
    maxHeight,

    borderColor,
    borderRadius,

    onPress,
  } = props

  if (!textColor && color) {
    textColor = matchingTextColor(color)
  }

  const boxStyle = css({
    padding: theme.spacing[pad!],
    paddingLeft: theme.spacing[padLeft ?? padHorizonal!],
    paddingRight: theme.spacing[padRight ?? padHorizonal!],
    paddingTop: theme.spacing[padTop ?? padVertical!],
    paddingBottom: theme.spacing[padBottom ?? padVertical!],

    flex: typeof flex == 'number' ? flex : flex == true ? 1 : undefined,

    opacity,
    backgroundColor: theme.color[color!],
    color: theme.textColor[textColor!],

    width,
    maxWidth,
    height,
    maxHeight,

    borderRadius: theme.borderRadius[borderRadius!],
    borderColor: theme.color[borderColor!],
    borderWidth: borderColor ? 1 : 0,
    borderStyle: 'solid',

    cursor: onPress ? 'pointer' : undefined,
  })

  return [boxStyle, style]
}
