import { css, Global } from '@emotion/react'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Pompiere;
    font-size: 1.2em;
  }
`

export function GlobalStyles() {
  return <Global styles={globalStyles} />
}
