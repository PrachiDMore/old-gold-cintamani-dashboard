import React from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'

const Price = () => {
	return (
		<div className='bg-lightOrange w-screen h-screen flex '>
			<Sidebar />
			<div className='border-b h-20 w-4/5 Quicksand topbarShadow p-8 flex items-center text-3xl font-bold text-brown'>
				Price
			</div>

			<div>
				<Input placeholder={""}/>
			</div>
		</div>
	)
}

export default Price