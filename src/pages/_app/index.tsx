import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import { Screen } from './Screen'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Screen>
        <Component {...pageProps} />
      </Screen>
    </ApolloProvider>
  )
}

const apolloClient = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache(),
})
