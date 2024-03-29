import React from 'react';
import PropTypes from 'prop-types';
//import motion
import { motion } from 'framer-motion'
//import transition
import { transition1 } from '../transitions';
import { questionsList } from '../components/data';

const QuestionsList = () => {
    return (
      <section id="about" className="section bg-black">
        <div className="container mx-auto h-full relative ">
          {/* text About me*/}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 100 }}
            exit={{ opacity: 0, y: '50%' }}
            transition={transition1}
            className="flex-1 lg:w-auto z-10 flex flex-col justify-center items-center"
          >
            <h1 className="section-title"> Questions & Answers </h1>

            {/* questionsList */}
            <ul>
              {questionsList.map((item, index) => {
                const { question, answer } = item;
                return (
                  <li key={index}>
                    <div class="w-screen pt-4">
                      <details
                        className="w-[50%] bg-white   p-4 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px]
                             open:!max-h-[400px] transition-[max-height] duration-500"
                      >
                        <summary className="outline-none cursor-pointer text-[18px] text-gray-500 focus:underline focus:text-blue-600 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
                          {question}
                        </summary>
                        <hr class="my-2 scale-x-150" />
                        <div class="text-md font-secondary -m-4 -mt-2 p-4 bg-gray-50">
                          {answer}
                        </div>
                      </details>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section>
    );
};

QuestionsList.propTypes = {
   item: PropTypes.arrayOf(PropTypes.shape({
      index: PropTypes.string.isRequired
  })),
};

export default QuestionsList;
