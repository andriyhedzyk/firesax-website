import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

import { navigation } from '../components/data';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="text-white xl:hidden">
      {/* nav open button */}
      <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>

      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'show' : ''}
        className="bg-primary shadow-2xl w-60 absolute top-0 right-0 max-w-xs h-screen z-20">
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-white cursor-pointer">
          <IoMdClose />
        </div>

        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-white font-primary font-bold text-3xl">
          {navigation.map((item, index) => {
            return (
              <li className="text-white hover:text-accent cursor-pointer" key={index}>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
