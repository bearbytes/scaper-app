import { css, Global } from '@emotion/react'

const globalStyles = css`
  html,
  body {
    margin: 0;
  }
`

export function GlobalStyles() {
  return <Global styles={globalStyles} />
}
