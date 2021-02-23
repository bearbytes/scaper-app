import { GetStaticProps } from 'next'
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

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: {},
})
