import { css, Global } from '@emotion/react'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro';
    font-size: 1em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lobster Two';
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    background-color: transparent;
    font-size: 1em;
    border-width: 0;
    outline: unset;
    font-family: 'Source Sans Pro';
  }
`

export function GlobalStyles() {
  return <Global styles={globalStyles} />
}
