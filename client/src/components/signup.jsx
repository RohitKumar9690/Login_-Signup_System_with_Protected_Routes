import React, { useState } from 'react';
import { SignupAPI } from '../hooks/useGetSignup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  }); // Single state for all form fields

  // Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;  // Destructure name and value from the input
    setFormData((prevState) => ({
      ...prevState,  // Preserve previous state
      [name]: value  // Update the current field
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the signup API with formData
      const response = await SignupAPI(formData.name, formData.email, formData.phone, formData.password); 
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log('Signing up with:', formData);  // Log the entire formData object
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6 animate__animated animate__fadeIn">
          Sign Up Here
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            />
          </div>

          {/* Phone field */}
          <div>
            <label htmlFor="phone" className="block text-gray-600">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            />
          </div>

          {/* Password field */}
          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
          >
            Sign Up
          </button>
          <p>Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
