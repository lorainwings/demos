import { useRef } from 'react'
import type { DependencyList } from 'react'

const depsAreSame = (
  oldDeps: DependencyList,
  deps: DependencyList
): boolean => {
  if (oldDeps === deps) return true

  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false
  }

  return true
}

/**
 * 强化 useMemo 和 useRef，用法与 useMemo 一样，一般用于性能优化
 * useCreation 如何增强：
 * useMemo 的第一个参数 fn，会缓存对应的值，那么这个值就有可能拿不到最新的值，而 useCreation 拿到的值永远都是最新值；
 * useRef 在创建复杂常量的时候，会出现潜在的性能隐患（如：实例化 new Subject），但 useCreation 可以有效地避免。
 * @param fn
 * @param deps
 * @returns
 */
const useCreation = <T>(fn: () => T, deps: DependencyList) => {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false
  })

  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps
    current.obj = fn()
    current.initialized = true
  }

  return current.obj as T
}

export default useCreation
