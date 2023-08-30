import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineEye } from 'react-icons/ai'
import ShowOrders from '../components/ShowOrders'
import { UseOrderContext } from '../context/Orders'
import { UseCustomerContext } from '../context/Customer'

const Orders = () => {
	const [showOrder, setShowOrder] = useState({ show: false, update: false, data: undefined })
	const { orders } = UseOrderContext()
	const { customers } = UseCustomerContext()

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
								{
									orders?.map((order, index) => {
										let customer = customers?.filter((data) => {
											return order?.user_id?.id === data?.id
										})
										return <tr className="border-b border-brown">
											<th className="px-6 py-4 ">{index + 1}</th>
											<td className="px-6 py-4">{order?.name}</td>
											<td className="px-6 py-4">{order?.item_type === "Other" ? order?.item : order?.item_type}</td>
											<td className="px-6 py-4">{order?.gold_weight}gm</td>
											<td className="px-6 py-4">{order?.gold_carat}</td>
											<td className="px-6 py-4">{order?.current_gold_rate}</td>
											<td className="px-6 py-4">
												<AiOutlineEye onClick={() => { setShowOrder({ show: true, update: true, data: {...order, customer: customer[0]} }) }} className='cursor-pointer text-brown text-lg font-bold' />
											</td>
										</tr>
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<ShowOrders showOrder={showOrder} setShowOrder={setShowOrder} />
		</div>
	)
}

export default Orders