import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import { createContext, ReactNode, useContext } from 'react'
import { proxy, useProxy } from 'valtio'

const pagePropsContext = createContext(null as any)

export function PagePropsProvider<P extends object>(props: {
  pageProps: P
  children: ReactNode
}) {
  return (
    <pagePropsContext.Provider value={proxy(props.pageProps)}>
      {props.children}
    </pagePropsContext.Provider>
  )
}

export function withPageProps<P extends object>() {
  return {
    usePageProps(): P {
      const proxy = useContext(pagePropsContext)
      return useProxy(proxy)
    },
    useMutatePageProps() {
      const proxy = useContext(pagePropsContext)
      return function mutate(mutation: (pageProps: P) => void) {
        mutation(proxy)
      }
    },
  }
}
