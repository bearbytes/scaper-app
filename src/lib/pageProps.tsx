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

export function usePageProps<P extends object>() {
  const proxy = useContext(pagePropsContext)
  return useProxy(proxy) as P
}

export function useMutatePageProps<P extends object>() {
  const proxy = useContext(pagePropsContext)
  return function mutate(mutation: (pageProps: P) => void) {
    mutation(proxy)
  }
}
