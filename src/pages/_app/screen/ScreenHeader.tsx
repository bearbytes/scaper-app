import {
  Avatar,
  Box,
  Button,
  Label,
  Row,
  Spacer,
  Image,
} from '../../../components'
import { signIn, useSession, Session, signOut } from 'next-auth/client'
import React from 'react'
import { Column } from '../../../components/layout/FlexBox'
import { PopupContainer } from '../../../components/container/PopupContainer'
import { useToggle } from '../../../lib/hooks/useToggle'

export function ScreenHeader() {
  return (
    <Row height={65} padHorizonal="M" color="elevated" alignCenterVertical>
      <Label large bold text="Header" />
      <Spacer />
      <SessionInfo />
    </Row>
  )
}

function SessionInfo() {
  const [session, loading] = useSession()

  if (loading) return null
  if (!session) return <LoginButton />
  else return <UserInfo user={session.user} />
}

function LoginButton() {
  return <Button text="Login" onPress={signIn} />
}

function UserInfo({ user }: { user: Session['user'] }) {
  const [menuOpen, toggleMenu] = useToggle(false)

  return (
    <PopupContainer
      color="background"
      borderRadius="M"
      onPress={toggleMenu}
      popupElement={menuOpen && <UserMenu />}
      width={50}
      height={50}
    >
      {user.image && <Image uri={user.image} />}
    </PopupContainer>
  )
}

function UserMenu() {
  return (
    <Box padTop="M">
      <Column color="elevated" borderColor="background" borderRadius="M">
        <Button text="Logout" onPress={signOut} />
      </Column>
    </Box>
  )
}
