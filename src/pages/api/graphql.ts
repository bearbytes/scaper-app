import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../graphql/schema'

export const config = { api: { bodyParser: false } }

const server = new ApolloServer({ schema })
export default server.createHandler({ path: '/api/graphql' })
