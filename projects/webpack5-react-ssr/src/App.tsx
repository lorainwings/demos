import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [isActivity, setIsActivity] = useState(false)

  const handleClick = () => {
    setIsActivity(!isActivity)
  }

  return (
    <div>
      <h3 className={`main ${1 ? 'activate' : 'deactivate'}`}>Hello World</h3>
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default App
