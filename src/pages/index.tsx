import { GetStaticPropsContext } from 'next'
import { StaticProps } from '../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return { props: {} }
}

export default function IndexPage(props: StaticProps<typeof getStaticProps>) {
  return <p>Index</p>
}
