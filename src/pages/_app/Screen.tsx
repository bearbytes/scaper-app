import React, { ReactNode } from 'react'
import { Box, Row } from '@components'
import { SideBar } from './SideBar'

export function Screen(props: { children: ReactNode }) {
  return (
    <Row
      color={'background'}
      height={'100vh'}
      style={{
        overflow: 'hidden',
      }}
      textColor={'text'}
    >
      <SideBar />
      <Box flex pad={'M'}>
        {props.children}
      </Box>
    </Row>
  )
}
