import React, { Fragment, ReactNode } from 'react'
import { Box } from '../layout/Box'
import { Column, ColumnProps } from '../layout/FlexBox'

export type ListProps<T> = ColumnProps & {
  items: T[]
  renderItem: (value: T) => ReactNode

  keySelector?: (value: T) => string | number

  renderSeparator?: boolean
}

export function List<T>(props: ListProps<T>) {
  const {
    items,
    renderItem,

    keySelector,

    renderSeparator,

    ...columnProps
  } = props

  return (
    <Column {...columnProps}>
      {items.map((row, index) => (
        <Fragment key={keySelector?.(row) ?? index}>
          {index > 0 && renderSeparator && <Separator />}
          <Box>{renderItem(row)}</Box>
        </Fragment>
      ))}
    </Column>
  )
}

function Separator() {
  return (
    <Box
      height={1}
      style={{
        background: 'linear-gradient(90deg, #0002 0%, #0005 50%, #0002 100%)',
      }}
    />
  )
}
