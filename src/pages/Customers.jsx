import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineEye } from 'react-icons/ai'
import ShowCustomers from '../components/ShowCustomers'
import { UseCustomerContext } from '../context/Customer'

const Customers = () => {
	const [showCustomer, setShowCustomer] = useState({ show: false, update: false, data: undefined });
	const { customers } = UseCustomerContext()

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
									<th className="px-6 py-3">#</th>
									<th className="px-6 py-3">Image</th>
									<th className="px-6 py-3">Name</th>
									<th className="px-6 py-3">Email</th>
									<th className="px-6 py-3">Phone Number</th>
									<th className="px-6 py-3">Action</th>
								</tr>
							</thead>

							<tbody className='text-sm'>
								{
									customers?.map((customer, index) => {
										return <tr key={index} className="border-b border-brown">
											<td className="px-6 py-4 ">{index + 1}</td>
											<td className="px-6 py-4">
												<div className='flex gap-1 items-center'>
													<img className='h-10 w-10 rounded-lg' src={customer?.photo_url} alt="" />
												</div>
											</td>
											<td className="px-6 py-4">{customer?.display_name}</td>
											<td className="px-6 py-4">{customer?.email}</td>
											<td className="px-6 py-4">{customer?.phone_number}</td>
											<td className="px-6 py-4">
												<span onClick={() => { setShowCustomer({ show: true, update: true, data: customer }) }} className='justify-center rounded-lg cursor-pointer bg-brown h-8 w-8 flex items-center'>
													<AiOutlineEye className='text-white text-lg font-bold' />
												</span>
											</td>
										</tr>
									})
								}
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