import { ApiFunctions } from './types'

export const rpcClient: ApiFunctions = new Proxy(
  {},
  {
    get(target, functionName, receiver) {
      return async (...args: any[]) => {
        const response = await fetch('http://localhost:3000/api/rpc', {
          method: 'POST',
          body: JSON.stringify({ functionName, args }),
        })
        return response.json()
      }
    },
  },
) as any
