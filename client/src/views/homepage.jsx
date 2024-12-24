import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../hooks/useGetLOgOut'; // Your logout function

const HomePage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication state from Redux

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
      
      <p className="text-center text-xl mt-4">
        {isAuthenticated ? 'You are logged in' : 'You are not logged in'}
      </p>

      {/* Conditionally render the Logout button only if the user is logged in */}
      {isAuthenticated && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
