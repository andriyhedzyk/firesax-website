import React, {useState} from 'react';
import contactImg from '../img/contact/contact-img.webp';

//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

//import email js
import emailjs from 'emailjs-com';

// import icons
import CallIcon from '../img/icons/callIcon.svg'
import LocationIcon from '../img/icons/locationIcon.svg';
import EmailIcon from '../img/icons/emailIcon.svg';

const Result = () => {
  return (
    <motion.div
      id="contacts"
      className="flex justify-center rounded-xl bg-white text-[#757879] p-2 items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 5,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}>
      <p>
        Your message has been successfully sent. <br /> I will contact you soon
      </p>
    </motion.div>
  );
};

function Contact (props) {
  const[result, showResult] = useState(false)
  function sendEmail(e) {
    e.preventDefault();
    
    emailjs
      .sendForm('service_mxn4oj8', 'template_n9bgain', e.target, '3UmiBtM76JAxoRFgr')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
e.target.reset();
showResult(true);
  };
  
  //hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <motion.section
      initial={{ opacity: 0, y: '-80%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-80%' }}
      transition={transition1}
      className="section">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col lg:flex-row h-full items-center
        justify-start pt-20 gap-x-8 text-center lg:text-left">
          {/* contacts*/}
          <div className="lg:flex-1 px-4  ">
            <ul className="list-none mb-8 ">
              <li className="flex color-[#aaa] leading-10">
                <img src={LocationIcon} alt="location" className="w-6" />
                <span className="text-[18px] tracking-[1.9px] ml-[56px]">Toronto, ON</span>
              </li>

              <li className="flex color-[#aaa] leading-10">
                <img src={CallIcon} alt="call" className="w-5" />
                <span className="text-[18px] tracking-[1.9px] ml-[56px]">
                  <a href="tel:1-647-378-8155" title="Give me a call">
                    +1 (647) 378-8155
                  </a>
                </span>
              </li>

              <li className="flex color-[#aaa] leading-10">
                <img src={EmailIcon} alt="email" className="w-5" />
                <span className="text-[18px] tracking-[1.9px] ml-[56px]">
                  <a href="mailto:#" title="Send me an email">
                    info@firesax.com
                  </a>
                </span>
              </li>
            </ul>

            <h1 className="mt-8 text-[28px] leading-[50px]">Contact me</h1>
            <p className="text-[18px] tracking-[1.9px] mb-12">
              Get in touch with me for quote for your event. I'm here to make your event be as
              smooth as possible and the greatest party people will remember!.
            </p>
            {/* form */}
            <form className="flex flex-col gap-y-4" action="" onSubmit={sendEmail}>
              <div className="flex gap-x-10">
                <input
                  className="outline-none rounded-xl
                  h-[60px] w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="outline-none rounded-xl
                  h-[60px]  w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="user-email"
                  placeholder="Your email address"
                  required
                />
              </div>
              <input
                className="outline-none rounded-xl
                  h-[60px] w-full pl-3 placeholder:text-[#757879]"
                type="text"
                name="message"
                placeholder="Your message"
                required
              />
              <button className="btn bg-accent hover:bg-accent-hover rounded-xl mb-[30px] mx-auto">
                Send it
              </button>
            </form>
            <div className="row">{result ? <Result /> : null}</div>
          </div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:flex-1">
            <img src={contactImg} alt="" className="scale-70 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
