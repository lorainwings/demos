import { FC } from 'react'
import { useBoundStore } from '@/zustand-store'

export const Demo: FC = () => {
  // 调用useStore,同时提供一个选择数据的选择器
  // state => 要访问的数据
  const bears = useBoundStore((state) => state.bears)
  const incrementBears = useBoundStore((state) => state.incrementBears)
  const decrementBearsByStep = useBoundStore(
    (state) => state.decrementBearsByStep
  )
  const asyncIncrementBears = useBoundStore(
    (state) => state.asyncIncrementBears
  )

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
