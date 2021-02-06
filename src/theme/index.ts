export const theme = {
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

export type Theme = typeof theme
export type Spacing = 'none' | 'S' | 'M'
export type Color = keyof Theme['colors']
export type FontSize = keyof Theme['fontSizes']

