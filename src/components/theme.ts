export const theme = {
  color: {
    background: '#333',
    elevated: '#666',
  },
  textColor: {
    text: '#eee'
  },
  fontSize: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  spacing: {
    none: 0,
    XXS: 1,
    XS: 2,
    S: 4,
    M: 8,
    L: 16,
    XL: 32,
    XXL: 64,
  },
  borderRadius: {
    none: 0,
    S: 4,
    M: 8
  },
  iconSize: {
    S: 12,
    M: 18,
    L: 24,
    XL: 36,
  }
}

export type Theme = typeof theme
export type Spacing = keyof Theme['spacing']
export type Color = keyof Theme['color']
export type TextColor = keyof Theme['textColor']
export type FontSize = keyof Theme['fontSize']
export type BorderRadius = keyof Theme['borderRadius']
export type IconSize = keyof Theme['iconSize']

