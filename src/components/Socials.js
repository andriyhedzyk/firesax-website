import React from 'react';
// import social data
import { social } from './data';

const Socials = () => {
  return (
    <div className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <div
            className="flex justify-center items-center"
            key={index}>
            <a className="text-base w-5" href={item.href}>
              <img src={item.img} alt=''/>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
