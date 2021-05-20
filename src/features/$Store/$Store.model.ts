import { Instance, types } from 'mobx-state-tree'
import { createContext } from 'react'

export const $Store = types.model('$Store', {})

export interface I$Store extends Instance<typeof $Store> {}

export const store = $Store.create({})

export const StoreProvider = createContext<I$Store>(store).Provider

window.store = store

export const getStore = (): I$Store => store
