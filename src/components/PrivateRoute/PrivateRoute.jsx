import React from 'react';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ element, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
