import React from 'react'
import { useNavigate, NavLink, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

function User() {
  const {user} = useAuth()
  if (user && !user.isDoctor || !user ) {
    return <Navigate to="/" />;
  } 
  
  return (
    <div className='flex'>
    <div className='w-48 min-h-[90vh] bg-transparent p-4 flex flex-col border-r-2 mr-4'>
      <div className='flex items-center gap-2'>
        <NavLink className="font-bold text-2xl" to="/doctor/profile">profile</NavLink> 
      </div>
      <br />
      <div className='flex items-center gap-2'>

        <NavLink className="font-bold text-2xl" to="/doctor/create">Create</NavLink> 
      </div>
      <br />
      <div className='flex items-center gap-2'>
        <NavLink className="font-bold text-2xl" to="/doctor/myremedy">My Remedy</NavLink> 
      </div>
      <br />
      
      <div className='flex items-center gap-2'>
        <NavLink className="font-bold text-2xl" to="/doctor/verifyremedy">Verify Remedies</NavLink> 
      </div>

      <div className='flex items-center gap-2'>
        <NavLink className="font-bold text-2xl" to="/doctor/requests">User's Requests</NavLink> 
      </div>  

      <br />
    </div>
    <Outlet />
  </div>
  )
}

export default User
