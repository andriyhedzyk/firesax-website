import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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

//import map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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
      }}
    >
      <p>
        Thanks for being awesome!
        <br /> I have received your message and would like to thank you for
        writing to me. If your inquiry is urgent, please use the telephone
        number. Otherwise, I will reply by email as soon as possible.
        <br />
        Talk to you soon,
        <br /> Andriy
      </p>
    </motion.div>
  );
};

function Contact(props) {
  const [result, showResult] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mxn4oj8',
        'template_n9bgain',
        e.target,
        '3UmiBtM76JAxoRFgr'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  }

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  //map location
  const position = [43.8532132, -79.4661194];

  return (
    <motion.section className="section">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          className="flex flex-col lg:flex-row h-full items-center
        justify-start pt-20 gap-x-8 text-center lg:text-left"
        >
          {/* contacts*/}
          <div className="lg:flex-1 px-4  ">
            <ul className="list-none mb-8 ">
              <li className="flex color-[#aaa] leading-10">
                <img src={LocationIcon} alt="location" className="w-6" />
                <span className="text-[18px] tracking-[1.9px] ml-[56px]">
                  Toronto, ON
                </span>
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
              Get in touch with me for quote for your event. I'm here to make
              your event be as smooth as possible and the greatest party people
              will remember!.
            </p>
            {/* form */}
            <form
              className="flex flex-col gap-y-4"
              action=""
              onSubmit={sendEmail}
            >
              <div className="flex gap-x-10">
                <input
                  className="outline-none rounded-xl
                  h-[60px] w-full pl-9 placeholder:text-[#757879]"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <div class="absolute top-[425px] flex items-center pl-3 pointer-events-none">
                  <FaUserAlt />
                </div>
                <input
                  type="email"
                  autoComplete="on"
                  required="Required"
                  name="user-email"
                  icon="users"
                  iconPosition="left"
                  placeholder="Your email address"
                  className="outline-none rounded-xl
                  h-[60px]  w-full pl-9 placeholder:text-[#757879]"
                />
                <div class="absolute top-[425px] left-[352px] flex items-center pointer-events-none">
                  <MdEmail />
                </div>
              </div>
              <input
                className="outline-none rounded-xl
                  h-[60px] w-full pl-3 placeholder:text-[#757879]"
                type="text"
                name="message"
                placeholder="Your message"
                required
              />

              <button class="btn group relative h-14 w-48 overflow-hidden rounded-lg bg-accent text-lg shadow mb-[30px] mx-auto">
                <div class="absolute inset-0 w-3 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-gray-200 group-hover:text-orange-600">
                  Send
                </span>
              </button>
            </form>
            <div className="row">{result && <Result />} </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="lg:flex-1"
          >
            <MapContainer
              center={position}
              zoom={9}
              scrollWheelZoom={false}
              className="w-[100%] h-[50vh]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            {/* image */}
            {/* <img src={contactImg} alt="" className="scale-70 hidden md:block" /> */}
          </motion.div>
        </motion.div>

        {/* map */}
      </div>
    </motion.section>
  );
};

export default Contact;
