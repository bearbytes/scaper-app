import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import { Avatar, Column, Icon, Label, Row, Spacer } from '../../components'
import { prisma } from '../../lib/prisma'
import { StaticProps } from '../../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = ctx.params.id as string
  const user = await prisma.user.findUnique({ where: { id } })
  return { props: { user } }
}

export async function getStaticPaths(ctx: GetStaticPathsContext) {
  const users = await prisma.user.findMany({ select: { id: true } })
  const paths = users.map(user => ({
    params: { id: user.id },
  }))
  return { paths, fallback: true }
}

export default function UserPage(props: StaticProps<typeof getStaticProps>) {
  const { user } = props
  return (
    <Row alignCenterVertical gap="S">
      <Avatar size="S" url={user.avatarUrl} />
      <Label large text={user.name} />
    </Row>
  )
}
