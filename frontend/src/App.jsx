import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <main className="bg-gray-300 h-screen flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </>
  )
}

export default App