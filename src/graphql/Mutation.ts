import faker from 'faker'
import { mutationType } from 'nexus'
import { prisma } from '../lib/prisma'

export const Mutation = mutationType({
  definition(t) {
    t.boolean('createUser', {
      async resolve() {
        const email = faker.internet.email()
        await prisma.user.create({
          data: {
            email: faker.internet.email(),
            name: faker.name.firstName(),
            avatarUrl: 'https://i.pravatar.cc/150?u=' + email,
          },
        })
        return true
      },
    })
  },
})
