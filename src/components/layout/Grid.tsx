import React, { ReactNode } from 'react'
import { Spacing, theme } from '../theme'
import { Box, BoxProps } from './Box'

export type GridProps = BoxProps & {
  gap?: Spacing
  columnWidth?: number
  columns?: string
}

export function Grid(props: GridProps) {
  const { children, gap, columnWidth, columns, ...boxProps } = props

  let gridTemplateColumns = columns

  if (columnWidth)
    gridTemplateColumns = `repeat(auto-fit, minmax(${columnWidth}px, 1fr))`

  if (!gridTemplateColumns) gridTemplateColumns = `repeat(auto-width, 1fr)`

  return (
    <Box
      {...boxProps}
      style={{
        display: 'grid',
        gridGap: theme.spacing[gap],
        gridTemplateColumns,
      }}
    >
      {children}
    </Box>
  )
}
