import React from 'react';

import HeroImg from '../img/home/heroImg.webp';
//import components
import Brands from '../components/Brands'
import About from './About'
import Testimonials from '../components/Testimonials'
import ConfirmPage from './ConfirmPage';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <div>
      <div className="absolute z-[1] w-[50%] h-[20%] right-[20%] rounded-full blue__gradient" />
      <section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        id="home"
        className="flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat ml-4 mr-4
             pt-28 pb-12 lg:py-0 overflow-hidden">
        <div className="container mx-auto h-full w-full">
          {/* text and image wrapper */}
          <div className="flex justify-start">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-50%' }}
              transition={transition1}
              className="w-full lg:w-auto lg:absolute
              flex flex-col justify-center items-start relative md:top-20 lg:top-60 z-40">
              <h1
                className="text-3xl 
              leading-[40px] md:leading-tight lg:leading-[1.2]
              md:text-5xl  lg:text-7xl font-bold md:tracking-[-2px]">
                Saxophone <br /> with Fire
              </h1>

              <div className="flex-1 flex flex-col items-center lg:items-start">
                {/* <p className="text-lg text-accent mt-[22px]">Hey, I'm Andriy</p> */}
                <p className="pt-4 pb-8 md:pt-6 md:pb-12 text-[19px] leading-[25px] md:text-xl w-[170px] lg:w-full md:w-full lg:max-w-[480px] lg:text-lg text-left lg:flex">
                  This Fire Sax performance is the hottest, coolest, most attention grabbing
                  speciality act to appear at your event, with high octane musical performances and
                  bursts of flames, this really is a have to see it to believe it performance.
                  <br />
                </p>
                <Link to={'/contacts'}>
                  <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                    Hire me
                  </button>
                </Link>
              </div>
              {/* <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">Toronto - Montreal - Vancouver
              </p> */}
            </motion.div>

            {/* image */}
            <div className="flex justify-end lg:flex-1 max-h-max order-2 lg:order-none scale-[150%] lg:scale-100 ">
              <motion.div
                initial={{ opacity: 0, x: '50%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '50%' }}
                transition={transition1}
                className="relative top-[90px] right-3 md:-right-2.5rem md:-top- lg:-right-40 lg:-top-0 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  src={HeroImg}
                  alt=""
                  className="scale-[110%] md:scale-110 lg:scale-100"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Brands />
      <Testimonials />
    </div>
  );
};
  

export default Home;
