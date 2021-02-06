import { IconType } from 'react-icons'
import { IconSize, theme } from '../theme'

export type IconProps = {
  icon: IconType
  size?: IconSize
}

export function Icon(props: IconProps) {
  return <props.icon size={theme.iconSize[props.size ?? 'M']} />
}
