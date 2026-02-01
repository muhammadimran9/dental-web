import { auth, db } from './firebase'

export const checkAuthAndDb = (callback: () => void) => {
  if (!auth || !db) return
  callback()
}

export const withAuthCheck = (fn: Function) => {
  return (...args: any[]) => {
    if (!auth || !db) return
    return fn(...args)
  }
}
