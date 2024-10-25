// store.ts
import type { StateCreator } from 'zustand'

export const createDataSlice: StateCreator<DataState> = (set, get) => ({
  data: [],
  status: 'Idle',
  getData: async (query) => {
    set({ status: 'Loading', data: [] })
    console.log('get', get())
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    )
    const data = await res.json()

    set({ status: 'Success', data: data.items })
    console.log('get', get())
  }
})
