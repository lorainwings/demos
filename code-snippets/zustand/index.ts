// @ts-nocheck

import { useStore } from './react'
import { createStore } from './vanilla'

const createImpl = <T>(createState: StateCreator<T, [], []>) => {
  // 创建store
  const api =
    typeof createState === 'function' ? createStore(createState) : createState

  // 将store和react进行集成
  const useBoundStore: any = (selector?: any, equalityFn?: any) =>
    useStore(api, selector, equalityFn)

  Object.assign(useBoundStore, api)

  return useBoundStore
}


export const create = (<T>(createState: StateCreator<T, [], []> | undefined) => createState ? createImpl(createState) : createImpl) as Create

