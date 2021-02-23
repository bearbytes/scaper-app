import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'

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
      // Copy the `id` prop from the token/user to the session
      session.user.id = user.id
      return session
    },
  },
}

// Since we add the `id` prop to the session user, we want to make it available
// to consumers of `getSession` or `useSession`.
declare module 'next-auth' {
  export interface User {
    id: string
  }
}
