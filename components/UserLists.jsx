import React from 'react';
import axios from 'axios';
import  { useRouter } from 'next/router';
const UserLists = ({users}) => {

    const router=useRouter();

  const UpdateAdminStatus=async(id)=>{
    try {
        const userById=await axios.get(`/api/user/${id}`);
        const user=userById?.data?.Users;
        console.log(userById?.data?.Users?.role);
        if(user?.role==="user"){
            const UpdateUser=await axios.patch(`/api/user/${id}`,{
                "role":"admin"
              });
              if(UpdateUser.status===200){
                router.push("/admin");
              }
        }else{
            const UpdateUser=await axios.patch(`/api/user/${id}`,{
                "role":"user"
              });
              if(UpdateUser.status===200){
                router.push("/admin");
              }
        }

    } catch (error) {
      console.log(error);
    }


  }

    const DeleteUser=async(id)=>{
        try {
          const DeleteUser=await axios.delete(`/api/user/delete`,{
            data:{
              "id":id,
            }    
          });
        //   console.log(DeleteUser);
          if(DeleteUser.status===200){
            alert(`Deleted Id${id}`)
            router.push("/admin");
          }
        } catch (error) {
          console.log(error);
        }
    
    
      }

  return (
   <>
   
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className='text-right m-2'>
            <button className=" w-40 text-white h-14 rounded-lg bg-blue-400 text-lg">
               Total Users {users?.length}
            </button>
      </div>
   
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 ">
            <tr>
            <th scope="col" className="px-6 py-3">
                   #ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                   Admin
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users?.map((users,i)=>{
                return(<>
                     <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 " key={i}>
                     <td className="px-6 py-4">...{users?._id.slice(-5)}</td>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                    <div className="ps-3">
                        <div className="text-base font-semibold">{users?.name}</div>
                        {/* <div className="font-normal text-gray-500">{users?.email}</div> */}
                    </div>  
                </th>
                <td className="px-6 py-4">
                {users?.email}
                </td>
                <td className="px-6 py-4">
                ...{users?.password.slice(-5)}
                </td>
                <td className="px-6 py-4">
                    <label className="relative inline-flex items-center me-5 cursor-pointer" onClick={()=>UpdateAdminStatus(users?._id)}>
                    <input type="checkbox" value="" className="sr-only peer"  checked={users?.role==="admin"?"checked":""} />
                        {/* {users?.role==="admin"? <input type="checkbox" value="" className="sr-only peer" adminSwitch />:
                        <input type="checkbox" value={users?.role} className="sr-only peer" onChange={(e)=>setAdminSwitch(e.target.value)}  />} */}
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                        </div>
                        </label>
                 </td>
                <td className="px-6 py-4">
                   {users?.role==="admin"? <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Admin
                    </div>: <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> User
                    </div>}
                </td>
                <td className="px-6 py-4  ">
                        <button onClick={()=>DeleteUser(users?._id)} className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline">Delete</button>
                 </td>
            </tr>
                </>)
            })}

           
        </tbody>
    </table>
</div>

   </>
  )
}

export default UserLists;

