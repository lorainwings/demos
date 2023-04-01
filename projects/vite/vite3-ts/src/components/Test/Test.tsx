/* 使用React.FC定义组件 */
import { useState, useRef, type PropsWithChildren, useEffect } from 'react'

export interface IContainerProps {
  visible?: boolean
  controller?: () => void
}

interface IStateRef {
  a: number
  b: string
}

const Test: React.FC<IContainerProps> = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState('b')
  const ref = useRef<IStateRef | null>(null)

  function handleClickWithPromise() {
    setA(a + 1)
    setB('bb')
    ref.current = {
      a: a + 1,
      b: 'bb'
    }

    console.log('---UseRef获取最新值', ref.current.a, ref.current.b)

    Promise.resolve().then(() => {
      console.log('---Promise获取最新值', a, b)
    })
    setTimeout(() => {
      console.log('---SetTimeout获取最新值', a, b)
    })

    requestAnimationFrame(() => {
      console.log('---RequestAnimationFrame获取最新值', a, b)
    })

    setA((pre) => {
      console.log('---回调获取最新值', pre)
      return pre
    })
  }

  useEffect(() => {
    console.log('---UseEffect获取最新值', a, b)
  }, [a, b])

  return (
    <>
      <button onClick={handleClickWithPromise}>
        {a}-{b} 异步执行
      </button>
    </>
  )
}

export default Test
