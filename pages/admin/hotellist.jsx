import React, { use } from 'react'
import AdminCard from '@/components/AdminCard';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from 'react';
import axios from "axios";
import AddProducts from '@/components/modals/AddProducts';
import EditProducts from '@/components/modals/EditProducts';
const hotellist = ({hotels}) => {
  const[PrdctToggle,setPrdctToggle]=useState(false);
  const[EditToggle,setEditToggle]=useState(false);

  const router = useRouter();
  const DeleteHotel=async(id)=>{
    confirm(`Deleted Id${id}`)
    try {
      const DeleteHotel=await axios.delete(`/api/hotels/delete`,{
        data:{
          "id":id,
        }    
      });
      console.log(DeleteHotel);
      if(DeleteHotel.status===200){
        router.push("/admin/hotellist");
        // redirect('/admin/');
      }
    } catch (error) {
      console.log(error);
    }


  }
  return (
   <>
    <AdminCard />

    {/* Add Product Modal starts */}
    <div className='flex justify-center items-center w-full mt-5'>
    {PrdctToggle===true && <AddProducts setPrdctToggle={setPrdctToggle}/>}
    </div>
     {/* Add Product Modal ends */}
     
    {/* Edit Product Modal starts */}
    <div className='flex justify-center items-center w-full mt-5'>
    {EditToggle===true && <EditProducts setEditToggle={setEditToggle}/>}
    </div>
     {/* Edit Product Modal ends */}
   
    <span className='w-40 ml-2 mt-5 h-14'>Total Hotels {hotels?.length}</span>
      <div className='text-right m-2'>
      <button onClick={()=>setPrdctToggle(true)} className=" w-40 text-white h-14 rounded-lg bg-blue-400 text-lg">
        Add New        
    </button>
      </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full" >
            <tr>
                <th scope="col" className="px-6 py-3">
                 #ID
                </th>
                <th scope="col" className="px-16 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Hotel Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {hotels?.map((e) => {
                return (
                    <tr className="bg-white border-b  dark:border-gray-700 hover:bg-red-500 dark:hover:bg-gray-200" key={e?.id}>
                        
                    <td  className="px-6 py-4 font-semibold text-gray-900 ">
                        {e._id.slice(-5)}
                    </td>
                    <td className="p-4">
                        <Image src={e.banner} className="w-16 md:w-32 max-w-full max-h-full" 
                         width={300}
                         height={300} alt="Apple Watch" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                       {e?.name}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                    &#8377; {e?.price}
                    </td>
                    <td className="px-6 py-4 flex text-center align-center mt-2 ">
                        <a href="#" onClick={()=>setEditToggle(true)} className="font-medium text-red-600 dark:text-green-500 hover:underline">Edit</a>
                        <a href="#" onClick={()=>DeleteHotel(e?._id)} className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Delete</a>
                    </td>
                </tr>
                );
              })}
           
           
           
        </tbody>
    </table>
</div>

    

   </>
  )
}

export default hotellist;


export async function getServerSideProps() {
    const res = await fetch(
      `${process.env.BASE_URL}/api/hotels/`
    );
    const data = await res.json();
  
    return {
      props: {
        hotels:data.allhotels||null,
      },
    };
  }