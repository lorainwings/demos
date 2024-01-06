import { FC } from 'react'
import useStore from '@/zustand-store/bear'

export const Demo: FC = () => {
  // 调用useStore,同时提供一个选择数据的选择器
  // state => 要访问的数据
  const bears = useStore((state) => state.bears)
  const incrementBears = useStore((state) => state.incrementBears)
  const decrementBearsByStep = useStore((state) => state.decrementBearsByStep)
  const asyncIncrementBears = useStore((state) => state.asyncIncrementBears)

  return (
    <>
      <h3>Demo组件</h3>
      <p>小熊的数量是：{bears}</p>
      <button onClick={incrementBears}>添加小熊</button>
      <button onClick={() => decrementBearsByStep()}>减少小熊</button>
      <button onClick={asyncIncrementBears}>异步添加小熊</button>
    </>
  )
}
