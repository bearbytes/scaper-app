import React from 'react'
import { Column, Spacer } from '@components'
import { RiTeamLine } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import { IoSettingsOutline } from 'react-icons/io5'
import { SideBarButton } from './SideBarButton'

export function SideBar() {
  return (
    <Column color="elevated" gap="M" pad="M">
      <SideBarButton icon={RiTeamLine} text="Teams" />
      <SideBarButton icon={GiSkills} text="Skills" />
      <Spacer />
      <SideBarButton icon={IoSettingsOutline} text="Settings" />
    </Column>
  )
}
