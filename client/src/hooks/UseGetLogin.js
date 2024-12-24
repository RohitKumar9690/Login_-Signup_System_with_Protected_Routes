// src/hooks/useLoginApi.js
import { useDispatch } from 'react-redux';
import axiosPrivate from '../axios/privateAxios'; // Your axios instance
import { loginSuccess } from '../Redux/auth/authSlice'; // The Redux action to store login data

const useLoginApi = () => {
  const dispatch = useDispatch(); // Correctly using useDispatch inside a hook

  const loginApi = async (username, password) => {
    try {
      const response = await axiosPrivate.post('/api/user/login', {
        email: username, // Send email (username) as the request body
        password: password, // Send password
      });

      // Dispatch login success with the data from the API response
      dispatch(loginSuccess(response.data));
      console.log(response); // Log the response to see the data returned
      return response; // Return the response for further processing
    } catch (error) {
      // Handle error here, log or show a message to the user
      console.error('Login failed:', error.response ? error.response.data : error);
    }
  };

  return loginApi; // Return the loginApi function to be used in components
};

export default useLoginApi;
