import React from 'react';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion'
//import transition
import { transition1 } from '../transitions';

const About = () => {
  return (
    <section
      id="about"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section bg-black">
      <div className="container mx-auto h-full relative ">
        <div
          className="flex-col md:flex-row-reverse lg:flex-row h-full
         items-center justify-start md:gap-x-0 lg:gap-x-24 lg:text-left mx-4 lg:mx-0 lg:mt-20">
          {/* text About me*/}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className="flex-1 lg:pt-22 lg:w-auto first-letter 
            z-10 flex flex-col justify-center items-center">
            <h1 className="section-title">ABOUT ME</h1>

            <p
              className="text-[18px] md:text-base lg:text-xl mb-12 first-line:uppercase first-line:tracking-widest first-letter:text-7xl 
            first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
              Toronto-based professional saxophonist and clarinetist with over 14 years of
              experience in the entertainment industry around the world: Switzerland, UAE, Qatar,
              Ukraine, Poland, China, Spain and Saudi Arabia among others.
              <br />
              Having performed worldwide, at big events and working with established companies such
              as the Netflix!
              {/* <br />
              He having conducted his musical education at the Lviv National Music Academy, where he graduated with a Master's Degree. */}
              <br />
              <br />
              Since being a resident in the UAE have continued performing as a DJ / Saxophonist at
              Four Seasons Al Maya Island, Atlantis Palm Jumeirah, Grand Plaza Movenpick, Meydan
              Hotel, JW Marriot Marquis, Saadiyat Rotana Resort & Villas, and The Westin Abu Dhabi
              Resort just to name a few
            </p>
            <h1 className="section-title">REASONS TO BOOK</h1>
            <ul className="w-full text-[18px] lg:text-[22px] leading-8 lg:leading-10 mb-12 relative p-[44px] lg:p-[64px] my-[10px] lg:my-[30px] mx-0 bg-secondary text-white rounded-[28px] flex-col justify-start items-start">
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 ">
                A truly unique, attention-grabbing act
              </li>
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1 items-center">
                A charismatic performer who knows how to warm up any crowd
              </li>
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1 ">
                Superb musical and visual styling
              </li>
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1">
                A five star professional with 14 years of international experience
              </li>
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1">
                Fun, positive & easy to work with and <br /> will always go the extra mile to meet a
                clients needs
              </li>
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1">
                Perfect for corporate events, weddings, mitzvahs, grand openings and more.
              </li>
            </ul>
            <Link
              to={'/portfolio'}
              className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              {' '}
              View my portfolio{' '}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
