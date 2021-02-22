import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Column, ColumnProps } from '../layout/FlexBox'

export type ListProps<T> = ColumnProps & {
  rows: T[]
  renderRow: (value: T) => ReactNode
  keySelector?: (value: T) => string | number
}

export function List<T>(props: ListProps<T>) {
  const { rows, renderRow, keySelector, ...columnProps } = props

  return (
    <Column {...columnProps}>
      {rows.map((row, index) => (
        <Box key={keySelector?.(row) ?? index}>{renderRow(row)}</Box>
      ))}
    </Column>
  )
}
