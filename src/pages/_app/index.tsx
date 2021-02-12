import React from 'react'
import { GlobalStyles } from '../_document/GlobalStyles'
import { Screen } from './Screen'

export default function App({ Component, pageProps }) {
  return (
    <Screen>
      <Component {...pageProps} />
    </Screen>
  )
}
