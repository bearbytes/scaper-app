import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { Box, BoxProps } from '../layout/Box'

export type PopupContainerProps = BoxProps & {
  popupElement?: ReactNode
}

// TODO add corner to Popup to indicate where it points to the Container
export function PopupContainer(props: PopupContainerProps) {
  const { popupElement, style, ...boxProps } = props

  const popupContainerStyle = css({
    position: 'relative',
  })

  const popupProps = css({
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: 0,
    transform: 'translateY(100%)',
  })

  return (
    <Box {...boxProps} style={[popupContainerStyle, style]}>
      {props.children}
      {props.popupElement && <Box style={popupProps}>{props.popupElement}</Box>}
    </Box>
  )
}
