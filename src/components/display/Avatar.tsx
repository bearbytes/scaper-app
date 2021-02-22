import { css } from '@emotion/react'
import { Box, BoxProps } from '../layout/Box'
import { IconSize, theme } from '../theme'

export type AvatarProps = BoxProps & {
  url: string
  size?: IconSize
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

  const s = theme.iconSize[size]
  return (
    <Box
      {...boxProps}
      color="background"
      style={[{ borderRadius: s / 4 }, buttonStyle]}
      onPress={props.onPress}
    >
      <img src={url} width={s} height={s} />
    </Box>
  )
}
