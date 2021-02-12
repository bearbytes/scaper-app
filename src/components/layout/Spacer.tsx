import React from 'react'
import { Box, BoxProps } from './Box'

export type SpacerProps = Pick<BoxProps, 'flex'>

export function Spacer(props: SpacerProps) {
  return <Box flex={props.flex ?? true} />
}
