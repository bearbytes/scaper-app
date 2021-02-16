import faker from 'faker'
import { mutationType } from 'nexus'
import { prisma } from '../../lib/prisma'
import { User } from './User'

export const Mutation = mutationType({
  definition(t) {
    t.field('createUser', {
      type: User,
      resolve() {
        const email = faker.internet.email()
        return prisma.user.create({
          data: {
            email: faker.internet.email(),
            name: faker.name.firstName(),
            avatarUrl: 'https://i.pravatar.cc/150?u=' + email,
          },
        })
      },
    })
  },
})
