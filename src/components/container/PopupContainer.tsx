import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Box, BoxProps } from '../layout/Box'

export type PopupContainerProps = BoxProps & {
  popupElement?: ReactNode
  anchor: 'bottom left' | 'bottom right' | 'bottom'
}

// TODO add corner to Popup to indicate where it points to the Container
export function PopupContainer(props: PopupContainerProps) {
  const { popupElement, anchor, style, ...boxProps } = props

  const popupContainerStyle = css({
    position: 'relative',
  })

  let left: number | undefined
  let right: number | undefined
  if (anchor == 'bottom' || anchor == 'bottom left') left = 0
  if (anchor == 'bottom' || anchor == 'bottom right') right = 0

  const popupProps = css({
    position: 'absolute',
    zIndex: 1,
    left,
    right,
    bottom: 0,
    transform: 'translateY(100%)',
  })

  return (
    <Box {...boxProps} style={[popupContainerStyle, style]}>
      {props.children}
      {props.popupElement && <Box style={popupProps}>{props.popupElement}</Box>}
    </Box>
  )
}
