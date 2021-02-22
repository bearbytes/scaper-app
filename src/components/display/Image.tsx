import React from 'react'
import { Box, BoxProps } from '../layout/Box'
import { default as NextImage } from 'next/image'

export type ImageProps = BoxProps & {
  uri: string
}

export function Image(props: ImageProps) {
  const { uri, ...boxProps } = props

  return (
    <Box {...boxProps}>
      <NextImage src={uri} layout="fill" unoptimized />
    </Box>
  )
}
