import { GetStaticPropsContext } from 'next'
import { Column, Label } from '../../components'
import { prisma } from '../../lib/prisma'
import { StaticProps } from '../../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx.params.id as string
  const user = await prisma.user.findUnique({ where: { id } })
  return { props: { user } }
}

export default function UserPage({ user }: StaticProps<typeof getStaticProps>) {
  return (
    <Column>
      <Label large text={user.name} />
    </Column>
  )
}
