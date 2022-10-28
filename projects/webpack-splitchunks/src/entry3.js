import React from 'react'
import ReactDOM from 'react-dom'
import OrgChart from './assets/orgchart'

const App = () => {
  console.log('%c------>[LOG:]orgchart', 'color: fuchsia', OrgChart)
  return (
    <div>
      <div>this is entry 3;</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

