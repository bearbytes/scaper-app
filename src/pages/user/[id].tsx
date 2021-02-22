import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Avatar, Label, Row } from '../../components'
import { db } from '../../lib/db'

/* Types */

type PageParams = { id: string }
type PageProps = { user: User }
type User = { id: string; name: string; avatarUrl: string }

/* Components */

export default function UserPage({ user }: PageProps) {
  return (
    <Row alignTop gap="S">
      <Avatar size="L" url={user.avatarUrl} />
      <Label large text={user.name} />
    </Row>
  )
}

/* Hooks */

/* Server Side Generation */
export const getStaticProps: GetStaticProps<
  PageProps,
  PageParams
> = async ctx => ({
  props: {
    user: await db.user.findUnique({ where: { id: ctx.params.id } }),
  },
})

export const getStaticPaths: GetStaticPaths<PageParams> = async ctx => {
  const users = await db.user.findMany({ select: { id: true } })
  const paths = users.map(user => ({ params: { id: user.id } }))
  return { paths, fallback: true }
}
