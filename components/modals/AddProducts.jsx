import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProducts = ({setPrdctToggle}) => {
    const [ImgGallery1,setImgGallery1]=useState("");
    const [ImgGallery2,setImgGallery2]=useState("");
    const [ImgGallery3,setImgGallery3]=useState("");
    const [ImgGallery4,setImgGallery4]=useState("");

    const [facilitie1,setFacility1]=useState("");
    const [facilitie2,setFacility2]=useState("");
    const [facilitie3,setFacility3]=useState("");
    const [facilitie4,setFacility4]=useState("");
    const [facilitie5,setFacility5]=useState("");

    const [facilitieLogo1,setFacilityLogo1]=useState("");
    const [facilitieLogo2,setFacilityLogo2]=useState("");
    const [facilitieLogo3,setFacilityLogo3]=useState("");
    const [facilitieLogo4,setFacilityLogo4]=useState("");
    const [facilitieLogo5,setFacilityLogo5]=useState("");
    const [hotelData,setHotelData]=useState(
        {
            "name":"",
            "description":"",
            "banner":"",
            "price":"",
            "location":"",
            "availability":""
        }
    );
    const newHotelInput=(e)=>{
        e.preventDefault();
        setHotelData({...hotelData,[e.target.name]:e.target.value,
        });
        
    }

    const AddHotel=async()=>{
        try {
          const AddHotel=await axios.post(`/api/hotels/`,{
            ...hotelData,
                "gallery":[
                   ImgGallery1,
                   ImgGallery2,
                   ImgGallery3,
                   ImgGallery4
                 ],
                 "facilities":[
                    {
                        "img":facilitieLogo1,
                        "name":facilitie1
                    },
                     {
                        "img":facilitieLogo2,
                        "name":facilitie2
                    },
                     {
                        "img":facilitieLogo3,
                        "name":facilitie3
                    },
                     {
                        "img":facilitieLogo4,
                        "name":facilitie4
                    },     
                    {
                        "img":facilitieLogo5,
                        "name":facilitie5
                    },        
                ],
             
            }    
          );
        //   console.log(AddHotel);
          if(AddHotel.status===201){
          toast("Hotel Added !");
           setPrdctToggle(false);
            // router.push("/admin/hotellist");
            // redirect('/admin/');
          }
        } catch (error) {
          console.log(error);
        }
    
    
      }
  return (
   <>
   <div  className=" overflow-y-auto overflow-x-auto ml-center mt-5 z-50 justify-center items-center w-[800px] md:inset-0 h-[calc(100%-2rem)] max-h-full">
   <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
          />
    <div className="relative p-4 w-full max-w-x-lg max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-100">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark" >
                    Create New Product
                </h3>
                <button type="button" onClick={()=>setPrdctToggle(false)} className="text-gray-100 bg-red-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only" >Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Name</label>
                        <input onChange={newHotelInput} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Price</label>
                        <input onChange={newHotelInput} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Location</label>
                        <input onChange={newHotelInput} type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter City Name" required="" />
                    </div>
                    
                    <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Availability</label>
                        <select onChange={newHotelInput} id="category" name='availability' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option >true</option>
                            <option >false</option>
                            
                        </select>
                    </div>
                    
                    <div className="col-span-2">
                        <label for="banner" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Banner Link</label>
                        <input onChange={newHotelInput} type="text" name="banner" id="banner" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Banner url" required="" />
                    </div>
                    <div className="col-span-2">
                        <label for="gallery1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Gallery 1 Link</label>
                        <input onChange={(e)=>setImgGallery1(e.target.value)} type="text" name="gallery1" id="gallery1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Facility url" required="" />
                    </div>
                    <div className="col-span-2">
                        <label for="gallery2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Gallery2 Link</label>
                        <input onChange={(e)=>setImgGallery2(e.target.value)} type="text" name="gallery2" id="gallery2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Gallery url" required="" />
                    </div>
                    <div className="col-span-2">
                        <label for="gallery3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Gallery3 Link</label>
                        <input onChange={(e)=>setImgGallery3(e.target.value)} type="text" name="gallery3" id="gallery3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Gallery url" required="" />
                    </div>
                    <div className="col-span-2">
                        <label for="gallery3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Gallery4 Link</label>
                        <input onChange={(e)=>setImgGallery4(e.target.value)} type="text" name="gallery4" id="gallery4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Gallery url" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="facilities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Facility 1 Name</label>
                        <input onChange={(e)=>setFacility1(e.target.value)} type="text" name="facilitie1" id="facilities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Facilities" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="gallery1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Image Url</label>
                        <input onChange={(e)=>setFacilityLogo1(e.target.value)} type="text" name="facility-logo1" id="facility-logo1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Gallery url" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="facilities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Facility 2 Name</label>
                        <input onChange={(e)=>setFacility2(e.target.value)} type="text" name="facilitie2" id="facilitie2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Facilities" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="gallery1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Image Url</label>
                        <input onChange={(e)=>setFacilityLogo2(e.target.value)} type="text" name="facility-logo2" id="facility-logo2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Facility url" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="facilities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Facility 3 Name</label>
                        <input onChange={(e)=>setFacility3(e.target.value)} type="text" name="facilities" id="facilities" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Facilities" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="gallery1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Image Url</label>
                        <input onChange={(e)=>setFacilityLogo3(e.target.value)} type="text" name="facility-logo3" id="facility-logo3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Facility url" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="facilities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Facility 4 Name</label>
                        <input onChange={(e)=>setFacility4(e.target.value)} type="text" name="facilitie4" id="facilitie4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Facilities" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="gallery4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Image Url</label>
                        <input onChange={(e)=>setFacilityLogo4(e.target.value)} type="text" name="facility-logo4" id="facility-logo4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Facility url" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="facilities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Facility 5 Name</label>
                        <input onChange={(e)=>setFacility5(e.target.value)} type="text" name="facilitie5" id="facilitie5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Facilities" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                    <label for="gallery5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Image Url</label>
                        <input onChange={(e)=>setFacilityLogo5(e.target.value)} type="text" name="facility-logo5" id="facility-logo5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Paste Facility url" required="" />
                    </div>
                    <div className="col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">Product Description</label>
                        <textarea id="description" onChange={newHotelInput} name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button onClick={AddHotel} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new product
                </button>
                <button  onClick={()=>setPrdctToggle(false)} className="text-white inline-flex items-center ml-2 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div> 
   </>
  )
}

export default AddProducts;