import styled from 'styled-components'
import { Spacing } from '../theme/styled'
import { Box, BoxProps } from './Box'

type MixinAlignProps = {
  alignLeft?: boolean
  alignRight?: boolean
  alignCenter?: boolean
}

export type FlexBoxProps = BoxProps & MixinAlignProps & { gap?: Spacing }

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;

  gap: ${({ theme, gap }) => {
    if (gap == null) return undefined
    return `${theme.spacings[gap]}px`
  }};
`

export const Row = styled(FlexBox)`
  flex-direction: row;

  justify-content: ${({ alignLeft, alignRight, alignCenter }) => {
    if (alignLeft) return 'flex-start'
    if (alignRight) return 'flex-end'
    if (alignCenter) return 'center'
    return undefined
  }};
`

export const Column = styled(FlexBox)`
  flex-direction: column;
`
