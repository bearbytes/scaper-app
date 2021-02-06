import styled from 'styled-components'
import { mixinColor, MixinColorProps } from './mixin/color'
import { mixinFlex, MixinFlexProps } from './mixin/flex'
import { mixinPadding, MixinPaddingProps } from './mixin/padding'

export type BoxProps = MixinColorProps & MixinPaddingProps & MixinFlexProps

export const Box = styled.div<BoxProps>`
  ${mixinColor};
  ${mixinPadding};
  ${mixinFlex};
`
