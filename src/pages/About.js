import React from 'react';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion'
//import transition
import { transition1 } from '../transitions';

import {FcCheckmark} from 'react-icons/fc'

import Image1 from '../img/about/image-1.jpg'
import Image2 from '../img/about/image-2.jpg'
import Image3 from '../img/about/image-3.jpg'

const About = () => {
  return (
		// 	<section id="about" className="section bg-black">
		// 		<motion.div
		// 			initial={{ opacity: 1, y: '-100%' }}
		// 			animate={{ opacity: 1, y: 100 }}
		// 			exit={{ opacity: 1, y: '100%' }}
		// 			transition={transition1}
		// 			className="container w-[100%] lg:w-[50%]  mx-auto h-full relative "
		// 		>
		// 			<div
		// 				className="flex-col md:flex-row-reverse lg:flex-row h-full
		// 			  items-center justify-start md:gap-x-0 lg:gap-x-24 lg:text-left mx-4 lg:mx-0 lg:mt-20"
		// 			>
		// 				{/* text About me*/}
		// 				<div
		// 					className="flex-1 lg:pt-22 lg:w-auto first-letter
		//         z-10 flex flex-col justify-center items-center"
		// 				>
		// 					<h1 className="section-title">ABOUT ME</h1>

		// 					<p
		// 						className="font-nunitosands text-[18px] md:text-base lg:text-xl mb-12 first-line:uppercase first-line:tracking-widest first-letter:text-7xl
		//         first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
		// 					>
		// 						Toronto-based professional saxophonist and
		// 						clarinetist with over 14 years of experience in the
		// 						entertainment industry around the world:
		// 						Switzerland, UAE, Qatar, Ukraine, Poland, China,
		// 						Spain and Saudi Arabia among others.
		// 						<br />
		// 						Having performed worldwide, at big events and
		// 						working with established companies such as the
		// 						Netflix!
		// 						<br />
		// 						<br />
		// 						Since being a resident in the UAE have continued
		// 						performing as a DJ / Saxophonist at Four Seasons Al
		// 						Maya Island, Atlantis Palm Jumeirah, Grand Plaza
		// 						Movenpick, Meydan Hotel, JW Marriot Marquis,
		// 						Saadiyat Rotana Resort & Villas, and The Westin Abu
		// 						Dhabi Resort just to name a few
		// 					</p>

		// 				</div>
		// 			</div>
		// 		</motion.div>
		//   </section>

		<motion.section
			initial={{ opacity: 0, y: '-50%' }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: '50%' }}
			transition={transition1}
			class="overflow-hidden pt-32 py-4 pb-12 lg:pt-[140px] lg:pb-[90px]"
		>
			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap items-center justify-between">
					<div className="w-full px-4 lg:w-6/12">
						<div className="-mx-3 flex items-center sm:-mx-4">
							<div className="w-full px-3 sm:px-4 xl:w-1/2">
								<div className="py-3 sm:py-4">
									<img
										src={Image1}
										alt=""
										className="w-full rounded-2xl"
									/>
								</div>
								<div className="py-3 sm:py-4">
									<img
										src={Image2}
										alt=""
										className="w-full rounded-2xl"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:px-4 xl:w-1/2">
								<div className="relative z-10 my-4">
									<img
										src={Image3}
										alt=""
										className="w-full rounded-2xl"
									/>
									<span className="absolute -right-7 -bottom-7 z-[-1]">
										<svg
											width="134"
											height="106"
											viewBox="0 0 134 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="1.66667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 1.66667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="104"
												r="1.66667"
												transform="rotate(-90 16.3333 104)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="104"
												r="1.66667"
												transform="rotate(-90 31 104)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 45.6667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3334"
												cy="104"
												r="1.66667"
												transform="rotate(-90 60.3334 104)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 88.6667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 117.667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 74.6667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="104"
												r="1.66667"
												transform="rotate(-90 103 104)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="104"
												r="1.66667"
												transform="rotate(-90 132 104)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 31 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 60.3333 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 88.6667 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 117.667 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 74.6667 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 103 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 132 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="74.6673"
												r="1.66667"
												transform="rotate(-90 1.66667 74.6673)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 1.66667 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 16.3333 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 16.3333 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 31 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 31 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 45.6667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 45.6667 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 60.3333 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 60.3333 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 88.6667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 88.6667 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 117.667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 117.667 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 74.6667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 74.6667 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 103 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 103 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 132 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 132 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 1.66667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 16.3333 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 31 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 31 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 45.6667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 60.3333 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 60.3333 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 88.6667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 88.6667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 117.667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 117.667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 74.6667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 74.6667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 103 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 103 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 132 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 132 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 1.66667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 16.3333 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 31 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 31 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 45.6667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 60.3333 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 60.3333 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 88.6667 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 88.6667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 117.667 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 117.667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 74.6667 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 74.6667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 103 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 103 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 132 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 132 1.66683)"
												fill="#3056D3"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
						<div className="mt-10 lg:mt-0">
							<span className="text-primary mb-2 block text-lg font-semibold">
								Why Choose Us
							</span>
							{/* <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
								Make your customers happy by giving services.
							</h2> */}
							<p className="text-body-color mb-8 text-base">
								Toronto-based professional saxophonist and
								clarinetist with over 14 years of experience in
								the entertainment industry around the world:
								Switzerland, UAE, Qatar, Ukraine, Poland, China,
								Spain and Saudi Arabia among others.
								<br />
								Having performed worldwide, at big events and
								working with established companies such as the
								Netflix!
							</p>
							<p className="text-body-color mb-12 text-base">
								Since being a resident in the UAE have continued
								performing as a DJ / Saxophonist at Four Seasons
								Al Maya Island, Atlantis Palm Jumeirah, Grand
								Plaza Movenpick, Meydan Hotel, JW Marriot
								Marquis, Saadiyat Rotana Resort & Villas, and
								The Westin Abu Dhabi Resort just to name a few
							</p>
							<Link
								to={'/booking'}
								className="bg-accent hover:bg-accent-hover inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
							>
								{' '}
								Book now{' '}
							</Link>
						</div>
					</div>
				</div>
				{/* <div className="-mx-4 flex flex-wrap items-center justify-between">
					<div class="w-full px-4 lg:w-1/2 xl:w-5/12">
						<div class="mt-10 lg:mt-0">
							<span class="text-primary mb-2 block text-lg font-semibold">
								Why Choose Us
							</span>
							<h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
								Make your customers happy by giving services.
							</h2>

							<p class="text-body-color mb-8 text-base">
								Here are some reasons to book a fire saxophonist
								for your event: <br />
								Unique and Memorable Entertainment: Fire
								saxophonists combine two exciting and
								captivating elements – live music and fire
								performance – to create a unique and
								unforgettable entertainment experience.
							</p>
							<div className="relative w-full">
								<div className=" left-0 flex items-center">
									<FcCheckmark className="text-gray-400 absolute inset-y-0" />
								</div>
								<p class="text-body-color mb-8 pl-5 text-base">
									Versatile and Adaptable: Fire saxophonist
									can perform a variety of music genres,
									including jazz, pop, rock, and funk, and can
									customize their performance to fit the
									specific needs of your event.
								</p>
							</div>
							<div className="relative w-full">
								<div className=" left-0 flex items-center">
									<FcCheckmark className="text-gray-400 absolute inset-y-0" />
								</div>
								<p class="text-body-color mb-8 pl-5 text-base">
									Interactive and Engaging: Fire saxophonist
									often perform in close proximity to the
									audience, creating an interactive and
									engaging experience for everyone present.
								</p>
							</div>
							<div className="relative w-full">
								<div className=" left-0 flex items-center">
									<FcCheckmark className="text-gray-400 absolute inset-y-0" />
								</div>
								<p class="text-body-color mb-8 pl-5 text-base">
									Spectacular Visual Effects: The combination
									of live music and fire performance creates
									spectacular visual effects that are sure to
									impress your guests.
								</p>
							</div>
							<div className="relative w-full">
								<div className=" left-0 flex items-center">
									<FcCheckmark className="text-gray-400 absolute inset-y-0" />
								</div>
								<p class="text-body-color mb-8 pl-5 text-base">
									Professionalism and Safety: A reputable fire
									saxophonist will prioritize safety, ensuring
									that all fire performance equipment and
									techniques are handled with care and
									precision. They will also maintain a high
									level of professionalism throughout their
									performance.
								</p>
							</div>
							<div className="relative w-full">
								<div className=" left-0 flex items-center">
									<FcCheckmark className="text-gray-400 absolute inset-y-0" />
								</div>
								<p class="text-body-color mb-8 pl-5 text-base">
									Memorable Photo and Video Opportunities: The
									visual effects created by a fire saxophonist
									make for great photo and video
									opportunities, allowing your guests to
									capture and share their experience on social
									media.
								</p>
							</div>
							<div className="relative w-full">
								<div className=" left-0 flex items-center">
									<FcCheckmark className="text-gray-400 absolute inset-y-0" />
								</div>
								<p class="text-body-color mb-8 pl-5 text-base">
									Overall, a fire saxophonist can add an
									element of excitement and uniqueness to your
									event, creating a memorable experience for
									all attendees.
								</p>
							</div>
							<a
								href="javascript:void(0)"
								class="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
							>
								Get Started
							</a>
						</div>
					</div>

					<div class="w-full px-4 lg:w-6/12">
						<div class="-mx-3 flex items-center sm:-mx-4">
							<div class="w-full px-3 sm:px-4 xl:w-1/2">
								<div class="py-3 sm:py-4">
									<img
										src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
										alt=""
										class="w-full rounded-2xl"
									/>
								</div>
								<div class="py-3 sm:py-4">
									<img
										src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
										alt=""
										class="w-full rounded-2xl"
									/>
								</div>
							</div>
							<div class="w-full px-3 sm:px-4 xl:w-1/2">
								<div class="relative z-10 my-4">
									<img
										src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
										alt=""
										class="w-full rounded-2xl"
									/>
									<span class="absolute -right-7 -bottom-7 z-[-1]">
										<svg
											width="134"
											height="106"
											viewBox="0 0 134 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="1.66667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 1.66667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="104"
												r="1.66667"
												transform="rotate(-90 16.3333 104)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="104"
												r="1.66667"
												transform="rotate(-90 31 104)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 45.6667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3334"
												cy="104"
												r="1.66667"
												transform="rotate(-90 60.3334 104)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 88.6667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 117.667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="104"
												r="1.66667"
												transform="rotate(-90 74.6667 104)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="104"
												r="1.66667"
												transform="rotate(-90 103 104)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="104"
												r="1.66667"
												transform="rotate(-90 132 104)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 31 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 89.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 60.3333 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 88.6667 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 117.667 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 74.6667 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 103 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 132 89.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="74.6673"
												r="1.66667"
												transform="rotate(-90 1.66667 74.6673)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 1.66667 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 16.3333 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 16.3333 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 31 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 31 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 45.6667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 45.6667 31.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 60.3333 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 60.3333 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 88.6667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 88.6667 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 117.667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 117.667 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 74.6667 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 74.6667 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 103 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 103 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 132 74.6668)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 132 30.9998)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 1.66667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 16.3333 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 31 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 31 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 45.6667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 60.3333 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 60.3333 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 88.6667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 88.6667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 117.667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 117.667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 74.6667 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 74.6667 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 103 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 103 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 132 60.0003)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 132 16.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="1.66667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 1.66667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="16.3333"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 16.3333 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 31 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="31"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 31 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 45.3333)"
												fill="#3056D3"
											/>
											<circle
												cx="45.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 45.6667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 60.3333 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="60.3333"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 60.3333 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 88.6667 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="88.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 88.6667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 117.667 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="117.667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 117.667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 74.6667 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="74.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 74.6667 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 103 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="103"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 103 1.66683)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 132 45.3338)"
												fill="#3056D3"
											/>
											<circle
												cx="132"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 132 1.66683)"
												fill="#3056D3"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
					<h1 className="section-title">REASONS TO BOOK</h1>
					<ul className="font-nunitosands w-full text-[18px] lg:text-[22px] leading-8 lg:leading-10 mb-12 relative p-[44px] lg:p-[64px] my-[10px] lg:my-[30px] mx-0 bg-secondary text-white rounded-[28px] flex-col justify-start items-start">
						<li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 ">
							A truly unique, attention-grabbing act
						</li>
						<li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1 items-center">
							A charismatic performer who knows how to warm up any
							crowd
						</li>
						<li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1 ">
							Superb musical and visual styling
						</li>
						<li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1">
							A five star professional with 14 years of
							international experience
						</li>
						<li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1">
							Fun, positive & easy to work with and <br /> will
							always go the extra mile to meet a clients needs
						</li>
						<li className="before:content-iconDone before:scale-75 before:lg:scale-100 before:inline-block before:absolute before:left-3 lg:before:left-5 before:pt-1">
							Perfect for corporate events, weddings, mitzvahs,
							grand openings and more.
						</li>
					</ul>

					<Link
						to={'/booking'}
						className="btn btn-md rounded-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"
					>
						{' '}
						Book now{' '}
					</Link>
				</div> */}
			</div>
		</motion.section>
  )
};

export default About;


