import { Dispatch, createContext, useContext } from 'react'
import type { Actions, InitialState } from './index'

type ProvideValue = [InitialState?, Dispatch<Actions>?]

// 创建一个全局可访问的context, 此处泛型定义Provide的value属性接收的参数类型
export const StateContext = createContext<ProvideValue>([])

// React Hooks提供了useContext来访问context，可以在使用 Consumer 的时候不必包裹 Children
export const useStateValue = () => useContext(StateContext)
