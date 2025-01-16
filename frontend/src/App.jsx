import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
    <AuthProvider>
      {/* Children */}
      <main className="bg-gray-300 h-screen flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </AuthProvider>
      
    </>
  )
}

export default App