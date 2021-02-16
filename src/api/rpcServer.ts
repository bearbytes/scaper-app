import { NextApiRequest, NextApiResponse } from 'next'
import { ApiFunctions } from './types'

export function rpcServer(impl: ApiFunctions) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { functionName, args } = JSON.parse(req.body)
    const result = await impl[functionName](...args)
    res.write(JSON.stringify(result))
  }
}
