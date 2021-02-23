import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { db } from '../../../lib/db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await NextAuth(req, res, options)
}

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID!!,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET!!,
    }),
  ],
  callbacks: {
    async jwt(token, user, account) {
      if (user && account) {
        // TODO does every provider have an `id` prop?
        token.id = `${account.provider}:${account.id}`
      }
      return token
    },
    async session(session, user) {
      const dbUser = await db.user.findUnique({
        where: { id: user.id },
      })

      // Copy the `id` prop from the token/user to the session
      session.user.id = user.id
      session.user.isSetup = dbUser != null
      return session
    },
  },
  pages: {},
}

// Since we add the `id` prop to the session user, we want to make it available
// to consumers of `getSession` or `useSession`.
declare module 'next-auth' {
  export interface User {
    id: string
    isSetup: boolean
  }
}
