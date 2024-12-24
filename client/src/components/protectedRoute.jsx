import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'; // To access Redux state

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get auth state

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? ( // If the user is authenticated, render the component
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Otherwise, redirect to login page
        )
      }
    />
  );
};

export default ProtectedRoute;
