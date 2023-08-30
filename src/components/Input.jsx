import React from 'react'

const Input = ({ label, placeholder, type, textarea, onChange, value }) => {
  return (
    <>
      <div className='Lexend flex flex-col justify-center'>
        <label className='font-medium' htmlFor="">{label}</label>
        {!textarea ? <input value={value} onChange={onChange} className='cursor-default font-medium px-4 py-3 mt-1 outline-none bg-linear rounded-lg' type={type} placeholder={placeholder} /> : <textarea value={value} onChange={onChange} className='font-medium px-4 py-3 h-28 resize-none mt-1 outline-none  bg-linear rounded-lg' placeholder={placeholder} ></textarea>}
      </div>
    </>
  )
}

export default Input