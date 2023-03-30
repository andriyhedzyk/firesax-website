import React from 'react'
import {FaHeart} from 'react-icons/fa';
//import social data
import { social } from './data'
//import logo
import Logo from '../img/header/logo1.png'

const Footer = () => {
  return (
    <footer className="footer bg-tertiary w-full py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* // social icons  */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              return (
                <a className="text-base w-5" href={item.href} key={index}>
                  <img src={item.img} alt="" />
                </a>
              );
            })}
          </div>
          {/* //logo */}
          <div>
            <img className="w-[180px] pt-6 lg:w-[180px]" src={Logo} alt="" />
          </div>
          {/* copying */}
          <p className="flex">
            &copy; 2023 All rights reserved | Made by Andriy Hedzyk
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
