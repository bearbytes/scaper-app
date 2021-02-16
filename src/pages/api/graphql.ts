import { ApolloServer } from 'apollo-server-micro'
import { graphqlSchema } from '../../graphql/schema'

export const config = {
  api: { bodyParser: false },
}

const server = new ApolloServer({
  schema: graphqlSchema,
})

export default server.createHandler({
  path: '/api/graphql',
})
