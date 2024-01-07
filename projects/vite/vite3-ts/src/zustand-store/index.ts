import { create } from 'zustand'

import { createDataSlice } from './async'
import { createBearSlice, createCountSlice, createNumberSlice } from './bear'

export const useBoundStore = create<
  BearsType & DataState & CountState & NumberState
>((...args) => ({
  ...createBearSlice(...args),
  ...createDataSlice(...args),
  ...createCountSlice(...args),
  ...createNumberSlice(...args)
}))
