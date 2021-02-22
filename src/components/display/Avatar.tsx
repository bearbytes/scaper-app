import { Box, BoxProps } from '../layout/Box'
import { AvatarSize, theme } from '../theme'

export type AvatarProps = BoxProps & {
  url: string
  size?: AvatarSize
}

export function Avatar(props: AvatarProps) {
  const { url, size = 'M', ...boxProps } = props

  const s = theme.avatarSize[size]
  return (
    <Box {...boxProps} color="background" style={{ borderRadius: s / 4 }}>
      <img src={url} width={s} height={s} />
    </Box>
  )
}
