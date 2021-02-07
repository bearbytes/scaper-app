import React from 'react'
import { Column, Spacer } from '@components'
import { RiTeamLine } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import { IoSettingsOutline } from 'react-icons/io5'
import { SideBarButton } from './SideBarButton'

export function SideBar() {
  return (
    <Column color="elevated" gap="M" pad="M">
      <SideBarButton icon={RiTeamLine} text="Teams" linkTo="/team" />
      <SideBarButton icon={GiSkills} text="Skills" linkTo="/skills" />
      <Spacer />
      <SideBarButton
        icon={IoSettingsOutline}
        text="Settings"
        linkTo="/settings"
      />
    </Column>
  )
}
