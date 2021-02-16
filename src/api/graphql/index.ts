import { makeSchema, queryType } from 'nexus'
import { ApolloServer } from 'apollo-server-micro'
import path from 'path'

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world!' })
  },
})

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: path.join(__dirname, '../../generated/schema.gql'),
    typegen: path.join(__dirname, '../../generated/types.ts'),
  },
})

const server = new ApolloServer({
  schema,
})

export const config = {
  api: { bodyParser: false },
}

export default server.createHandler({
  path: '/api/graphql',
})

// import { prisma } from '../lib/prisma'
// import faker from 'faker'

// export async function createUser() {
//   const email = faker.internet.email()
//   await prisma.user.create({
//     data: {
//       email: faker.internet.email(),
//       name: faker.name.firstName(),
//       avatarUrl: 'https://i.pravatar.cc/150?u=' + email,
//     },
//   })
// }
