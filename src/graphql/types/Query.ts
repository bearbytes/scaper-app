import { list, queryType } from 'nexus'
import { prisma } from '../../lib/prisma'
import { User } from './User'

export const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: User,
      resolve() {
        return prisma.user.findMany({})
      },
    })
  },
})
