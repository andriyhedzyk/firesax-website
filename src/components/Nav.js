import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="flex space-x-8 capitalize text-[15px]">
        <Link to={'/'} className="text-white hover:text-accent cursor-pointer">
          Home
        </Link>
        <Link to={'/about'} className="text-white hover:text-accent cursor-pointer">
          About
        </Link>
        <Link to={'/portfolio'} className="text-white hover:text-accent cursor-pointer">
          Portfolio
        </Link>
        <Link to={'/contacts'} className="text-white hover:text-accent cursor-pointer">
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
