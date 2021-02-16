export type User = {
  id: string
  name: string
}

export type ApiFunctions = {
  listUsers(): Promise<User[]>
  createUser(): Promise<User>
}
