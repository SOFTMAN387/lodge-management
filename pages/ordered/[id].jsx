import Link from 'next/link';
import React from 'react'
import Header1 from '@/components/Header1';
import Footer from '@/components/Footer';
import Image from 'next/image';

const userOrdered = ({order}) => {
  return (
  <>
  <Header1/>
  <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
    {order?.length>0 ? order.map((orderData,index)=>{
      return(<>
      
  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">BookedId: #...{orderData?._id.slice(-5)}</h1>
    <p className="text-base dark:text-grayfont-medium leading-6 text-gray-600">{orderData?.bookingDate} at 10:34 PM</p>
  </div>
  <div className="mt-10 mb-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0" key={index}>
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start bg-gradient-to-r from-pink-600 to-red-400 bg-gray-500 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-white">{orderData?.userHoteldata?.name}</p>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <Image className="w-full hidden md:block" src={orderData?.userHoteldata?.banner} width={50} height={50} alt="orderHotel" />
            <Image className="w-full md:hidden" src={orderData?.userHoteldata?.banner} width={50} height={50} alt="orderHotel" />
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-white">{orderData?.userHoteldata?.description}</h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-white"><span className="dark:text-gray-200 ">Male: </span> {orderData?.male}</p>
                <p className="text-sm dark:text-white leading-none text-white"><span className="dark:text-gray-200 ">Femal: </span> {orderData?.female}</p>
                <p className="text-sm dark:text-white leading-none text-white"><span className="dark:text-gray-200 ">Child: </span> {orderData?.child}</p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">Price :Rs-/ {orderData?.userHoteldata?.price}</p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-white">Days:3</p>
              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-white">Total:{orderData?.totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-500 bg-gradient-to-r from-pink-600 to-red-400 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-white">Summary</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-white">Subtotal</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{orderData?.totalAmount}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-white">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-black dark:text-white leading-3 text-white">Membership</span></p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">Rs/-28.00 (20%)</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-white">GST</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">Rs/- 35</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-white">Total</p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{orderData?.totalAmount+30}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 bg-gradient-to-r from-pink-600 to-red-400 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-white">Booked By</h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <Image src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" width={10} height={10} />
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-base dark:text-white font-semibold leading-4 text-left text-white">{orderData?.userId}</p>
              <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
            </div>
          </div>

          <div className="flex justify-center text-white dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className="cursor-pointer text-sm leading-5 ">{orderData?.token?.email}</p>
          </div>
        </div>
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-white">Shipped From</p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{orderData?.shippingAddress?.shipping_name},
              {orderData?.shippingAddress?.shipping_address_line1}</p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-white">Booked For</p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{orderData?.shippingAddress?.billing_name},
              {orderData?.shippingAddress?.billing_address_line1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      </>)
    }):(<>
     <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-white">Oops No Booked Hotel Yet !...</h1>
    <p className="text-base dark:text-grayfont-medium leading-6 text-gray-600">please Book Hotel
    <Link href={`/`}>
    <button className=' text-white p-2 m-5 bg-gradient-to-r from-pink-600 to-red-400' >Book Now</button> 
    </Link></p>
  </div>
    
    </>)}

</div>
<Footer/>
  </>
  )
}




export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/orders/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      order: data.order ||null,
    },
  };
}

export default userOrdered;