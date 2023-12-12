// useUnmount
import { useEffect } from 'react'
import useLatest from '../useLatest'

/**
 * 只在组件卸载时的 hook
 * @param fn
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn)

  useEffect(
    () => () => {
      fnRef.current()
    },
    []
  )
}

export default useUnmount
