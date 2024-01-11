import Header1 from '@/components/Header1';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router"
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Footer from '@/components/Footer';
// import Link from 'next/link';

const Order = ({hotel}) => {
  const router=useRouter();
  const [verify,setVerify]=useState(false);
  const authUserId= useSelector((state) => state?.currentUser[0]?.emailExists?._id) || [];
  const [orderData,setOrderData]=useState({
    "male":"",
    "female":"",
    "child":"",
    "bookingDate":"",
    "leavingDate":"",
  });


  const handleChange=(e)=>{
    setOrderData({...orderData,[e.target.name]:e.target.value});
  }

  const handleVerify=()=>{
    const {male,female,child,bookingDate,leavingDate}=orderData;
      if(!male||!female||!child||!bookingDate||!leavingDate){
        alert("Pleas Select Every Field...");
      }else{
        setVerify(true);
      }
      
    } 

    
  const orderNow=async()=>{
    try {
      const res = await axios.post(`/api/orders/`, orderData);
      if (res?.data) {
        // console.log(res.data);
       router.push(`/ordered/${authUserId}`); 
      }    
    } catch (error) {
      alert("Payment Failed !"); 
      router.back();
      console.log(error);
    }
  }
 
  const onToken = async(token,shippingAddress) => {
    try {
      if(token){
        setOrderData({...orderData,token,totalAmount:hotel?.price,shippingAddress,userId:authUserId,userHoteldata:hotel});
        alert("Payment Successfull !");   
      }
    } catch (error) {
      console.log(error);
    }
  };

  if(orderData.token){
    orderNow();
    
  }
  return (
   <>
   <Header1/>   
  <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" className="text-2xl font-bold text-gray-800">sneekpeeks</a>
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <span className="font-semibold text-gray-900 hover:cursor-pointer" onClick={()=>router.back()}>Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
 <div className=" bg-gradient-to-r from-pink-600 to-red-400 h-60  w-100 ">
      <div className=" p-5 sm:h-80">
        <h2 className=" text-3xl text-white text-center font-bold">
         Book room by selecting gender with availaibility...
        </h2>
        <div className='flex justify-center items-center mt-5 sm:w-full'>  
          <input
            type="date"
            placeholder="From Date..."
           onChange={handleChange}
            name="bookingDate"
            className="  h-16  outline-none px-1 text-lg border-r-2 border-gray-400 col-span-1"

          />
          <br/>
          <input
            type="date"
            placeholder="To Date..."
           onChange={handleChange}
            name='leavingDate'
            className=" h-16  outline-none px-1 text-lg col-span-1"
          />
          
          <select className=" h-16  px-3 py-2 w-20  bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white text-xl"
         onChange={handleChange}
         name='male'>         
            <option disabled>Male</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
         
          <select className=" h-16  px-3 py-2 w-20  bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white text-xl"
         onChange={handleChange}
         name='female'>          
            <option disabled>Female</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
         
          <select className=" h-16  px-3 py-2 w-20  bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white text-xl"
         onChange={handleChange}
         name='child'>
            <option disabled>Child</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          </div>
       </div>
  </div>
{/*Order Submary Details here with checkout*/}
 <div className="grid sm:px-10 lg:grid-cols-1 justify-center items-center lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={hotel?.banner} alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold text-xl">{hotel?.name}<span className='ml-2 text-gray '>{hotel?.location}</span></span>
          <span className="float-right text-gray-400">{hotel?.description}</span>
          <p className="text-lg font-bold">Rs-/ {hotel?.price}</p>
        </div>
      </div>
    </div>
    {verify===true?(<StripeCheckout
              
              name="Er. Manish Gupta"
              description={`total pay ₹ ${hotel.price}`}
              token={onToken}
              currency="INR"
              shippingAddress=""
              amount={hotel.price * 100}
              stripeKey="pk_test_51LAV5iSIlRKMsbTmUR3xRvIPUhd2WTE9qIXGgix5OUqU3yzFzTQQekVdbOIClFzujPccSzUagbUKD8dOcQjSGF8S004R85RPv7"
            />):(
              <button  
              onClick={handleVerify}
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white bg-gradient-to-r from-pink-600 to-red-400">
                Verify Hotel
              </button>
            )}            
  </div>

</div>
<Footer />
  </> )
   }



   export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
    const data = await res.json();
  
    return {
      props: {
        hotel: data.hotel,
      },
    };
  }


export default Order;