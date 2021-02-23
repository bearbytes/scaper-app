import { PrismaClientInitializationError } from '@prisma/client/runtime'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'
import { db } from '../../../lib/db'

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID!!,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET!!,
    }),
  ],
  callbacks: {
    async session(session, user) {
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token
    },
  },
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await NextAuth(req, res, options)
}
