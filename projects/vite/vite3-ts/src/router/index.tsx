import React, { StrictMode, Suspense /* , lazy */ } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('@/App'))
const Test = loadable(() => import('@/views/Test/Test'))
const HookTest = loadable(() => import('@/views/HooksTest/HooksTest'))
const Zustand = loadable(() => import('@/views/Zustand'))

// react.lazy 只支持默认导出的组件, 所以对于具名导出需要借用loadable

export default () => (
  <StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/hook-test" element={<HookTest />} />
          <Route path="/zustand" element={<Zustand />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>
)
