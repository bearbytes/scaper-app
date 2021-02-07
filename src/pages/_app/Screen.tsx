import React, { ReactNode } from 'react'
import { Box, Row } from '@components'
import { SideBar } from './SideBar'

export function Screen(props: { children: ReactNode }) {
  return (
    <Row
      color={'background'}
      width={'100vw'}
      height={'100vh'}
      textColor={'text'}
    >
      <SideBar />
      <Box flex pad={'M'}>
        {props.children}
      </Box>
    </Row>
  )
}
