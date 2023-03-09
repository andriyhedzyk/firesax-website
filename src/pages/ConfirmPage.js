import React from 'react'

//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion'
//import transition
import { transition1 } from '../transitions';
import ParticleEffectButton from 'react-particle-effect-button'

const ConfirmPage = () => {
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
            <h1 className="section-title">Download a contract</h1>
            {/* <ul className="w-full text-[18px] lg:text-[22px] leading-8 lg:leading-10 mb-12 relative p-[44px] lg:p-[64px] my-[10px] lg:my-[30px] mx-0 bg-secondary text-white rounded-[28px] flex-col justify-start items-start">
              <li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 ">
                A truly unique, attention-grabbing act
              </li>
            </ul> */}
            <Link
              to={'/portfolio'}
              className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              {' '}
              View my portfolio{' '}
            </Link>

            <ParticleEffectButton className="bg-[#121019] hidden" >
              BUTTON CONTENT GOES HERE
            </ParticleEffectButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmPage
