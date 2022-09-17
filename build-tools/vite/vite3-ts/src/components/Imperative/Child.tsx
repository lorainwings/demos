import { useImperativeHandle, forwardRef } from 'react'
import { type IRefPayload } from './Parent'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IChildPropStruct {}
interface IExtendedRefPayload extends IRefPayload {
  disposer: () => void;
}

const Child = forwardRef<IRefPayload, IChildPropStruct>((props, ref) => {
  const internalController = () => {
    console.log('Internal Controller!')
  }
  useImperativeHandle<IRefPayload, IExtendedRefPayload>(
    ref,
    () => {
      return {
        controller: internalController,
        disposer: () => { console.log('disposer') },
      }
    },
    []
  )

  return <p>我是子组件,用于暴露方法和数据</p>
})

export default Child
