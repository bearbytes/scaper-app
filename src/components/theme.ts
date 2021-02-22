export const theme = {
  color: {
    background: '#dca',
    elevated: '#181818',
  },
  textColor: {
    text: '#000',
    inverted: '#eee',
  },
  fontSize: {
    default: '1em',
    small: '0.7em',
    large: '1.5em',
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
    M: 8,
  },
  iconSize: {
    S: 12,
    M: 18,
    L: 24,
    XL: 36,
  },
  avatarSize: {
    S: 32,
    M: 72,
    L: 144,
  },
}

export type Theme = typeof theme
export type Spacing = keyof Theme['spacing']
export type Color = keyof Theme['color']
export type TextColor = keyof Theme['textColor']
export type FontSize = keyof Theme['fontSize']
export type BorderRadius = keyof Theme['borderRadius']
export type IconSize = keyof Theme['iconSize']
export type AvatarSize = keyof Theme['avatarSize']
