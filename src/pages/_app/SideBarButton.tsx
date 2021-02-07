import React from 'react'
import { IconButton } from '@components'
import { IconType } from 'react-icons'

export function SideBarButton(props: { icon: IconType; text: string }) {
  return (
    <IconButton
      width={65}
      height={65}
      color="background"
      icon={props.icon}
      iconSize={'XL'}
      text={props.text}
    />
  )
}
