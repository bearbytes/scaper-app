import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const theme: DefaultTheme = {
  colors: {
    background: '#390099',
    elevated: '#9E0059',
    secondary: '#FF0054',
    primary: '#FF5400',
    highlight: '#FFBD00',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  spacings: {
    none: 0,
    S: 4,
    M: 8
  }
}