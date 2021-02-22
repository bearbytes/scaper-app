import { css } from '@emotion/react'
import { Box, BoxProps } from '../layout/Box'
import { AvatarSize, theme } from '../theme'

export type AvatarProps = BoxProps & {
  url: string
  size?: AvatarSize
  onPress?(): void
}

export function Avatar(props: AvatarProps) {
  const { url, size = 'M', onPress, ...boxProps } = props

  const buttonStyle = onPress
    ? css({
        ':hover': { filter: 'brightness(150%)' },
        transition: 'all 0.2s',
      })
    : undefined

  const s = theme.avatarSize[size]
  return (
    <Box
      {...boxProps}
      color="background"
      style={[{ borderRadius: s / 4 }, buttonStyle]}
    >
      <img src={url} width={s} height={s} />
    </Box>
  )
}
