import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { PagePropsProvider } from '../../lib/pageProps'
import { useApollo } from './ApolloClient'
import { Screen } from './Screen'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Screen>
        <PagePropsProvider pageProps={pageProps}>
          <Component {...pageProps} />
        </PagePropsProvider>
      </Screen>
    </ApolloProvider>
  )
}
