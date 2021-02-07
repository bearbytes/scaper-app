import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Grid } from '../layout/Grid'

export type TableProps<T> = {
  rows: T[]
  columns: Array<{
    flex?: number
    renderCell(row: T): ReactNode
  }>
}

export function Table<T>(props: TableProps<T>) {
  const { rows, columns } = props

  let gridColumns = ''
  columns.forEach(({ flex = 1 }) => {
    gridColumns += flex + 'fr '
  })

  return (
    <Grid columns={gridColumns}>
      {rows.map((row, rowIndex) =>
        columns.map((col, colIndex) => (
          <Box key={rowIndex + '_' + colIndex}>{col.renderCell(row)}</Box>
        )),
      )}
    </Grid>
  )
}
