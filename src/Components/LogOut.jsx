import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router'

const LogOut = () => {
    const {logOut} = useContext(AuthContext)
   const location = useLocation();
   const navigate = useNavigate();
   const from  = location.state?.from?.pathname || "/";
    const handleLogout = ()=>
    {
      logOut().then(()=>
    {
     alert('Sign-out successfully!!!');
     navigate(from,{replace:true});
    }).catch((error)=>
    {
    
     });
    }
  return (
    <div className='h-screen bg-teal-100 flex item-center justify-center '>
        <button className='bg-red-700 px-8 py-2 w-[200px] h-16 flex justify-center mt-[300px] text-white rounded items-center' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default LogOut