import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'; 

const AuthRequire = ({children}) => {
    const location = useLocation();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
      return <Navigate to='/' state={{from:location}} />
  }
  return children
}

export default AuthRequire