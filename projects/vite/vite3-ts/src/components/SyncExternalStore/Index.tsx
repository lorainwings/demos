import { useSyncExternalStore } from 'react'
import { combineReducers, legacy_createStore as createStore } from 'redux'

const reducer = (state = 1, action: any) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'DEL':
      return state - 1
    default:
      return state
  }
}

/* 注册reducer,并创建store */
const rootReducer = combineReducers({ count: reducer })
const store = createStore(rootReducer, { count: 1 })

const SyncExternalStore: React.FC<any> = () => {
  // 订阅
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.getState().count
  )

  return (
    <>
      <div>useSyncExternalStore</div>
      <div>数据源： {state}</div>
      <button onClick={() => store.dispatch({ type: 'ADD' })}>加1</button>
      <button
        style={{ marginLeft: 8 }}
        onClick={() => store.dispatch({ type: 'DEL' })}
      >
        减1
      </button>
    </>
  )
}

export default SyncExternalStore
