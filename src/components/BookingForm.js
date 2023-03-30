import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import logo from '../img/icons/logo512.png';



//Message after "Submit"
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
        Thank you! Your booking form has been successfully sent. <br /> I will
        contact you soon
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="64px"
        height="64px"
        viewBox="0 0 128 128"
        space="preserve"
      >
        <g>
          <path
            d="M64 0a7 7 0 1 1-7 7 7 7 0 0 1 7-7zm29.86 12.2a2.8 2.8 0 1 1-3.83 1.02 2.8 2.8 0 0 1 3.83-1.02zm22.16 21.68a3.15 3.15 0 1 1-4.3-1.15 3.15 3.15 0 0 1 4.3 1.15zm.87 60.53a4.2 4.2 0 1 1-1.57-5.7 4.2 4.2 0 0 1 1.54 5.73zm7.8-30.5a3.85 3.85 0 1 1-3.85-3.85 3.85 3.85 0 0 1 3.85 3.84zm-30 53.2a4.55 4.55 0 1 1 1.66-6.23 4.55 4.55 0 0 1-1.67 6.22zM64 125.9a4.9 4.9 0 1 1 4.9-4.9 4.9 4.9 0 0 1-4.9 4.9zm-31.06-8.22a5.25 5.25 0 1 1 7.17-1.93 5.25 5.25 0 0 1-7.14 1.93zM9.9 95.1a5.6 5.6 0 1 1 7.65 2.06A5.6 5.6 0 0 1 9.9 95.1zM1.18 63.9a5.95 5.95 0 1 1 5.95 5.94 5.95 5.95 0 0 1-5.96-5.94zm8.1-31.6a6.3 6.3 0 1 1 2.32 8.6 6.3 6.3 0 0 1-2.3-8.6zM32.25 8.87a6.65 6.65 0 1 1-2.44 9.1 6.65 6.65 0 0 1 2.46-9.1z"
            fill="rgb(37 99 235)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
            calcMode="discrete"
            dur="1080ms"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </motion.div>
  );
};




