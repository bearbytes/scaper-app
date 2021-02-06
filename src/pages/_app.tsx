import { css, Global } from '@emotion/react'
import React, { ReactNode } from 'react'
import { Box, Column, Row, IconButton } from '@components'
import { IconType } from 'react-icons'
import { RiPlantLine } from 'react-icons/ri'

const globalStyles = css`
  html,
  body {
    margin: 0;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Screen>
        <Component {...pageProps} />
      </Screen>
    </>
  )
}

function Screen(props: { children: ReactNode }) {
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

function SideBar() {
  return (
    <Column color="elevated" height={'100%'} gap="M" pad="M">
      <SideBarButton icon={RiPlantLine} text="Plants" />
      <SideBarButton icon={RiPlantLine} text="Plants" />
      <SideBarButton icon={RiPlantLine} text="Plants" />
      <SideBarButton icon={RiPlantLine} text="Plants" />
    </Column>
  )
}

function SideBarButton(props: { icon: IconType; text: string }) {
  return (
    <IconButton
      width={75}
      height={75}
      color="background"
      icon={props.icon}
      iconSize={'XL'}
      text={props.text}
    />
  )
}
