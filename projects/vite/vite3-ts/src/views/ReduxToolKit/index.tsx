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
  const [fn, setFn] = useState(() => ({ foo: 1, bar: 2 }))
  const ref = useRef<IStateRef | null>(null)

  useEffect(() => {
    console.log('---UseEffect获取最新值', a, b)
  }, [a, b])

  useEffect(() => {
    console.log('fn', fn)
    console.log('setFn', setFn)
  })

  return (
    <>
      <button>
        {a}-{b} 异步执行
      </button>
      <button onClick={() => setFn({ foo: 111, bar: 222 })}>调用setFn</button>
    </>
  )
}

export default Test
