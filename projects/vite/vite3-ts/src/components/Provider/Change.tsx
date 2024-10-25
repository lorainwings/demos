import { useStateValue } from '../../store/zustand/stateContext'

const ChangeTheme = () => {
  const [state, dispatch] = useStateValue()

  return (
    <div>
      <h1>Counter: {state?.color}</h1>
      <button
        onClick={() =>
          dispatch?.({
            type: 'LIGHT',
            payload: {
              color: 'white',
              font: 'black'
            }
          })
        }
      >
        Change Light
      </button>
      <button
        onClick={() =>
          dispatch?.({
            type: 'DARK',
            payload: {
              color: 'black',
              font: 'white'
            }
          })
        }
      >
        Change Dark
      </button>
    </div>
  )
}

export default ChangeTheme
