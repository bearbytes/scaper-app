import { css, Global } from '@emotion/react'
import React from 'react'

const globalStyles = css`
  html,
  body {
    margin: 0;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}
