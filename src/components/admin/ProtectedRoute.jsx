import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const adminSession = localStorage.getItem('adminSession');
  
  if (!adminSession) {
    return <Navigate to="/admin/login" replace />;
  }

  const session = JSON.parse(adminSession);
  
  if (!session.isLoggedIn || session.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;