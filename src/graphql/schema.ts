import { makeSchema, mutationType, queryType } from 'nexus'
import path from 'path'
import faker from 'faker'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { prisma } from '../lib/prisma'

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world!' })
  },
})

const Mutation = mutationType({
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

export const graphqlSchema = makeSchema({
  types: [Query, Mutation],
  plugins: [nexusPrisma()],
  outputs: {
    schema: path.join(__dirname, 'generated/schema.gql'),
    typegen: path.join(__dirname, 'generated/nexus-types.ts'),
  },
})
