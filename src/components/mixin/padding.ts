import { css } from "styled-components"
import { Spacing } from "../../theme/styled"

export type MixinPaddingProps = {
  pad?: Spacing

  padVertical?: Spacing
  padHorizonal?: Spacing

  padLeft?: Spacing
  padRight?: Spacing
  padTop?: Spacing
  padBottom?: Spacing
}

export const mixinPadding = css<MixinPaddingProps>`
  padding: ${({ theme, pad }) => {
    if (pad == null) return undefined
    return `${theme.spacings[pad]}px`
  }};

  padding-left: ${({ theme, padLeft, padHorizonal }) => {
    if (padLeft == null && padHorizonal == null) return
    return `${theme.spacings[padLeft ?? padHorizonal]}px`
  }};

  padding-right: ${({ theme, padRight, padHorizonal }) => {
    if (padRight == null && padHorizonal == null) return
    return `${theme.spacings[padRight ?? padHorizonal]}px`
  }};

  padding-top: ${({ theme, padTop, padVertical }) => {
    if (padTop == null && padVertical == null) return
    return `${theme.spacings[padTop ?? padVertical]}px`
  }};

  padding-bottom: ${({ theme, padBottom, padVertical }) => {
    if (padBottom == null && padVertical == null) return
    return `${theme.spacings[padBottom ?? padVertical]}px`
  }};
`