import { GetServerSideProps, GetStaticProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
import React from 'react'
import { Label } from '../components'

/* Types */

type PageProps = {}

/* Components */

export default function SetupUserPage() {
  return <Label text="Setup User" />
}

/* Hooks */

/* Server Side Generation */

export const getServerSideProps: GetServerSideProps<PageProps> = async ctx => {
  const session = await getSession(ctx)
  if (!session || session.user.isSetup)
    return { redirect: { statusCode: 303, destination: '/' } }

  return { props: {} }
}
