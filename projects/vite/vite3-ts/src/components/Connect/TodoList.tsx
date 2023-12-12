import { useStateValue } from '../../store/stateContext'
import { connect } from './Index'
import './style.css'

const TodoList = (props: any) => {
  return (
    <>
      <h3>Todos</h3>
      <button onClick={() => props.onAddTodo()}>添加todo</button>
      <ul className="item-container">
        {props.todos.map((todo: any) => (
          <li key={todo.id} className="item">
            <span>{todo.text}</span>
            <button onClick={() => props.onRemoveTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: any) => ({
  onRemoveTodo: (id: any) => {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  },
  onAddTodo: () => {
    const genId = () => `${Math.random().toString(36).slice(2)}`
    const id = genId()
    dispatch({
      type: 'ADD_TODO',
      payload: { id, text: `任务${id}: 已添加` }
    })
  }
})

const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default () => {
  const [state, dispatch] = useStateValue()
  return (
    <>
      <ConnectedTodoList {...state} dispatch={dispatch} />
    </>
  )
}
