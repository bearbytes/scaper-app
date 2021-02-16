import { gql } from '@apollo/client'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { rpcClient } from '../api/rpcClient'
import { Button, Column, IconButton, List, Row } from '../components'
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useListUsersQuery,
} from '../graphql/generated/client-types'
import { db } from '../lib/db'
import { StaticProps } from '../lib/types'
import { FiTrash } from 'react-icons/fi'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const users = await db.user.findMany({})
  return { props: { users } }
}

export default function IndexPage(props: StaticProps<typeof getStaticProps>) {
  const [deleteUser] = useDeleteUserMutation()

  return (
    <Column>
      <CreateUserButton />
      <List
        rows={props.users}
        renderRow={user => (
          <Row>
            <Link key={user.id} href={'/user/' + user.id}>
              <a>{user.name}</a>
            </Link>
            <IconButton
              icon={FiTrash}
              onPress={() => deleteUser({ variables: { id: user.id } })}
            />
          </Row>
        )}
      />
    </Column>
  )
}

function CreateUserButton() {
  return (
    <Button
      onPress={() => {
        rpcClient.createUser()
      }}
      text="Create User"
    />
  )
}
