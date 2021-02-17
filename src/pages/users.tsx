import Link from 'next/link'
import React from 'react'
import { Button, Column, IconButton, List, Row } from '../components'
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useListUsersQuery,
  User,
} from '../graphql/generated/client-types'
import { FiTrash } from 'react-icons/fi'

export default function IndexPage() {
  const { data } = useListUsersQuery()
  const users = data?.users ?? []

  return (
    <Column maxWidth={300}>
      <CreateUserButton />
      <List
        rows={users}
        keySelector={user => user.id}
        renderRow={user => <UserRow user={user} />}
      />
    </Column>
  )
}

function UserRow(props: { user: User }) {
  const { user } = props

  const [deleteUser] = useDeleteUserMutation({ refetchQueries: ['listUsers'] })

  const onPressDelete = () => {
    deleteUser({ variables: { id: user.id } })
  }

  return (
    <Row spaceBetween>
      <Link key={user.id} href={'/user/' + user.id}>
        <a>{user.name}</a>
      </Link>
      <IconButton icon={FiTrash} onPress={onPressDelete} />
    </Row>
  )
}

function CreateUserButton() {
  const [createUser] = useCreateUserMutation({ refetchQueries: ['listUsers'] })

  const onPress = () => {
    createUser()
  }

  return <Button onPress={onPress} text="Create User" />
}
