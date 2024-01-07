import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import { UseAuthContext } from '../context/Auth'
import { db } from '../configuration/firebase_config'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import moment from 'moment'

const Price = () => {
	const { user } = UseAuthContext()
	const [carat_18_75_price, setcarat_18_75_price] = useState(0)
	const [carat_20_83_33_price, setcarat_20_83_33_price] = useState(0)
	const [carat_22_91_66_price, setcarat_22_91_66_price] = useState(0)
	const [carat_23_95_83_price, setcarat_23_95_83_price] = useState(0)
	const [carat_24_99_5_price, setcarat_24_99_5_price] = useState(0)
	const [carat_24_99_9_price, setcarat_24_99_9_price] = useState(0)
	const [time, setTime] = useState(0)

	useEffect(() => {
		if (user) {
			const unsub = onSnapshot(doc(db, "price", "price"), (doc) => {
				setcarat_18_75_price(doc.data().carat_18_75_price);
				setcarat_20_83_33_price(doc.data().carat_20_83_33_price);
				setcarat_22_91_66_price(doc.data().carat_22_91_66_price);
				setcarat_23_95_83_price(doc.data().carat_23_95_83_price);
				setcarat_24_99_5_price(doc.data().carat_24_99_5_price);
				setcarat_24_99_9_price(doc.data().carat_24_99_9_price);
				setTime(doc.data().updatedAt)
			});
			return () => {
				unsub()
			}
		}
	}, [user]);

	const handleSubmit = (e) => {
		e.preventDefault()
		if (user) {
			if (carat_18_75_price && carat_20_83_33_price && carat_22_91_66_price && carat_23_95_83_price && carat_24_99_5_price && carat_24_99_9_price) {
				const docRef = doc(db, "price", "price");
				let dateTime = Date.now()
				updateDoc(docRef, {
					carat_18_75_price: Number(carat_18_75_price),
					carat_20_83_33_price: Number(carat_20_83_33_price),
					carat_22_91_66_price: Number(carat_22_91_66_price),
					carat_23_95_83_price: Number(carat_23_95_83_price),
					carat_24_99_5_price: Number(carat_24_99_5_price),
					carat_24_99_9_price: Number(carat_24_99_9_price),
					updatedAt: dateTime
				}).then(() => {
					alert("Updated Price")
				})
					.catch((err) => {
						alert(err.message)
					})
			} else {
				alert("Fill the form properly")
			}
		}
	}
	return (
		<div className='bg-lightOrange w-screen h-screen flex '>
			<Sidebar />
			<div className='border-b h-20 w-4/5 Quicksand topbarShadow'>
				<div className='h-20 w-full p-8 flex items-center text-3xl font-bold text-brown'>
					Price
				</div>
				<div className='p-8 '>
					<h2 className='font-bold text-xl mb-3'>Updated At: {moment(time).format("ddd MMM, DD YYYY hh:mm a")}</h2>
					<form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-6 gap-y-3'>
						<Input value={carat_18_75_price} onChange={(e) => { setcarat_18_75_price(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 18 carat 75 gold per gram"} label={"18 Carat 75 Gold Price"} />
						<Input value={carat_20_83_33_price} onChange={(e) => { setcarat_20_83_33_price(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 20 carat 83.33 gold per gram"} label={"20 Carat 83.33 Gold Price"} />
						<Input value={carat_22_91_66_price} onChange={(e) => { setcarat_22_91_66_price(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 22 carat 91.66 gold per gram"} label={"22 Carat 91.66 Gold Price"} />
						<Input value={carat_23_95_83_price} onChange={(e) => { setcarat_23_95_83_price(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 23 carat 95.83 gold per gram"} label={"23 Carat 95.83 Gold Price"} />
						<Input value={carat_24_99_5_price} onChange={(e) => { setcarat_24_99_5_price(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 24 carat 99.5 gold per gram"} label={"24 Carat 99.5 Gold Price"} />
						<Input value={carat_24_99_9_price} onChange={(e) => { setcarat_24_99_9_price(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 24 carat 99.9 gold per gram"} label={"24 Carat 99.9 Gold Price"} />
						<div className='mt-3 col-span-2 flex justify-center'>
							<button type='submit' className='px-5 py-2 bg-brown/70 hover:bg-brown rounded-lg font-semibold duration-300'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Price