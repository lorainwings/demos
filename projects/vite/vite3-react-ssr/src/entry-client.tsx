// entry-client.ts
// 客户端入口文件
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'

// @ts-ignore
const data = window.__SSR_DATA__

ReactDOM.hydrateRoot(
  document.getElementById('app') as unknown as Document,
  <BrowserRouter>
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  </BrowserRouter>
)
