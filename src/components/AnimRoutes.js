import React, { useEffect } from 'react'
//import pages
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contacts'
import BookingPage from '../pages/BookingPage'
import Questions from '../pages/Questions'
import Success from '../pages/Success'

//import routes and useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimRoutes = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const location = useLocation()

	return (
		<AnimatePresence initial={false}>
			<Routes key={location.pathname} location={location}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/booking" element={<BookingPage />} />
				<Route path="/questions" element={<Questions />} />
				<Route path="/success" element={<Success />} />
				<Route path="/contacts" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimRoutes
