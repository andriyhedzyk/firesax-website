import React from 'react'

//import testimonial data
import { testimonials } from './data';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import { Autoplay, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
        clickable:true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction:false,
        }}
        modules={[Autoplay, Pagination ]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
				<SwiperSlide key={index}>
					<div className="flex flex-col justify-center items-center lg:flex-row gap-12 lg:gap-32 mb-12 lg:mb-24">
						<div className="w-48 h-48 lg:w-[328px] lg:h-[328px] ">
							<img
								className="rounded-2xl"
								src={authorImg}
								alt=""
							/>
						</div>
						<div className="flex flex-col items-center lg:items-start max-w-3xl">
							<h5 className="font-body max-w-md lg:text-2xl  font-nunitosands font-normal">
								{authorText}
							</h5>
							<div>
								<p className="text-sm text-accent mt-8">
									{authorName}
								</p>
								<p className="text-sm lg:text-lg mb-1">
									{authorPosition}
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			)
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider
