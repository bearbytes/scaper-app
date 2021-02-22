import React, { ReactNode } from 'react'
import { Box, Column, Row } from '@components'
import { SideBar } from './SideBar'
import { ScreenHeader } from './ScreenHeader'

export function Screen(props: { children: ReactNode }) {
  return (
    <ScreenContainer>
      <Row flex>
        <SideBar />
        <Column flex>
          <ScreenHeader />
          <ContentContainer>{props.children}</ContentContainer>
        </Column>
      </Row>
    </ScreenContainer>
  )
}

function ScreenContainer(props: { children: ReactNode }) {
  return (
    <Column
      color={'background'}
      height={'100vh'}
      style={{ overflow: 'hidden' }}
    >
      {props.children}
    </Column>
  )
}

function ContentContainer(props: { children: ReactNode }) {
  return (
    <Box flex pad="M">
      {props.children}
    </Box>
  )
}
