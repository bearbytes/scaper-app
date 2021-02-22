import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Label } from '../components'
import { StaticProps } from '../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return { props: {} }
}

export default function IndexPage(props: StaticProps<typeof getStaticProps>) {
  return <Label text="Index" />
}
