import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

function Nav() {
  const { isLoggedin , user } = useAuth();

  return (
    <div>
      <div className='w-[100vw] h-[10vh] bg-transparent  fixed z-10 '>
        <div className='h-full flex justify-evenly items-center text-white  font-semibold text-2xl font-semibold '>
          <h1 className='text-gray-100'>HomeRemedy.in</h1>
          <ul className='flex gap-10'>
            <li className=' hover:text-yellow-300'><Link to="/">Home</Link></li>
            <li className=' hover:text-yellow-300'><Link to="/about">About</Link></li>
            <li className=' hover:text-yellow-300'><Link to="/contact">Contact</Link></li>
            <li className=' hover:text-yellow-300'><Link to="/remedies">Remedies</Link></li>
            {isLoggedin ? (
              <>
                {user && user.isAdmin ? (
                  <li className='hover:text-yellow-300'><Link to="/admin/profile">Profile</Link></li>
                ) : user && user.isDoctor ? (
                  <li className='hover:text-yellow-300'><Link to="/doctor/profile">Profile</Link></li>
                ) : (
                  <li className='hover:text-yellow-300'><Link to="/user/profile">Profile</Link></li>
                )}
                <li className='hover:text-yellow-300'><Link to="/logout">Logout</Link></li>
              </>
            ) : (
              <>
                <li className='hover:text-yellow-300'><Link to="/login">Login</Link></li>
                <li className='hover:text-yellow-300'><Link to="/signup">SignUp</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
