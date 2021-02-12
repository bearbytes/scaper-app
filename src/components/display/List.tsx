import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Column } from '../layout/FlexBox'

export type ListProps<T> = {
  rows: T[]
  renderRow: (value: T) => ReactNode
  keySelector?: (value: T) => string | number
}

export function List<T>(props: ListProps<T>) {
  return (
    <Column>
      {props.rows.map((row, index) => (
        <Box key={props.keySelector?.(row) ?? index}>
          {props.renderRow(row)}
        </Box>
      ))}
    </Column>
  )
}
