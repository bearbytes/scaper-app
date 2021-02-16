import { queryType } from 'nexus'
import { User } from './User'

export const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world!' })
  },
})
