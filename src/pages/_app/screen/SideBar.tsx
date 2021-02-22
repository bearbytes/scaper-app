import React from 'react'
import { Column, Spacer } from '@components'
import { FiUsers } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { SideBarButton } from './SideBarButton'

export function SideBar() {
  return (
    <Column color="elevated" gap="M" pad="M">
      <SideBarButton icon={FiUsers} linkTo="/users" />
      <Spacer />
      <SideBarButton icon={IoSettingsOutline} linkTo="/settings" />
    </Column>
  )
}
