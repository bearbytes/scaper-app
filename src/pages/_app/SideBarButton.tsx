import React from 'react'
import { IconButton } from '@components'
import { IconType } from 'react-icons'

type SideBarButtonProps = {
  icon: IconType
  text: string
  linkTo: string
}

export function SideBarButton(props: SideBarButtonProps) {
  const { icon, text, linkTo } = props

  return (
    <IconButton
      width={65}
      height={65}
      color="background"
      icon={icon}
      iconSize={'XL'}
      text={text}
      onPress={() => {
        window.location.href = linkTo
      }}
    />
  )
}
