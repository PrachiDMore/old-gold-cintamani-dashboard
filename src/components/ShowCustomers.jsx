import React from 'react'
import Input from './Input'

const ShowCustomers = ({ showCustomer, setShowCustomer }) => {
  return (
    <>
      <div id="defaultModal" tabindex="-1" aria-hidden="true" className={showCustomer?.show ? "Quicksand flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-100 duration-500" : "Quicksand flex items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-black/50 overflow-y-auto h-screen opacity-0 pointer-events-none duration-500"}>
        <div className="relative w-[70%] max-h-full overflow-y-scroll m-auto">

          <div className="relative rounded-lg shadow bg-lightOrange border border-brown">

            <div className="flex items-center justify-between p-4 border-b rounded-t border-brown ">
              <h3 className="text-xl text-brown font-bold ">
                Customer Profile
              </h3>
              <button onClick={() => { setShowCustomer({show: false, update: false, data: undefined}) }} type="button" className="bg-brown/50 hover:bg-brown duration-300 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4 text-black">
              <div className='w-full flex justify-center'>
                <img className='h-24 w-24 rounded-lg object-cover' src={showCustomer?.data?.photo_url} alt="" />
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Name"} type={"text"} value={showCustomer?.data?.display_name}/>
                <Input label={"Email"} type={"email"} value={showCustomer?.data?.email}/>
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <Input label={"Phone"} type={"number"} value={showCustomer?.data?.phone_number} />
                <Input label={"Orders"} type={"text"} value={"4"} />
              </div>
            </div>
            {/* <div className="flex items-center justify-center pb-6  rounded-b ">
              <Button text={"Save"} className={"w-1/6"} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowCustomers