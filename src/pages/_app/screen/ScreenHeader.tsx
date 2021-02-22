import { Avatar, Box, Button, Label, Row, Spacer } from '../../../components'
import { signIn, useSession, Session, signOut } from 'next-auth/client'
import React from 'react'
import { Column } from '../../../components/layout/FlexBox'
import { PopupContainer } from '../../../components/container/PopupContainer'
import { useToggle } from '../../../lib/hooks/useToggle'

export function ScreenHeader() {
  return (
    <Row height={65} color="elevated" alignCenterVertical>
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
    <Row alignCenter pad="M" gap="S">
      <PopupContainer popupElement={menuOpen && <UserMenu />}>
        {user.image && (
          <Avatar size="M" url={user.image} onPress={toggleMenu} />
        )}
      </PopupContainer>
    </Row>
  )
}

function UserMenu() {
  return (
    <Box padTop="M">
      <Column color="elevated" borderRadius="M">
        <Button color="transparent" text="Logout" onPress={signOut} />
      </Column>
    </Box>
  )
}
