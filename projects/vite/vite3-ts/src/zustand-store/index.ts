import { create } from 'zustand'

export interface CountState {
  count: number
  increase: (by: number) => void
  resetCount: () => void
}

export interface NumberState {
  number: number
  increase: (by: number) => void
  resetNumber: () => void
}

export const useCountStore = create<CountState>()((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  resetCount: () => set({ count: 0 })
}))

export const useNumberStore = create<NumberState>()((set) => ({
  number: 0,
  increase: (by) => set((state) => ({ number: state.number + by })),
  resetNumber: () => set({ number: 0 })
}))