const BookingForm = () => {
  const [result, showResult] = useState(false);
  // form states
  const [eventname, setEventname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [withfire, setWithfire] = useState('');
  const [nofire, setNofire] = useState('');
  const [cocktail, setCocktail] = useState('');
  const [firstdance, setFirstdance] = useState('');
  const [danceset, setDanceset] = useState('');
  const [message, setMessage] = useState('');

  // submit form
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(eventname,name,email,phone,date,location)
    const data = {
      Eventname: eventname,
      Name: name,
      Email: email,
      Phone: phone,
      Date: date,
      Location: location,
      Start: start,
      End: end,
      Withfire: withfire,
      Nofire: nofire,
      Cocktail: cocktail,
      Firstdance: firstdance,
      Danceset: danceset,
      Message: message,
    };
    axios
      .post(
        'https://sheet.best/api/sheets/fd3b2e34-2fe3-4756-ad40-eabeb40d7c27',
        data
      )
      .then(response => {
        // console.log(response);

        // clearing form field
        setEventname('');
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setLocation('');
        setStart('');
        setEnd('');
        setWithfire('');
        setNofire('');
        setCocktail(false);
        setFirstdance(false);
        setDanceset(false);
        setMessage('');
      })
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
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 6000);

  return (
    <section
      id="booking"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section bg-black"
    >
      <div className="container mx-auto h-full relative ">
        <div
          className="flex-col md:flex-row-reverse lg:flex-row h-full
         items-center justify-start md:gap-x-0 lg:gap-x-24 lg:text-left mx-4 lg:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className="flex-1 lg:pt-22 lg:w-auto first-letter 
            z-10 flex flex-col justify-center items-center"
          ></motion.div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, x: '-80%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '80%' }}
        transition={transition1}
        class="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-800"
      >
        <motion.img
          style={{
            borderRadius: 30,
            cursor: 'pointer',
          }}
          whileTap={{ rotate: -90, scale: 0.75 }}
          src={logo}
          alt=""
          className="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 mx-auto md:block"
        />
        <h1 class="text-[40px] md:text-[60px] lg:text-[80px] font-thin text-white tracking-widest dark:text-white text-center my-6 md:my-10 lg:my-16">
          B O O K I N G
        </h1>
        <h2 class="text-[40px] md:text-[60px] lg:text-[80px] font-zayne text-white tracking-widest dark:text-white text-center my-6 md:my-10 lg:my-16">
          form
        </h2>

        <form autoComplete="on" onSubmit={handleSubmit}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Event name */}
            <div>
              <label class="text-white dark:text-gray-200" for="eventname">
                Event name
              </label>
              <input
                id="eventname"
                type="text"
                placeholder="John & Diana Wedding"
                onChange={e => setEventname(e.target.value)}
                value={eventname}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <h1 class="text-xl font-bold text-white capitalize dark:text-white mt-10">
            CLIENT INFORMATION
          </h1>

          {/* Name */}
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-white dark:text-gray-200" for="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John"
                autoComplete="on"
                required="Required"
                onChange={e => setName(e.target.value)}
                value={name}
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* Email */}
            <div>
              <label class="text-white dark:text-gray-200" for="emailAddress">
                Email Address
              </label>
              <div class="absolute top-[625px] flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                id="emailAddress"
                type="email"
                autoComplete="on"
                placeholder="john@netflix.com"
                required="Required"
                onChange={e => setEmail(e.target.value)}
                value={email}
                class="block w-full px-10 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            {/* phoneNumber */}
            <div>
              <label class="text-white dark:text-gray-200" for="phoneNumber">
                Phone number
              </label>
              <div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 XXX-XXX-XXXX"
                  required="Required"
                  onChange={e => setPhone(e.target.value)}
                  value={phone}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>

            {/* Data */}
            <div>
              <label class="text-white dark:text-gray-200" for="date">
                Date of Event
              </label>
              <input
                id="date"
                type="date"
                onChange={e => setDate(e.target.value)}
                value={date}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <h1 class="text-xl font-bold text-white capitalize dark:text-white mt-10">
            PERFORMANCE INFORMATION
          </h1>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Location & Address */}
            <div>
              <label class="text-white dark:text-gray-200" for="location">
                Performance Location & Address
              </label>
              <input
                id="location"
                type="text"
                placeholder="Four Seasons Hotel, 60 Yorkville Ave, Toronto"
                onChange={e => setLocation(e.target.value)}
                value={location}
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Start Time */}
            <div>
              <label for="time" class="text-white dark:text-gray-200">
                Musician Start Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                onChange={e => setStart(e.target.value)}
                class="w-full border border-gray-300 rounded-md dark:bg-gray-800 py-3 px-6 mt-2 dark:text-gray-300 outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* End Time */}
            <div>
              <label for="time" class="text-white dark:text-gray-200">
                Musician End Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                onChange={e => setEnd(e.target.value)}
                class="w-full border border-gray-300 rounded-md dark:bg-gray-800 py-3 px-6 mt-2 dark:text-gray-300 outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
            {/* Would you like saxophone with fire? */}
            <div class="mb-5">
              <label class="mb-3 block text-gray-200">
                Would you like saxophone with fire?
              </label>
              <div class="flex items-center space-x-6">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    onChange={e => setWithfire(e.target.value)}
                    value="withfire"
                    class="h-5 w-5"
                  />
                  <label for="radioButton1" class="pl-3 text-gray-200">
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    onChange={e => setNofire(e.target.value)}
                    value="noFire"
                    class="h-5 w-5"
                  />
                  <label for="radioButton2" class="pl-3 text-gray-200">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label class="mb-3 block text-gray-200">
                Witch part of the event?
              </label>
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="cocktail-checkbox-list"
                      type="checkbox"
                      onChange={e => setCocktail(e.target.value)}
                      value="cocktail"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="cocktail-checkbox-list"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cocktail time
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="first-dance-checkbox-list"
                      type="checkbox"
                      onChange={e => setFirstdance(e.target.value)}
                      value="firstdance"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="first-dance-checkbox-list"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      First dance
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="dance-set-checkbox-list"
                      type="checkbox"
                      onChange={e => setDanceset(e.target.value)}
                      value="danceset"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="dance-set-checkbox-list"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Dance set
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <label
                class="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Message
              </label>
              <textarea
                id="textarea"
                type="textarea"
                onChange={e => setMessage(e.target.value)}
                value={message}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span>Submit </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 rtl:-scale-x-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            
          </div>
        </form>
        <div className="row">{result ? <Result /> : null}</div>
      </motion.section>
    </section>
  );
};

export default BookingForm;
