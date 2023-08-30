import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const routes = [
    {
      link: "/",
      title: "Home"
    },
    {
      link: "/orders",
      title: "Orders"
    },
    {
      link: "/customers",
      title: "Customers"
    },
    {
      link: "/price",
      title: "Price"
    },
  ]
  const location = useLocation();
  return (
    <>
    <div className='border-r border-brown w-1/5 h-screen p-8 Quicksand sidebarShadow flex flex-col gap-7 '>
      {/* <img src="" alt="" /> */}
      <div>
        <p className='text-4xl font-bold'>Cintamani</p>
      </div>
      <div className='text-lg font-semibold flex flex-col gap-4'>
        {
          routes.map((route) => {
            if(route.link === location.pathname){
              return <Link to={route.link} className='bg-brown px-4 py-2 rounded-lg font-bold text-white'>{route.title}</Link>
            }else{
              return <Link to={route.link} className='bg-linear/50 px-4 py-2 rounded-lg'>{route.title}</Link>
            }
          })
        }
      </div>
    </div>
    </>
  )
}

export default Sidebar