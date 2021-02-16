import { makeSchema } from 'nexus'
import path from 'path'
import { Mutation } from './Mutation'
import { Query } from './Query'

export const schema = makeSchema({
  types: [Query, Mutation],
  outputs: {
    schema: path.join(__dirname, 'generated/schema.gql'),
    typegen: path.join(__dirname, 'generated/nexus-types.ts'),
  },
})
