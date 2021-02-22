import React from 'react'
import { IconButton } from '@components'
import { IconType } from 'react-icons'

type SideBarButtonProps = {
  icon: IconType
  linkTo: string
}

export function SideBarButton(props: SideBarButtonProps) {
  const { icon, linkTo } = props

  const onPress = () => {
    window.location.href = linkTo
  }

  return (
    <IconButton
      width={40}
      height={40}
      borderRadius="M"
      color="background"
      textColor="text"
      iconSize="L"
      icon={icon}
      onPress={onPress}
    />
  )
}
