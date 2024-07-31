import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';

function Nav() {
  const { isLoggedin , user } = useAuth();

  return (
    <div>
      <div className='w-[100vw] h-[10vh] bg-blue-900'>
        <div className='h-full flex justify-evenly items-center text-white'>
          <h1>Home Remedies</h1>
          <ul className='flex gap-10'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/remedies">Remedies</Link></li>
            {isLoggedin ? (
              <>
                {user && user.isAdmin ? (
                  <li><Link to="/admin/profile">Profile</Link></li>
                ) : user && user.isDoctor ? (
                  <li><Link to="/doctor/profile">Profile</Link></li>
                ) : (
                  <li><Link to="/user/profile">Profile</Link></li>
                )}
                <li><Link to="/logout">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
