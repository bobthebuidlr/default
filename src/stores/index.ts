import create, { StoreApi, UseBoundStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import store from './store'
import { Store } from './store.interface'

let useStore: UseBoundStore<StoreApi<Store>>

if (import.meta.env.VITE_ENV === 'dev') {
    useStore = create(devtools(store))
} else {
    useStore = create<Store>(store)
}

export default useStore
