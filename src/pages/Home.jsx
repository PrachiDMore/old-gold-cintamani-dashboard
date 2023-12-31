import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
	return (
		<>
			<div className='bg-lightOrange w-screen h-screen flex '>
				<Sidebar />
				<div className='border-b h-20 w-4/5 Quicksand topbarShadow p-8 flex items-center text-3xl font-bold text-brown'>
					Dashboard
				</div>
			</div>
		</>
	)
}

export default Home
