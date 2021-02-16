import faker from 'faker'
import { rpcServer } from '../../api/rpcServer'
import { prisma } from '../../lib/prisma'

export default rpcServer({
  createUser() {
    const email = faker.internet.email()
    return prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.name.firstName(),
        avatarUrl: 'https://i.pravatar.cc/150?u=' + email,
      },
    })
  },

  listUsers() {
    return prisma.user.findMany()
  },
})
