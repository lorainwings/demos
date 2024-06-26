import { useEffect, useRef } from 'react'

/**
 *
 * 获取当前组件是否卸载，这个钩子的思路也很简单，只需要利用 useEffect 的状态，来保存对应的值就 ok 了
 */
const useUnmountedRef = (): { readonly current: boolean } => {
  const unmountedRef = useRef<boolean>(false)

  useEffect(() => {
    unmountedRef.current = false
    return () => {
      unmountedRef.current = true
    }
  }, [])

  return unmountedRef
}

export default useUnmountedRef
