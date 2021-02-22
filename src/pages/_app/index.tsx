import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { PagePropsProvider } from '../../lib/pageProps'
import { Screen } from './Screen'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Screen>
      <PagePropsProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </PagePropsProvider>
    </Screen>
  )
}
