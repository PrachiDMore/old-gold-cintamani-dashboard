import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineEye } from 'react-icons/ai'
import ShowOrders from '../components/ShowOrders'

const Orders = () => {
	const [showOrder, setShowOrder] = useState(false)

	return (
		<div className='bg-lightOrange w-screen h-screen flex '>
			<Sidebar />
			<div className='border-b h-20 w-4/5 Quicksand topbarShadow'>
				<div className='h-20 w-full p-8 flex items-center text-3xl font-bold text-brown'>
					Orders
				</div>
				<div className='p-8 '>
					<div className="w-full overflow-hidden rounded-lg">
						<table className="w-full text-left bg-linear/50 ">
							<thead className='overflow-hidden border-b border-brown'>
								<tr className='rounded-t-lg'>
									<th className="px-6 py-3">#</th>
									<th className="px-6 py-3">Name</th>
									<th className="px-6 py-3">Type</th>
									<th className="px-6 py-3">Weight</th>
									<th className="px-6 py-3">Carat</th>
									<th className="px-6 py-3">Price per gm</th>
									<th className="px-6 py-3">Action</th>
								</tr>
							</thead>

							<tbody className='text-sm'>
								<tr className="border-b border-brown">
									<th className="px-6 py-4 ">1</th>
									<td className="px-6 py-4">Jhon Doe</td>
									<td className="px-6 py-4">Ring</td>
									<td className="px-6 py-4">100gm</td>
									<td className="px-6 py-4">23</td>
									<td className="px-6 py-4">20000</td>
									<td className="px-6 py-4">
										<AiOutlineEye onClick={() => { setShowOrder(true) }} className='text-brown text-lg font-bold' />
									</td>
								</tr>
								<tr className="">
									<th className="px-6 py-4 ">1</th>
									<td className="px-6 py-4">Jhon Doe</td>
									<td className="px-6 py-4">Ring</td>
									<td className="px-6 py-4">100gm</td>
									<td className="px-6 py-4">23</td>
									<td className="px-6 py-4">20000</td>
									<td className="px-6 py-4">
										<AiOutlineEye onClick={() => { setShowOrder(true) }} className='text-brown text-lg font-bold' />
									</td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
			<ShowOrders showOrder={showOrder} setShowOrder={setShowOrder}/>
		</div>
	)
}

export default Orders