import { css } from "styled-components"

export type MixinFlexProps = {
  flex?: number | boolean
}

export const mixinFlex = css<MixinFlexProps>`
  flex: ${({ flex }) => {
    if (flex == null) return undefined
    if (flex == true) return 1
    if (flex == false) return undefined
    return flex
  }}
`