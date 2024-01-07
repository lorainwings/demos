/// <reference types="vite/client" />

interface BearsType {
  bears: number
  incrementBears: () => void
  decrementBearsByStep: (step?: number) => void
  asyncIncrementBears: () => void
}

type Data = {
  id: string
  full_name: string
  html_url: string
}
interface DataState {
  data: Data[]
  status: string
  getData: (query: string) => void
}
interface CountState {
  count: number
  increaseCount: (by: number) => void
  resetCount: () => void
}

interface NumberState {
  number: number
  increaseNumber: (by: number) => void
  resetNumber: () => void
}
