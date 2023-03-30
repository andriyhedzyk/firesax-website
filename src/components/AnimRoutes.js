import React from 'react';
//import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contacts';
import BookingPage from '../pages/BookingPage';
import Questions from '../pages/Questions';

//import routes and useLocation hook
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="sync">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
