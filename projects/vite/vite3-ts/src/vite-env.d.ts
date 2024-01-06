/// <reference types="vite/client" />

interface BearsType {
  bears: number
  incrementBears: () => void
  decrementBearsByStep: (step?: number) => void
  asyncIncrementBears: () => void
}
