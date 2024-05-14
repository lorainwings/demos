// @ts-nocheck

// 对React进行集成
export function useStore<TState, StateSlice>(
  api: WithReact<StoreApi<TState>>,
  selector: (state: TState) => StateSlice = api.getState as any,
  equalityFn?: (a: StateSlice, b: StateSlice) => boolean
) {

  // 利用useSyncExternalStoreWithSelector，对store里的所有数据进行选择性的分片
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  )

  useDebugValue(slice)
  return slice
}
