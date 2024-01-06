import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode> 用于验证两次调用组件后是相同的组件, 所以会调用两次, 此处我们删掉他
  // <React.StrictMode>
  <Router />
  // </React.StrictMode>
)
