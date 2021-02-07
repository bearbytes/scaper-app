import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { Screen } from './Screen'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Screen>
        <Component {...pageProps} />
      </Screen>
    </>
  )
}
