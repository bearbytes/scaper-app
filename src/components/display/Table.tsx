import { ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Grid, GridProps } from '../layout/Grid'

export type TableProps<T> = Omit<GridProps, 'columnWidth' | 'columns'> & {
  rows: T[]
  columns: Array<{
    flex?: number
    renderCell(row: T): ReactNode
  }>
}

export function Table<T>(props: TableProps<T>) {
  const { rows, columns, ...gridProps } = props

  let gridColumns = ''
  columns.forEach(({ flex = 1 }) => {
    gridColumns += flex + 'fr '
  })

  return (
    <Grid columns={gridColumns} {...gridProps}>
      {rows.map((row, rowIndex) =>
        columns.map((col, colIndex) => (
          <Box key={rowIndex + '_' + colIndex}>{col.renderCell(row)}</Box>
        )),
      )}
    </Grid>
  )
}
