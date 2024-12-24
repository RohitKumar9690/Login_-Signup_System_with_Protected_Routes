import { createSlice } from '@reduxjs/toolkit';

// Initial state for auth
const initialState = {
  user: null, // Initially, no user is logged in
  isAuthenticated: false,
  token: null
};

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set user data and mark the user as authenticated
    loginSuccess: (state, action) => {
      state.user = action.payload; // Store user details
      state.isAuthenticated = true; // Set authenticated to true
      state.token = action.payload.token;
    },

    // Action to logout the user
    logoutSuccess: (state) => {
      state.user = null; // Clear user data
      state.isAuthenticated = false; // Set authenticated to false
      state.token = null;
    },
  },
});

// Export actions and reducer
export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
