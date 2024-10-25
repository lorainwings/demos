export type Actions =
  | {
      type: 'DARK'
      payload: {
        color: string
        font: string
      }
    }
  | {
      type: 'LIGHT'
      payload: {
        color: string
        font: string
      }
    }
  | {
      type: 'ADD_TODO'
      payload: {
        todos: Record<string, any>[]
      }
    }
  | {
      type: 'REMOVE_TODO'
      payload: {
        todos: Record<string, any>[]
      }
    }

type ExtractActions<T extends Actions, U> = T extends T
  ? T['type'] extends U
    ? T
    : never
  : never

type ReturnReducer<T extends Actions['type']> = T extends 'DARK' | 'LIGHT'
  ? {
      type: T
      payload: { color: string; font: string }
    }
  : {
      type: T
      payload: { todos: Record<string, any>[] }
    }

export interface InitialState {
  count?: number
  message?: string
  color: string
  font: string
  todos: Record<string, any>[]
}

export const initialState = {
  count: 0,
  message: 'hello provider',
  color: 'black',
  font: 'white',
  todos: []
}

const changeTheme = (action: ExtractActions<Actions, 'LIGHT' | 'DARK'>) => {
  document.body.style.backgroundColor = action.payload.color
  document.body.style.color = action.payload.font
}

export function reducer(state: InitialState, action: any) {
  switch (action.type) {
    case 'DARK':
      changeTheme(action)
      return {
        ...state,
        ...action.payload
      }
    case 'LIGHT':
      changeTheme(action)
      return {
        ...state,
        ...action.payload
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.payload)
      }
  }
}
