export type FontSize = keyof typeof fontSize
const fontSize = {
  default: '1em',
  small: '0.7em',
  large: '1.5em',
}

export type Spacing = keyof typeof spacing
const spacing = {
  none: 0,
  XXS: 1,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64,
}

export type BorderRadius = keyof typeof borderRadius
const borderRadius = {
  none: 0,
  S: 4,
  M: 8,
}

export type IconSize = keyof typeof iconSize
const iconSize = {
  S: 12,
  M: 18,
  L: 24,
  XL: 36,
  XXL: 72,
}

export type Color = keyof typeof color
const color = {
  transparent: 'transparent',
  background: 'hsl(120, 0%, 100%)',
  elevated: 'hsl(0, 0%, 10%)',
  active: 'hsl(120, 40%, 25%)',
}

export const backgroundGradient =
  'linear-gradient(170deg, ' +
  'hsl(120, 50%, 50%) 0%,' +
  'hsl(150, 50%, 50%) 50%,' +
  'hsl(180, 80%, 50%) 100%' +
  ')'

export type TextColor = keyof typeof textColor
const textColor = {
  default: '#000',
  inverted: '#eee',
}

export type Theme = typeof theme
export const theme = {
  spacing,
  borderRadius,
  color,
  textColor,
  fontSize,
  iconSize,
}

export function matchingTextColor(color: Color): TextColor {
  switch (color) {
    case 'elevated':
    case 'active':
      return 'inverted'
    default:
      return 'default'
  }
}
