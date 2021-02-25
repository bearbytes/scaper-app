import { css } from '@emotion/react'
import { Spacing, theme } from '../theme'
import { Box, BoxProps } from './Box'

export type FlexBoxProps = BoxProps & {
  flexDirection: 'row' | 'column'

  alignCenter?: boolean
  alignLeft?: boolean
  alignRight?: boolean
  alignCenterVertical?: boolean
  alignTop?: boolean
  alignBottom?: boolean
  alignCenterHorizontal?: boolean

  spaceBetween?: boolean
  spaceEvenly?: boolean

  gap?: Spacing
}

function FlexBox(props: FlexBoxProps) {
  const {
    flexDirection,

    alignCenter,
    alignLeft,
    alignRight,
    alignCenterVertical,
    alignTop,
    alignBottom,
    alignCenterHorizontal,

    spaceBetween,
    spaceEvenly,

    gap = 'M',
    ...boxProps
  } = props

  let alignHorizontal: string | undefined
  if (alignCenter || alignCenterHorizontal) alignHorizontal = 'center'
  else if (alignLeft) alignHorizontal = 'flex-start'
  else if (alignRight) alignHorizontal = 'flex-end'

  let alignVertical: string | undefined
  if (alignCenter || alignCenterVertical) alignVertical = 'center'
  else if (alignTop) alignVertical = 'flex-start'
  else if (alignBottom) alignVertical = 'flex-end'

  let justifyContent: string | undefined
  if (spaceBetween) justifyContent = 'space-between'
  else if (spaceEvenly) justifyContent = 'space-evenly'
  else if (flexDirection == 'row') justifyContent = alignHorizontal
  else justifyContent = alignVertical

  let alignItems: string | undefined
  if (flexDirection == 'row') alignItems = alignVertical
  else alignItems = alignHorizontal

  const flexBoxStyle = css({
    display: 'flex',
    flexDirection,

    justifyContent,
    alignItems,

    gap: gap ? theme.spacing[gap] : undefined,
  })

  return <Box {...boxProps} style={[flexBoxStyle, props.style]} />
}

export type RowProps = Omit<FlexBoxProps, 'flexDirection'>
export function Row(props: RowProps) {
  return <FlexBox {...props} flexDirection="row" />
}

export type ColumnProps = Omit<FlexBoxProps, 'flexDirection'>
export function Column(props: ColumnProps) {
  return <FlexBox {...props} flexDirection="column" />
}
