import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { Column, List } from '../components'
import { prisma } from '../lib/prisma'
import { StaticProps } from '../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const users = await prisma.user.findMany({})
  return { props: { users } }
}

export default function IndexPage(props: StaticProps<typeof getStaticProps>) {
  return (
    <List
      rows={props.users}
      renderRow={user => (
        <Link key={user.id} href={'/user/' + user.id}>
          <a>{user.name}</a>
        </Link>
      )}
    />
  )
}
