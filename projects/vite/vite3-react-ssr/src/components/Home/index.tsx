import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './index.css'

interface IAppProps {
  data?: typeof window.__SSR_DATA__
}

const Home: React.FC<IAppProps> = (props) => {
  const { data } = props
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h5>hydrate数据</h5>
      <div>user: {data?.user} </div>
      <div>date: {data?.date} </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
