import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { runFireworks } from '../lib/utils'
import { MyContext } from '../App';

const Success = () => {
const { data } = useContext(MyContext)

	useEffect(() => {
		runFireworks()
	});
// console.log(data)
    return (
		<section
			className="overflow-hidden pt-32 py-4 pb-12 lg:pt-[120px] lg:pb-[90px]"
		>
			<div className="container mx-auto">
				<div className="min-h-[60vh]">
					<div
						className="w-[90%] h-full bg-secondary rounded-3xl flex justify-center items-center
					 mx-auto pb-6 text-white text-xl font-thin flex-col"
					>
						<p className="w-3 py-5 text-green-500 text-2xl">
							<HiOutlineCheckCircle />
						</p>
						<h2 className="capitalize font-extrabold text-4xl">
							Successful!
						</h2>
						<div className="mx-60">
							<p className="font-thin p-4 mt-6">
								Dear {data.name},
							</p>
							<p className="p-4 mt-30">
								Thank you for choosing me and for making a
								booking on the website. <br />I appreciate your
								trust in me and look forward to providing you
								with a fantastic experience. I have received
								your booking and will be in touch with you
								shortly to confirm the details and provide you
								with any additional information you may need.
							</p>
							<p className="p-4 mt-30">
								If you have any questions in the meantime,
								please don't hesitate to reach out to me via my
								contact page or email:&nbsp;
								<a
									className="email"
									href="mailto:andriy@firesax.com"
								>
									andriy@firesax.com
								</a>
							</p>
							<p className="p-4 mt-30">
								Once again, thank you for your booking.
							</p>
							<p className="p-4 mt-30">
								Best regards, <br /> Andriy
							</p>
						</div>
						<Link
							to={'/about'}
							className="bg-accent hover:bg-accent-hover w-[300px] inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
						>
							{' '}
							Home page{' '}
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Success
