import { GetStaticPropsContext } from 'next'

export type StaticProps<T> = T extends (
  ctx: GetStaticPropsContext,
) => Promise<{ props: infer P }> | { props: infer P }
  ? P
  : never
