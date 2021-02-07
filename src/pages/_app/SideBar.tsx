import React from 'react'
import { Column } from '@components'
import { IoCubeOutline } from 'react-icons/io5'
import { RiPlantLine } from 'react-icons/ri'
import { SideBarButton } from './SideBarButton'

export function SideBar() {
  return (
    <Column color="elevated" height={'100%'} gap="M" pad="M">
      <SideBarButton icon={IoCubeOutline} text="Tanks" />
      <SideBarButton icon={RiPlantLine} text="Plants" />
      <SideBarButton icon={RiPlantLine} text="Hardscape" />
      <SideBarButton icon={RiPlantLine} text="Gadgets" />
    </Column>
  )
}
