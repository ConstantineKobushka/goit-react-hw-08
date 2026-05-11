import React from 'react';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ element, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : element;
};

export default RestrictedRoute;
