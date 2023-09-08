import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { AiOutlineEye } from 'react-icons/ai'
import ShowOrders from '../components/ShowOrders'
import { UseOrderContext } from '../context/Orders'
import { UseCustomerContext } from '../context/Customer'
import Input from '../components/Input'

const Orders = () => {
	const [showOrder, setShowOrder] = useState({ show: false, update: false, data: undefined })
	const { orders } = UseOrderContext()
	const { customers } = UseCustomerContext()
	const [results, setResults] = useState([]);

	useEffect(() => {
		setResults(orders?.map((order) => {
			let customer = customers?.filter((data) => {
				return order?.user_id?.id === data?.id
			})[0]
			return { ...order, customer }
		}))
	}, [customers, orders]);
	return (
		<div className='bg-lightOrange w-screen h-screen flex '>
			<Sidebar />
			<div className='border-b h-20 w-4/5 Quicksand topbarShadow'>
				<h1 className='h-20 w-full p-8 flex items-center text-3xl font-bold text-brown'>
					Orders
				</h1>
				<div className='p-8 container-height'>
					<div className='mb-3 h-14'>
						<Input placeholder={"Search..."} onChange={(e) => {
							setResults(orders?.filter((order) => {
								return order?.name?.toLowerCase()?.includes(e.target.value?.toLowerCase()) || order?.gold_carat?.toLowerCase()?.includes(e.target.value?.toLowerCase()) || order?.current_gold_rate === e.target.value || order?.item_type?.toLowerCase()?.includes(e.target.value?.toLowerCase()) || order?.item?.toLowerCase()?.includes(e.target.value?.toLowerCase()) || order?.gold_weight === e.target.value
							}))
						}} readOnly={false} className="px-5" />
					</div>
					<div className="not-sidebar-height w-full overflow-scroll rounded-lg">
						<table className="not-sidebar-height w-full text-left bg-linear/50 ">
							<thead className='sticky top-0 bg-linear-table overflow-hidden border-b border-brown'>
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
									results?.map((order, index) => {
										let customer = customers?.filter((data) => {
											return order?.user_id?.id === data?.id
										})
										return <tr key={"order" + index} className="border-b border-brown">
											<th className="px-6 py-4 ">{index + 1}</th>
											<td className="px-6 py-4">{order?.name}</td>
											<td className="px-6 py-4">{order?.item_type === "Other" ? order?.item : order?.item_type}</td>
											<td className="px-6 py-4">{order?.gold_weight}gm</td>
											<td className="px-6 py-4">{order?.gold_carat}</td>
											<td className="px-6 py-4">{order?.current_gold_rate}</td>
											<td className="px-6 py-4">
												<AiOutlineEye onClick={() => { setShowOrder({ show: true, update: true, data: { ...order, customer: customer[0] } }) }} className='cursor-pointer text-brown text-lg font-bold' />
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