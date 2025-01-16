import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location  = useLocation();
    if(loading)
    {
        return <div className='text-center'>
              <Spinner aria-label="Large spinner example" size="lg" />

        </div>
    }

    if(user)
    {
        return children;
    }

  return (
    <Navigate to="/login" state={{from:location}} replace ></Navigate>
  )
}

export default PrivateRoute