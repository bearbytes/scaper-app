export const theme = {
  colors: {
    background: '#333',
  },
  textColors: {
    text: '#eee'
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
export type TextColor = keyof Theme['textColors']
export type FontSize = keyof Theme['fontSizes']

