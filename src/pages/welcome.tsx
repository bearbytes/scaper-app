import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'
import {
  Form,
  Grid,
  Label,
  NumberInput,
  TextInput,
  FormField,
  Panel,
  Row,
} from '../components'
import { useForm } from 'react-hook-form'
import { SubmitButton } from '../components/input/SubmitButton'

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
    yearOfBirth?: number
    location?: string
    language?: string
  }

  const form = useForm<Inputs>()
  const onSubmit = (inputs: Inputs) => {
    console.log(inputs)
  }

  return (
    <Form onSubmit={onSubmit} options={{ mode: 'onChange' }}>
      <FormField
        label="Your username:"
        prefix="@"
        name="username"
        options={{
          required: 'Username is required',
          minLength: { value: 4, message: 'Must be at least 4 characters' },
          pattern: /@[a-z][a-z0-9]+/,
        }}
      />
      <Grid columnWidth={100}>
        <FormField
          type="number"
          name="yearOfBirth"
          label="Year of Birth"
          options={{ min: 0, max: 2021 }}
        />
        <FormField label="Location" name="location" />
        <FormField label="Language" name="language" />
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
