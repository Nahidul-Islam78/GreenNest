import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children
  } else {
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
  }


};

export default PrivetRoute;