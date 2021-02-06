import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FullScreen>
          <Component {...pageProps} />
        </FullScreen>
      </ThemeProvider>
    </>
  )
}

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
