import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineEye } from 'react-icons/ai'
import ShowCustomers from '../components/ShowCustomers'

const Customers = () => {
	const [showCustomer, setShowCustomer] = useState(false)

	return (
		<div className='bg-lightOrange w-screen h-screen flex '>
			<Sidebar />
			<div className='border-b h-20 w-4/5 Quicksand topbarShadow'>
				<div className='h-20 w-full p-8 flex items-center text-3xl font-bold text-brown'>
					Customers
				</div>
				<div className='p-8 '>
					<div className="w-full overflow-hidden rounded-lg">
						<table className="w-full text-left bg-linear/50 ">
							<thead className='overflow-hidden border-b border-brown'>
								<tr className='rounded-t-lg'>
									<th className="px-6 py-3">Id</th>
									<th className="px-6 py-3">Image</th>
									<th className="px-6 py-3">Name</th>
									<th className="px-6 py-3">Email</th>
									<th className="px-6 py-3">Phone Number</th>
									<th className="px-6 py-3">Action</th>
								</tr>
							</thead>

							<tbody className='text-sm'>
								<tr className="border-b border-brown">
									<td className="px-6 py-4 ">#123</td>
									<td className="px-6 py-4">
										<div className='flex gap-1 items-center'>
											<img className='h-8 w-8 rounded-lg' src="/assets/profile-picture.jpeg" alt="" />
										</div>
									</td>
									<td className="px-6 py-4">Jhon Doe</td>
									<td className="px-6 py-4">jhondoe@gmail.com</td>
									<td className="px-6 py-4">1234567890</td>
									<td className="px-6 py-4">
										<AiOutlineEye onClick={() => { setShowCustomer(true) }} className='text-brown text-lg font-bold' />
									</td>
								</tr>

								<tr className="">
									<td className="px-6 py-4 ">#123</td>
									<td className="px-6 py-4">
										<div className='flex gap-1 items-center'>
											<img className='h-8 w-8 rounded-lg' src="/assets/profile-picture.jpeg" alt="" />
										</div>
									</td>
									<td className="px-6 py-4">Jhon Doe</td>
									<td className="px-6 py-4">jhondoe@gmail.com</td>
									<td className="px-6 py-4">1234567890</td>
									<td className="px-6 py-4">
										<AiOutlineEye onClick={() => { setShowCustomer(true) }} className='text-brown text-lg font-bold' />
									</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
			<ShowCustomers showCustomer={showCustomer} setShowCustomer={setShowCustomer} />
		</div>

	)
}

export default Customers