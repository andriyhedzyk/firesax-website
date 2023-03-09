//import LightGallery
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';

import { motion } from 'framer-motion'
import { transition1 } from '../transitions';
//import portfolio data
import { portfolio } from '../components/data';
import Image18 from '../img/portfolio/18.jpg';

<div className='container mx-auto h-full relative'>portfolio</div>

function Portfolio() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  const onBefore = () => {
    console.log('on before...');
  };

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section">
      <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center lg:text-left
        pt-24 lg:pt-36 pb-8">
          {/* images grid */}
          <LightGallery
            elementClassNames="grid grid-cols-2 lg:grid-cols-3 gap-2"
            onInit={onInit}
            onBeforeSlide={onBefore}
            speed={500}
            plugins={[lgZoom, lgThumbnail, lgHash, lgVideo]}>
            {/* image */}
            {portfolio.map((photo, index) => {
              return (
                <motion.a
                  data-tweet-text="lightGallery slide  1"
                  href={photo.img}
                  whileHover={{ scale: 1.03 }}
                  transition={transition1}
                  className="scale-95 md:scale-75 lg:scale-100"
                  key={index}>
                  <img src={photo.img} alt="" />
                </motion.a>
              );
            })}
            <motion.a
              data-pinterest-text="Pin it1"
              data-tweet-text="lightGallery slide  1"
             
              whileHover={{ scale: 1.03 }}
              transition={transition1}
              className="scale-95 md:scale-75 lg:scale-100"
              data-src="https://youtu.be/kzQIOTRSXUM"
              key="4">
              <img className="scale-95 md:scale-75 lg:scale-100" alt="" src={Image18} />
            </motion.a>
          </LightGallery>
        </div>
      </div>
    </motion.section>
  );
}
              

export default Portfolio;
