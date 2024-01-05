import React from 'react'
import Link from "next/link";
const AdminCard = () => {
  return (
   <>
    <div className='text-center mt-2'>
    <h1 className="font-bold text-xl  line-clamp-1">Admin Dashboard</h1>
  </div>
   <div className="grid sm:grid-cols-3">
       <div className=" rounded-lg h-auto bg-red-300 sm:w-auto justify-center items-center cursor-pointer border-2 border-full border-red-500 rounded-md m-5">
        <Link href="/admin/hotellist">
        <div className="flex justify-center items-center">
             <div  className=" flex flex-col justify-center items-center sm:w-50 w-60 mt-2 h-40 md:w-96">
              <h1 className="font-bold text-xl  line-clamp-1">Hotels</h1>
              <p>12</p>
             </div>
             </div>
        </Link>
            
      </div>
      <div className=" rounded-lg bg-orange-200	 h-auto sm:w-auto justify-center items-center cursor-pointer border-2 border-full border-red-500 rounded-md m-5">
      <Link href="/admin/orderslist">
        <div className="flex justify-center items-center">
             <div  className=" flex flex-col justify-center items-center sm:w-50 w-60 mt-2 h-40 md:w-96">
              <h1 className="font-bold text-xl  line-clamp-1">Orders</h1>
              <p>3</p>
             </div>
             </div>
        </Link>
      </div>
      <div className=" rounded-lg bg-amber-200	 h-auto sm:w-auto justify-center items-center cursor-pointer border-2 border-full border-red-500 rounded-md m-5">
      <Link href="/admin">
        <div className="flex justify-center items-center">
             <div  className=" flex flex-col justify-center items-center sm:w-50 w-60 mt-2 h-40 md:w-96">
              <h1 className="font-bold text-xl  line-clamp-1">Customers</h1>
              <p>5+</p>
             </div>
             </div>
        </Link>
      </div>
   </div>
   </>
  )
}

export default AdminCard