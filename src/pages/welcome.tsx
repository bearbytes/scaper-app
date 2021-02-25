import { GetServerSideProps, GetStaticProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
import React from 'react'
import { Column, Form, Grid, Label, Row, TextInput } from '../components'
import { Panel } from '../components/container/Panel'
import { FormField } from '../components/input/FormField'

/* Types */

type PageProps = {}

/* Components */

export default function SetupUserPage() {
  return (
    <Panel>
      <Label large text="Welcome" />
      <Form>
        <FormField label="Your username:">
          <TextInput value="Blablabla" onChange={console.log} />
        </FormField>

        <Grid columnWidth={100}>
          <FormField label="Age">
            <TextInput value="12" onChange={console.log} />
          </FormField>

          <FormField label="Location">
            <TextInput value="Berlin" onChange={console.log} />
          </FormField>

          <FormField label="Language">
            <TextInput value="English" onChange={console.log} />
          </FormField>
        </Grid>
      </Form>
    </Panel>
  )
}

/* Hooks */

/* Server Side Generation */

export const getServerSideProps: GetServerSideProps<PageProps> = async ctx => {
  const session = await getSession(ctx)
  if (!session || session.user.isSetup)
    return { redirect: { statusCode: 303, destination: '/' } }

  return { props: {} }
}
