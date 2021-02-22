import { Avatar, Button, Label, Row, Spacer } from '../../../components'
import { signIn, useSession, Session } from 'next-auth/client'
import React from 'react'

export function ScreenHeader() {
  return (
    <Row height={50} color={'elevated'} alignCenterVertical>
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
    <Row alignCenter padHorizonal="M" gap="S">
      {user.image && <Avatar size="S" url={user.image} />}
    </Row>
  )
}
