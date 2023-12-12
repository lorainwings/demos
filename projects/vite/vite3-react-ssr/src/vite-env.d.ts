/// <reference types="vite/client" />

interface Window {
  __SSR_DATA__: {
    user: string
    date: string
  }
}
