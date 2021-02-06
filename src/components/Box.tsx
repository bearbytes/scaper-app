import { css, SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'
import { Color, Spacing, theme } from '../theme'

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
  textColor?: Color
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
  } = props

  const boxStyle = css({
    padding: theme.spacings[pad],
    paddingLeft: theme.spacings[padLeft ?? padHorizonal],
    paddingRight: theme.spacings[padRight ?? padHorizonal],
    paddingTop: theme.spacings[padTop ?? padVertical],
    paddingBottom: theme.spacings[padBottom ?? padVertical],

    // Flex
    flex: typeof flex == 'number' ? flex : flex == true ? 1 : undefined,

    // Color
    backgroundColor: theme.colors[color],
    color: theme.colors[textColor],
  })

  return <div css={[boxStyle, style]}>{children}</div>
}
