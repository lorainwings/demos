// @ts-nocheck

// 生成store闭包，并返回api
// createState是使用者在创建store时传入的一个函数
const createStoreImpl = (createState) => {
  type TState = ReturnType<typeof createState>;
  type Listener = (state: TState, prevState: TState) => void;
  // 这里的state就是store，是个闭包，通过暴露的api访问
  let state: TState;
  const listeners: Set<Listener> = new Set();

  // setState的partial参数支持对象和函数，replace指明是全量替换store还是merge
  // 更新是浅比较
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    // 只有在相等的时候才更新，然后触发listener
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state =
        replace ?? typeof nextState !== "object"
          ? (nextState as TState)
          : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    // Unsubscribe
    return () => listeners.delete(listener);
  };

  // destory之后将被去掉，不用看
  const destroy: StoreApi<TState>["destroy"] = () => {
    if (import.meta.env?.MODE !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };

  const api = { setState, getState, subscribe, destroy };
  // 这里就是官方示例里的set,get,api
  state = createState(setState, getState, api);
  return api as any;
};

// 调用createStore的时候理论上createState函数是一定存在的
// 但是为了ts类型定义，createStore<T>()(()=>{}) 所以会出现手动调用空值的情况
export const createStore = ((createState) =>
  createState ? createStoreImpl(createState) : createStoreImpl) as CreateStore;
export function useStore<TState, StateSlice>(
  api: WithReact<StoreApi<TState>>,
  selector: (state: TState) => StateSlice = api.getState as any,
  equalityFn?: (a: StateSlice, b: StateSlice) => boolean
) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}

const createImpl = (createState) => {
  if (
    import.meta.env?.MODE !== "production" &&
    typeof createState !== "function"
  ) {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  // 直接注入自定义的store不会注入api，需要自己在注入的store里自行实现
  const api =
    typeof createState === "function" ? createStore(createState) : createState;

  const useBoundStore: any = (selector?: any, equalityFn?: any) =>
    useStore(api, selector, equalityFn);

  Object.assign(useBoundStore, api);

  return useBoundStore;
};

export const create = (<T>(createState: StateCreator<T, [], []> | undefined) =>
  createState ? createImpl(createState) : createImpl) as Create;
