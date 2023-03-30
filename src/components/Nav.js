import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav>
      <div className="flex space-x-8 capitalize text-[15px]">
        <motion.div whileHover={{ scale: 1.15 }}>
          <Link
            to={'/'}
            className="text-white hover:text-accent cursor-pointer"
          >
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.15 }}>
          <Link
            to={'/about'}
            className="text-white hover:text-accent cursor-pointer"
          >
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.15 }}>
          <Link
            to={'/portfolio'}
            className="text-white hover:text-accent cursor-pointer"
          >
            Portfolio
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.15 }}>
          <Link
            to={'/contacts'}
            className="text-white hover:text-accent cursor-pointer"
          >
            Contacts
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
