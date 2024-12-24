import React, { useState } from 'react';
import useLoginApi from '../hooks/UseGetLogin';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();

const loginApi = useLoginApi(); // Use the custom hook to get the login function
  
const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Ensure username and password are not empty
  if (!username || !password) {
    console.log('Please enter both username and password');
    return;
  }

  try {
    // Wait for the login response
    const response = await loginApi(username, password);
    console.log('Login successful:', response);
    if(response.status === 200){
   // Assuming successful login, navigate to the home page (or wherever needed)
   navigate('/');  // Make sure `navigate` is available and set up correctly
    }
 
  } catch (error) {
    // Handle any errors that occur during login
    console.error('Login failed:', error);
  }
  
  // For debugging
  console.log('Logging in with:', username, password);
};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6 ">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6 animate__animated animate__fadeIn">Login Here</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email or Phone"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* <div className="text-center text-gray-600">
          <p className="text-sm">Or log in with:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center justify-center space-x-2 text-gray-700 cursor-pointer hover:text-blue-500 transition duration-200">
              <FaGoogle size={24} />
              <span>Google</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600 cursor-pointer hover:text-blue-800 transition duration-200">
              <FaFacebook size={24} />
              <span>Facebook</span>
            </div>
          </div>
        </div> */}
        <p>Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
