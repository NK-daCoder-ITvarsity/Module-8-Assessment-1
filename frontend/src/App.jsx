import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Registration from './components/Registration';  // Import your Registration component
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router basename="/Module-8-Assessment-1">
        <AuthProvider>
          <main className="bg-gray-300 h-screen flex flex-col items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />  {/* Add a Home route */}
              <Route path="/registration" element={<Registration />} />  {/* Add the Registration route */}
            </Routes>
          </main>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
