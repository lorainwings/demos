import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../App'))
const Test = lazy(() => import('../views/Test/Test'))
const HookTest = lazy(() => import('@/views/HooksTest/HooksTest'))

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/hook-test" element={<HookTest />} />
      </Routes>
    </Suspense>
  </Router>
)
