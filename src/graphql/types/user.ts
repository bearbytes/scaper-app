import faker from 'faker'
import { idArg, list, mutationField, objectType, queryField } from 'nexus'
import { db } from '../../lib/db'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('email')
    // t.string('avatarUrl')
  },
})

export const users = queryField('users', {
  type: list(User),
  resolve() {
    return db.user.findMany()
  },
})

export const createUser = mutationField('createUser', {
  type: User,
  resolve() {
    const email = faker.internet.email()
    return db.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.name.firstName(),
        avatarUrl: 'https://i.pravatar.cc/150?u=' + email,
      },
    })
  },
})

export const deleteUser = mutationField('deleteUser', {
  type: User,
  args: { id: idArg() },
  resolve(_, { id }) {
    return db.user.delete({ where: { id } })
  },
})
