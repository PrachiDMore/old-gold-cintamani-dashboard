import React from 'react'
import Input from './Input'

const ShowOrders = ({ showOrder, setShowOrder }) => {
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showOrder ? "Quicksand flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "Quicksand -translate-y-[50px] flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[80%] max-h-full overflow-y-scroll m-auto">

          <div className="relative rounded-lg shadow bg-lightOrange border border-brown">

            <div className="flex items-center justify-between p-4 border-b rounded-t border-brown ">
              <h3 className="text-xl text-brown font-bold ">
                Order Id: #12345sdfgh
              </h3>
              <button onClick={() => { setShowOrder(false) }} type="button" className="bg-brown/50 hover:bg-brown duration-300 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4 text-black">
              <div className='w-full flex justify-center'>
                <img className='h-20 w-20 rounded-full' src="/assets/ring.jpg" alt="" />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Name"} type={"text"} value={"Jhon"} placeholder={"Enter your name"}/>
                <Input label={"Type"} type={"text"} value={"Ring"} placeholder={"Enter the type"}/>
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Carat"} type={"text"} value={"23"} placeholder={"Enter carat of gold"}/>
                <Input label={"Weight in gms"} type={"text"} value={"100"} placeholder={"Enter weight in gms"}/>
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Rate per gm"} type={"text"} value={"10000"} placeholder={"Enter rate per gm"}/>
                <Input label={"Calculated Amount"} value={"100000"} type={"text"} placeholder={"Calculated amount"}/>
              </div>
              <Input textarea={true} label={"Address"} value={"Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"} placeholder={"Enter Address"}/>
            </div>
            <div className="flex items-center justify-center pb-6  rounded-b ">
              <button className='px-5 py-2 bg-brown/70 hover:bg-brown rounded-lg font-semibold duration-300'>Update Status</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowOrders