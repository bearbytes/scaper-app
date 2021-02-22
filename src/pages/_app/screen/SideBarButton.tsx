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
      width={48}
      height={48}
      borderRadius="M"
      iconSize="L"
      icon={icon}
      onPress={onPress}
    />
  )
}
