import { makeSchema } from 'nexus'
import path from 'path'
import * as types from './types'

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, 'generated/schema.gql'),
    typegen: path.join(__dirname, 'generated/nexus-types.ts'),
  },
})
