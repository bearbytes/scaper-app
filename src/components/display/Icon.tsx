import { IconType } from 'react-icons'
import { IconSize, theme } from '../theme'

export type IconProps = {
  icon: IconType
  size?: IconSize
  onPress?(): void
}

export function Icon(props: IconProps) {
  return (
    <props.icon
      size={theme.iconSize[props.size ?? 'M']}
      onClick={props.onPress}
    />
  )
}
