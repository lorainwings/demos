import { useRef } from 'react'

/**
 * 永远返回最新的值，避免异步无法获取最新的状态值
 * @param value
 * @returns
 */
const useLatest = <T>(value: T): { readonly current: T } => {
  const ref = useRef(value)
  ref.current = value

  return ref
}

export default useLatest
