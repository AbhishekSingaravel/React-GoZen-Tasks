import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = /* logic to check if the user is authenticated */ true;

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
