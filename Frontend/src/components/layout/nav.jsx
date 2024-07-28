import React from 'react'
import {Link} from "react-router-dom"
function nav() {
  return (
    <div>
      <div className='w-[100vw] h-[10vh] bg-blue-900'>
         <div className=' h-full flex justify-evenly items-center text-white'>
          <h1>Home remedies</h1>
          <ul className='flex gap-10'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/remedies">Remedies</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
          </ul>
         </div>
      </div>
    </div>
  )
}

export default nav
