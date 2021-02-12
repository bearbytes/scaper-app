import React from 'react'
import { Screen } from './Screen'

export default function App({ Component, pageProps }) {
  return (
    <Screen>
      <Component {...pageProps} />
    </Screen>
  )
}
