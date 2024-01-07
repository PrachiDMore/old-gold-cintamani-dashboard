import React from 'react'

const Input = ({ label, placeholder, type, textarea, onChange, value, readOnly=true, className, checked }) => {
  return (
    <>
      <div className='Lexend flex flex-col justify-center'>
        {label && <label className='font-semibold' htmlFor="">{label}:</label>}
        {!textarea ? <input checked={checked} value={value} readOnly={readOnly} onChange={onChange} className={'read-only:cursor-pointer font-medium px-4 py-3 mt-1 outline-none bg-linear rounded-lg ' + className} type={type} placeholder={placeholder} /> : <textarea value={value} onChange={onChange} readOnly={true} className='cursor-pointer font-medium px-4 py-3 h-28 resize-none mt-1 outline-none  bg-linear rounded-lg' placeholder={placeholder} ></textarea>}
      </div>
    </>
  )
}

export default Input