import { UserState } from './types'

export const userInitialState: UserState = {
  email: localStorage.getItem('email'),
  isLoggedOut: false,
}
