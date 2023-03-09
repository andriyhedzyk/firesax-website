import React, { useState, useEffect } from 'react';

import Logo from '../img/header/logo1.png';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Socials from './Socials';

// import link
import { Link } from 'react-router-dom'

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })

  return (
    <header
      className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center
         fixed top-0 w-full text-white z-50 transition-all duration-300`}>
      <div className="container mx-4 lg:mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link to={'/'} className="text-white hover:text-accent cursor-pointer">
          <img className="w-[180px] pt-0 lg:pt-6 lg:w-[250px]" src={Logo} alt="" />
        </Link>
        {/* nav */}
        <nav className="hidden lg:flex justify-items-center">
          <Nav />
        </nav>
        {/* socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* Nav Mobile */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
