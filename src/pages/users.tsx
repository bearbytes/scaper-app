import { gql } from '@apollo/client'
import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { Button, Column, List } from '../components'
import {
  useCreateUserMutation,
  useListUsersQuery,
} from '../graphql/generated/client-types'
import { prisma } from '../lib/prisma'
import { StaticProps } from '../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const users = await prisma.user.findMany({})
  return { props: { users } }
}

export default function IndexPage(props: StaticProps<typeof getStaticProps>) {
  const { data } = useListUsersQuery()

  return (
    <Column>
      <CreateUserButton />
      <List
        rows={data?.users ?? []}
        renderRow={user => (
          <Link key={user.id} href={'/user/' + user.id}>
            <a>{user.name}</a>
          </Link>
        )}
      />
    </Column>
  )
}

function CreateUserButton() {
  const [createUser, { data }] = useCreateUserMutation({
    refetchQueries: ['listUsers'],
  })
  return <Button onPress={createUser} text="Create User" />
}
