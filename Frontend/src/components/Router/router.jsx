import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignUp from '../pages/SignUp';
import Login from '../pages/login';
import Remedies from '../pages/Remedies';
import RemedyForm from '../pages/RemedyForm';
import Logout from '../pages/logout';
import Profile from '../pages/Profile';
import User from "../pages/User"

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/create" element={<RemedyForm/>} />
        <Route path="/logout" element={<Logout/>} />
        
        <Route path='/user' element={<User/>}>
             <Route path='create' element={<RemedyForm/>} />
             <Route path='profile' element={<Profile/>} />

        </Route>
        
      </Routes>
    </div>
  );
}

export default Router;
