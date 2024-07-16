export const userStateName = 'user'

export type UserState = {
  email: string | null
}

export type StoreWithUserState = {
  [userStateName]: UserState
}
