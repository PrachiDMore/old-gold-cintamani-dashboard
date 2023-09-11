import React, { useEffect, useState } from 'react'
import Input from './Input'
import moment from 'moment'
import { db } from '../configuration/firebase_config'
import { doc, updateDoc } from 'firebase/firestore'

const ShowOrders = ({ showOrder, setShowOrder }) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    setStatus(showOrder?.data?.status)
  }, [showOrder]);

  const updateStatus = async () => {
    if (showOrder?.data?.id) {
      const documentRef = doc(db, "orders", showOrder?.data?.id);
      await updateDoc(documentRef, {
        status: status
      })
        .then(() => {
          alert("Order status updated")
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showOrder?.show ? "Quicksand flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "Quicksand -translate-y-[50px] flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[80%] max-h-full overflow-y-scroll m-auto rounded-lg">
          <div className="relative bg-lightOrange border border-brown">
            <div className="flex items-center justify-between p-4 border-b rounded-t border-brown ">
              <h3 className="text-xl text-brown font-bold">
                Order Id: <span className='underline underline-offset-2 cursor-pointer'>#{showOrder?.data?.id}</span>
              </h3>
              <button onClick={() => {
                setShowOrder({ show: false, update: false, data: undefined })
              }} type="button" className="bg-brown/50 hover:bg-brown duration-300 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center " >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4 text-black">
              <div className='w-full flex justify-center'>
                <img className='h-32 w-32 rounded-lg object-cover' src={showOrder?.data?.ornament_image} alt="" />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Name"} type={"text"} value={showOrder?.data?.customer?.display_name} placeholder={"Enter name"} />
                <Input label={"Mobile Number"} type={"text"} value={showOrder?.data?.customer?.phone_number} placeholder={"Enter mobile number"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Type"} type={"text"} value={showOrder?.data?.item_type === "Other" ? `${showOrder?.data?.item} (${showOrder?.data?.item_type})` : `${showOrder?.data?.item_type}`} placeholder={"Enter the type"} />
                <Input label={"Order Placed At"} value={moment(moment.unix(showOrder?.data?.timestamp / 1000)).format("ddd, MMM Do YYYY, hh:mm A")} type={"text"} placeholder={"Date"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Carat"} type={"text"} value={showOrder?.data?.gold_carat} placeholder={"Enter carat of gold"} />
                <Input label={"Weight in gms"} type={"text"} value={showOrder?.data?.gold_weight} placeholder={"Enter weight in gms"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Rate per gm"} type={"text"} value={showOrder?.data?.current_gold_rate} placeholder={"Enter rate per gm"} />
                <Input label={"Calculated Amount"} value={showOrder?.data?.current_gold_rate * showOrder?.data?.gold_weight} type={"text"} placeholder={"Calculated amount"} />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Pickup Date"} type={"text"} value={moment(moment.unix(showOrder?.data?.pickup_date)).format("ddd, MMM Do YYYY")} placeholder={"Date"} />
                <Input label={"Pickup Time"} type={"text"} value={showOrder?.data?.pickup_time} placeholder={"Time"} />
              </div>
              <div>
                <label className='font-semibold' htmlFor="status">{"Status"}:</label>
                <select id="status" onChange={(e) => (setStatus(e.target.value))} value={status} className='w-full read-only:cursor-pointer font-medium px-4 py-3 mt-1 outline-none bg-linear rounded-lg '>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                  <option value="Out-for-Pickup">Out-for-Pickup</option>
                  <option value="Being Checked">Being Checked</option>
                </select>
              </div>
              <Input textarea={true} label={"Address"} value={`${showOrder?.data?.street_line} ${showOrder?.data?.locality} ${showOrder?.data?.pincode}`} placeholder={"Enter Address"} />
            </div>
            <div className="flex items-center justify-center pb-6  rounded-b ">
              <button onClick={updateStatus} className='px-5 py-2 bg-brown/70 hover:bg-brown rounded-lg font-semibold duration-300'>Update Status</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ShowOrders