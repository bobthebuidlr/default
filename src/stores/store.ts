import { GetState, SetState } from 'zustand'

const store = (set: SetState<any>, get: GetState<any>) => ({
    test: 'test',
})

export default store
