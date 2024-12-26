import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landaing = lazy(() => import('./components/Landaing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loaging....."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading...."}><Landaing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Appbar = () => {
  const navigate = useNavigate()
  return <div>
    <button onClick={() => {
      navigate("/")
    }}>
      Landing Page
    </button>
    <button onClick={() => {
      navigate("/dashboard")
    }}>
      Dashboard Page
    </button>
  </div>
}

export default App
