import { Link, Route, Routes } from 'react-router-dom'
import { type IResponse } from './entry-server'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages: any = import.meta.glob('./components/**/index.tsx', {
  eager: true
})

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/components\/(.*)\.tsx$/)![1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default
  }
})

export function App(props: { data: IResponse }) {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            flex: 1
          }}
        >
          {routes.map(({ name, path }) => {
            return (
              <li key={path} style={{ background: '#ddd' }}>
                <Link to={path}>&gt; 导航到{name.slice(0, -6)}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<RouteComp data={props.data} />}
            ></Route>
          )
        })}
      </Routes>
    </>
  )
}

