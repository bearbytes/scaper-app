import { css, Global } from '@emotion/react'
import React from 'react'
import { Screen } from '@components'

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
