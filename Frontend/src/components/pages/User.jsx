import React from 'react'
import { useNavigate, NavLink, Outlet, Navigate } from 'react-router-dom';

import { HiUsers } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from '../Store/useAuth';
function User() { 
  const {isLoggedin} = useAuth() 
  if(!isLoggedin) {
    return <Navigate to="/"/>
  }
  return (
    <div className='flex'>
    <div className='w-48 min-h-[90vh] bg-transparent p-4 flex flex-col border-r-2 mr-4'>
      <div className='flex items-center gap-2'>
        <FaHome className='text-2xl' />
        <NavLink className="font-bold text-2xl" to="/user/profile">profile</NavLink> 
      </div>
      <br />
      <div className='flex items-center gap-2'>
        <HiUsers className='text-2xl' />  
        <NavLink className="font-bold text-2xl" to="/user/create">Create</NavLink> 
      </div>
      <br />
      <div className='flex items-center gap-2'>
        <IoMdContact className='text-2xl' />
        <NavLink className="font-bold text-2xl" to="/user/myremedy">My Remedy</NavLink> 
      </div>
      <br />
      <div className='flex items-center gap-2'>
        <MdMiscellaneousServices className='text-2xl' />
        <NavLink className="font-bold text-2xl" to="/user/contact">Contact To Specialist</NavLink> 
      </div>

      <div className='flex items-center gap-2'>
        <MdMiscellaneousServices className='text-2xl' />
        <NavLink className="font-bold text-2xl" to="/user/bookmarks">Saved</NavLink> 
      </div>
      <br />
    </div>
    <Outlet />
  </div>
  )
}

export default User
