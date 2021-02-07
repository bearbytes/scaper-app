import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Grid } from '../layout/Grid'

export type TableProps<T> = {
  rows: T[]
  columns: Array<{
    renderCell(row: T): ReactNode
  }>
}

export function Table<T>(props: TableProps<T>) {
  const { rows, columns } = props

  return (
    <Grid columns={`repeat(${columns.length}, 1fr)`}>
      {rows.map((row, rowIndex) =>
        columns.map((col, colIndex) => (
          <Box key={rowIndex + '_' + colIndex}>{col.renderCell(row)}</Box>
        )),
      )}
    </Grid>
  )
}
