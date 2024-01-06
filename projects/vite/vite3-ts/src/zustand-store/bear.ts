import { create } from 'zustand'

const useStore = create<BearsType>()((set, get) => {
  // 返回的对象, 用于存储全局共享的数据或方法
  return {
    bears: 0,
    incrementBears: () => set((oldState) => ({ bears: oldState.bears + 1 })),
    //根据step的值让bears数量自减
    decrementBearsByStep: (step = 1) =>
      set((state) => ({ bears: (state.bears -= step) })),

    asyncIncrementBears: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // get()可以拿到store中的所有数据
      get().incrementBears()
    }
  }
})

export default useStore
