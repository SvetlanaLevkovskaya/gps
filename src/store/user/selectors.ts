import { StoreWithUserState, UserState, userStateName } from './types'

const getState = (store: StoreWithUserState): UserState => store[userStateName]

export const getEmail = (s: StoreWithUserState): string | null => getState(s).email

export const isLoggedOut = (s: StoreWithUserState): boolean => getState(s).isLoggedOut
