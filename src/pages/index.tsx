import { GetStaticProps } from 'next'
import React from 'react'
import { Label } from '../components'

type PageProps = {}

export default function IndexPage() {
  return <Label text="Index" />
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return { props: {} }
}
