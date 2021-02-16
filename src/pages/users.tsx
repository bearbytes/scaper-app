import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { rpcClient } from '../api/rpcClient'
import { Button, Column, IconButton, List, Row } from '../components'
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useListUsersQuery,
  User,
} from '../graphql/generated/client-types'
import { db } from '../lib/db'
import { StaticProps } from '../lib/types'
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

  return (
    <Row spaceBetween>
      <Link key={user.id} href={'/user/' + user.id}>
        <a>{user.name}</a>
      </Link>
      <IconButton
        icon={FiTrash}
        onPress={() => deleteUser({ variables: { id: user.id } })}
      />
    </Row>
  )
}

function CreateUserButton() {
  const [createUser] = useCreateUserMutation({ refetchQueries: ['listUsers'] })
  return <Button onPress={createUser} text="Create User" />
}
