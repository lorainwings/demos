import { createSlice } from '@reduxjs/toolkit'

interface ITodo {
  id: number
  name: string
  desc: string
}

const TODOS_FEATURE_KEY = 'todos'
const { reducer: TodosReducer, actions } = createSlice<ITodo>({
  name: TODOS_FEATURE_KEY,
  initialState: [] as ITodo[],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addTodo } = actions
export default TodosReducer
