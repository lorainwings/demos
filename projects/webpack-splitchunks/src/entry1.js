import React from 'react'
import ReactDOM from 'react-dom'
import $ from './assets/jquery'
import OrgChart from './assets/orgchart'

const App = () => {
  let Page1 = null

  import(/* webpackChunkName: "page1" */ './routes/page1').then((comp) => {
    Page1 = comp
  })
  console.log($, OrgChart)
  return (
    <div>
      <Page1></Page1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
