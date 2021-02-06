import { createGlobalStyle } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`
