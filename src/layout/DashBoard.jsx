import React from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from './Footer'
import SecondCategoryList from './SecondCategoryList'

export default function DashBoard() {
	return (
		<div className='overflow-hidden'>
			<div className='under-construction'>
				<div className='under-construction-inner'>
					<div className='under-construction-popup'>
						Coming Soon...
					</div>
				</div>

			</div>

			<Nav />
			<SecondCategoryList />
			{/* <CategoryList/> */}
			<Routes>
				<Route path='/' Component={Home} />
			</Routes>
			<Footer />


		</div>
	)
}
