import React from 'react'
// import User from '@/models/users/user-model'
const UserLists = ({users}) => {
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
                    Role
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
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
                {users?.role}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
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

