import { Column, ColumnProps } from '../layout/FlexBox'
import { theme } from '../theme'

export type CardProps = ColumnProps

export function Card(props: CardProps) {
  const { style, ...columnProps } = props
  return (
    <Column
      color="elevated"
      pad="L"
      {...columnProps}
      style={[{ color: theme.textColor.inverted }, style]}
    />
  )
}
