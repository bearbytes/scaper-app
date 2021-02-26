import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Column, ColumnProps } from '../layout/FlexBox'

export type ListProps<T> = ColumnProps & {
  items: T[]
  renderItem: (value: T) => ReactNode
  keySelector?: (value: T) => string | number
}

export function List<T>(props: ListProps<T>) {
  const { items, renderItem, keySelector, ...columnProps } = props

  return (
    <Column {...columnProps}>
      {items.map((row, index) => (
        <Box key={keySelector?.(row) ?? index}>{renderItem(row)}</Box>
      ))}
    </Column>
  )
}
