import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { request } from 'graphql-request'
import useSWR from 'swr'

function fetcher<T, V>(
  document: TypedDocumentNode<T, V>,
  variables: V,
): Promise<T> {
  return request('/api/graphql', document, variables)
}

export function useQuery<T, V>(
  document: TypedDocumentNode<T, V>,
  variables: V,
) {
  const { data } = useSWR([document, variables], fetcher)
  return data as T | undefined
}

export function useMutation<T, V>(document: TypedDocumentNode<T, V>) {
  return async function execute(variables: V) {
    return fetcher(document, variables)
  }
}
