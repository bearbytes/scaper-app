import faker from 'faker'
import { rpcServer } from '../../api/rpcServer'
import { db } from '../../lib/db'

export default rpcServer({
  createUser() {
    const email = faker.internet.email()
    return db.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.name.firstName(),
        avatarUrl: 'https://i.pravatar.cc/150?u=' + email,
      },
    })
  },

  listUsers() {
    return db.user.findMany()
  },
})
