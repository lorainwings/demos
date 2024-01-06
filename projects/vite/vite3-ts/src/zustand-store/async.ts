// store.ts
import { create } from 'zustand'
type Data = {
  id: string
  full_name: string
  html_url: string
}

export interface DataState {
  data: Data[]
  status: string
  getData: (query: string) => void
}

export const useDataStore = create<DataState>()((set, get) => ({
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
}))
