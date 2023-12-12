// entry-server.ts
// 导出 SSR 组件入口
import './index.css'
import { App } from './App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

export interface IResponse {
  user: string
  date: string
}

function renderServerEntry(url: string, data: IResponse) {
  return renderToString(
    <StaticRouter location={url}>
      <App data={data} />
    </StaticRouter>
  )
}

async function fetchData(): Promise<IResponse> {
  return { user: 'lorain', date: `2022年10月08日23:20:12` }
}

export { renderServerEntry, fetchData }
