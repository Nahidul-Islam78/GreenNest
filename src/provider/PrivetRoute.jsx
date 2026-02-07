import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../component/Loading';

const PrivetRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return children
  } else {
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
  }


};

export default PrivetRoute;