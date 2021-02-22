import { Avatar, Box, Button, Label, Row, Spacer } from '../../../components'
import { signIn, useSession, Session, signOut } from 'next-auth/client'
import React from 'react'
import { Column } from '../../../components/layout/FlexBox'
import { PopupContainer } from '../../../components/container/PopupContainer'

export function ScreenHeader() {
  return (
    <Row height={50} color="elevated" textColor="inverted" alignCenterVertical>
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
  return (
    <PopupContainer popupElement={<UserMenu />}>
      <Row alignCenter pad="M" gap="S">
        {user.image && (
          <Avatar size="S" url={user.image} onPress={console.log} />
        )}
      </Row>
    </PopupContainer>
  )
}

function UserMenu() {
  return (
    <Box pad="S">
      <Column color="highlighted" borderRadius="M">
        <Button
          color="transparent"
          textColor="text"
          text="Logout"
          onPress={signOut}
        />
      </Column>
    </Box>
  )
}
