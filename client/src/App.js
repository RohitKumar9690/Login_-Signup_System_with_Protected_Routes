import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate from 'react-router-dom'
import { useSelector } from 'react-redux'; // Use this to access the Redux store
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import HomePage from './views/homepage';

function App() {
  // Access the authentication state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
