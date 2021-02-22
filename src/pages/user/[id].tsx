import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Avatar, Label, Row } from '../../components'
import { db } from '../../lib/db'
import { usePageProps } from '../../lib/pageProps'

/* Types */

type PageParams = { id: string }
type PageProps = { user: User }
type User = { id: string; name: string; avatarUrl: string | null }

/* Components */

export default function UserPage({ user }: PageProps) {
  return (
    <Row alignTop gap="S">
      <UserAvatar />
      <Label large text={user.name} />
    </Row>
  )
}

function UserAvatar() {
  const { user } = usePageProps<PageProps>()
  if (!user.avatarUrl) return null
  return <Avatar size="L" url={user.avatarUrl} />
}

/* Hooks */

/* Server Side Generation */
export const getStaticProps: GetStaticProps<
  PageProps,
  PageParams
> = async ctx => {
  const id = ctx.params!!.id
  const user = await db.user.findUnique({ where: { id } })
  if (!user) return { notFound: true }
  return { props: { user } }
}

export const getStaticPaths: GetStaticPaths<PageParams> = async ctx => {
  const users = await db.user.findMany({ select: { id: true } })
  const paths = users.map(user => ({ params: { id: user.id } }))
  return { paths, fallback: 'blocking' }
}
