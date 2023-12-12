import React, { useReducer } from 'react'
import { StateContext } from '../../store/stateContext'
import type { Actions, InitialState } from '../../store'

interface ProviderInterface {
  reducer: (state: InitialState, action: Actions) => InitialState
  initialState: InitialState
  children: React.ReactNode
}

export const StateProvider: React.FC<ProviderInterface> = ({
  reducer,
  initialState,
  children
}) => {
  const value = useReducer(reducer, initialState)

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
