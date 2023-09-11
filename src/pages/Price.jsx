import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import { UseAuthContext } from '../context/Auth'
import { db } from '../configuration/firebase_config'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'

const Price = () => {
	const { user } = UseAuthContext()
	const [carat_18, setcarat_18] = useState(0)
	const [carat_20, setcarat_20] = useState(0)
	const [carat_22, setcarat_22] = useState(0)
	const [carat_24, setcarat_24] = useState(0)

	useEffect(() => {
		if (user) {
			const unsub = onSnapshot(doc(db, "price", "price"), (doc) => {
				setcarat_18(doc.data().carat_18_price);
				setcarat_20(doc.data().carat_20_price);
				setcarat_22(doc.data().carat_22_price);
				setcarat_24(doc.data().carat_24_price);
			});
			return () => {
				unsub()
			}
		}
	}, [user]);

	const handleSubmit = (e) => {
		e.preventDefault()
		if (user) {
			if (carat_18 && carat_20 && carat_22 && carat_24) {
				const docRef = doc(db, "price", "price");
				updateDoc(docRef, {
					carat_18_price: Number(carat_18),
					carat_20_price: Number(carat_20),
					carat_22_price: Number(carat_22),
					carat_24_price: Number(carat_24),
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
					<form onSubmit={handleSubmit} className='grid grid-cols-2 gap-x-6 gap-y-3'>
						<Input value={carat_18} onChange={(e) => { setcarat_18(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 18 carat gold per gram"} label={"18 Carat Gold Price"} />
						<Input value={carat_20} onChange={(e) => { setcarat_20(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 20 carat gold per gram"} label={"20 Carat Gold Price"} />
						<Input value={carat_22} onChange={(e) => { setcarat_22(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 22 carat gold per gram"} label={"22 Carat Gold Price"} />
						<Input value={carat_24} onChange={(e) => { setcarat_24(e.target.value) }} type={"number"} readOnly={false} placeholder={"Price of 24 carat gold per gram"} label={"24 Carat Gold Price"} />
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