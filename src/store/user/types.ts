export const userStateName = 'user'

export type UserState = {
  email: string | null
  isLoggedOut: boolean
}

export type StoreWithUserState = {
  [userStateName]: UserState
}
