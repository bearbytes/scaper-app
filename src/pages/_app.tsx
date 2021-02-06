import { css, Global } from '@emotion/react'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
        }
      `}
    />
  )
}
