import React from 'react'
import { HashRouter as Router, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <Router basename="/Module-8-Assessment-1">
        <AuthProvider>
          {/* Children */}
          <main className="bg-gray-300 h-screen flex flex-col items-center justify-center">
            <Outlet />
          </main>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App;
