import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { Column } from '../components'
import { prisma } from '../lib/prisma'
import { StaticProps } from '../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const users = await prisma.user.findMany({})
  return { props: { users } }
}

export default function IndexPage({
  users,
}: StaticProps<typeof getStaticProps>) {
  return (
    <Column>
      {users.map(user => (
        <Link key={user.id} href={'/user/' + user.id}>
          <a>{user.name}</a>
        </Link>
      ))}
    </Column>
  )
}
