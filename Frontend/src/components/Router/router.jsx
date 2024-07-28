import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignUp from '../pages/SignUp';
import Login from '../pages/login';
import Remedies from '../pages/Remedies';

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
      </Routes>
    </div>
  );
}

export default Router;
