import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'
import { Form, Grid, Label, FormField, Panel } from '../components'
import { SubmitButton } from '../components/input/SubmitButton'
import { FiCalendar, FiGlobe, FiHome } from 'react-icons/fi'

/* Types */

type PageProps = {}

/* Components */

export default function SetupUserPage() {
  return (
    <Panel>
      <Label title large text="Welcome" />
      <SetupUserForm />
    </Panel>
  )
}

function SetupUserForm() {
  type Inputs = {
    username: string
    birthdate?: Date
    location?: string
    language?: string
  }

  const onSubmit = (inputs: Inputs) => {
    console.log(inputs)
  }

  return (
    <Form onSubmit={onSubmit} options={{ mode: 'onChange' }}>
      <FormField
        prefix="@"
        label="Your username:"
        name="username"
        type="string"
        options={{
          required: 'Username is required',
          pattern: {
            value: /[a-z][a-z0-9\-_\.]+/i,
            message:
              'Name must start with a letter and can only contain URL-friendly characters.',
          },
          minLength: {
            value: 4,
            message: 'Must be at least 4 characters.',
          },
        }}
      />
      <Grid columnWidth={100} gap="M">
        <FormField
          icon={FiCalendar}
          label="Date of Birth"
          name="birthdate"
          type="string"
        />
        <FormField
          icon={FiHome}
          label="Location"
          name="location"
          type="Location"
        />
        <FormField
          icon={FiGlobe}
          label="Language"
          name="language"
          type="string"
        />
      </Grid>

      <SubmitButton />
    </Form>
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
