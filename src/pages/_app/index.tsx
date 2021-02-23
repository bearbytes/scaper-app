import { useSession } from 'next-auth/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { useEffect } from 'react'
import { useQuery } from '../../lib/graphql'
import { PagePropsProvider } from '../../lib/pageProps'
import { Screen } from './screen'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Screen>
      <PagePropsProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </PagePropsProvider>
    </Screen>
  )
}
