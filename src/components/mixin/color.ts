import { css } from "styled-components";
import { Color } from "../../theme/styled";

export type MixinColorProps = {
  color?: Color
  textColor?: Color
}

export const mixinColor = css<MixinColorProps>`
  background-color: ${({ theme, color }) => {
    if (!color) return undefined
    return theme.colors[color]
  }};

  color: ${({ theme, textColor }) => {
    if (!textColor) return undefined
    return theme.colors[textColor]
  }};
`