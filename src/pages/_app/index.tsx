import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { useApollo } from './ApolloClient'
import { Screen } from './Screen'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Screen>
        <Component {...pageProps} />
      </Screen>
    </ApolloProvider>
  )
}
