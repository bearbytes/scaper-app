import Link from 'next/link'
import React from 'react'
import { Button, Column, IconButton, List, Row } from '../components'
import {
  CreateUserDocument,
  DeleteUserDocument,
} from '../graphql/generated/client-types'
import { FiTrash } from 'react-icons/fi'
import { useMutation } from '@apollo/client'
import { db } from '../lib/db'
import { remove } from 'lodash'
import { GetStaticProps, withPageProps } from '../lib/pageProps'

/* Types */

type PageProps = { users: User[] }
type User = { id: string; name: string }

/* Components */

export default function UsersPage() {
  return (
    <Column maxWidth={300}>
      <CreateUserButton />
      <UsersList />
    </Column>
  )
}

function UsersList() {
  const { users } = usePageProps()
  return (
    <List
      rows={users}
      keySelector={user => user.id}
      renderRow={user => <UserRow user={user} />}
    />
  )
}

function UserRow({ user }: { user: User }) {
  const onPressDelete = useDeleteUser(user.id)

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
  const onPressCreate = useCreateUser()
  return <Button onPress={onPressCreate} text="Create User" />
}

/* Hooks */

function useDeleteUser(id: string) {
  const [deleteUser] = useMutation(DeleteUserDocument)
  const mutate = useMutatePageProps()
  return async function () {
    const response = await deleteUser({ variables: { id } })
    if (response.data.deleteUser) {
      mutate(props => {
        remove(props.users, user => user.id == id)
      })
    }
  }
}

function useCreateUser() {
  const [createUser] = useMutation(CreateUserDocument)
  const mutate = useMutatePageProps()
  return async function () {
    const response = await createUser()
    if (response.data.createUser) {
      const { id, name } = response.data.createUser
      mutate(props => {
        props.users.push({ id, name })
      })
    }
  }
}

/* Server Side Generation */

const { usePageProps, useMutatePageProps } = withPageProps<PageProps>()
export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: {
    users: await db.user.findMany({ select: { id: true, name: true } }),
  },
})
