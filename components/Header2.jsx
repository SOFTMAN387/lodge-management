import { useState } from "react";
import Link from "next/link";

const Header2 = () => {
  const [city, setCity] = useState("");
  console.log(city);

    const List = [
      {
        name: "Patna",
        _id:1,
      },
      {
        name: "Gaya",
        _id:2,
      },
      {
        name: "Muzaffarpur",
        _id:3,
      },
      {
        name: "Samastipur...",
        _id:4,
      },
    ];
    return (
      <div>
        <div className="flex px-5  py-3 bg-gray-100 justify-between w-full">
          {
              List.map((e)=>{
                  return(
                      <span key={e._id} >{e.name}</span>
                  )
              })
          }
        </div>
                
        <form className="max-w-sm mx-auto my-5">
          {/* <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
          <select id="countries" onChange={(e)=>setCity(e.target.value)} className="bg-white-50 border border-gray-300 text-dark-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Select Distric</option>
            <option value="patna" >Patna</option>
            <option value="muzaffarpur">Muzaffarpur</option>
            <option value="gaya">Gaya</option>
            <option value="samastipur">Samastipur</option>
            <option value="Bhagalpur" disabled>Bhagalpur</option>
            <option value="Araria" disabled>Araria</option>
            <option value="Arwal" disabled>Arwal</option>
            <option value="Arrah" disabled>Arrah</option>
            <option value="Banka" disabled>Banka</option>
            <option value="Begusarai" disabled>Begusarai</option>
            <option value="Bhojpur" disabled>Bhojpur</option>
            <option value="Buxar" disabled>Buxar</option>
            <option value="Darbhanga" disabled>Darbhanga</option>
            <option value="East Champaran" disabled>East Champaran</option>
            <option value="Kaimur" disabled>Kaimur</option>
            <option value="Katihar" disabled>Katihar</option>
            <option value="Kishanganj" disabled>Kishanganj</option>
            <option value="Khagaria" disabled>Khagaria</option>
            <option value="Lakhisarai" disabled>Lakhisarai</option>
            <option value="Madhepur" disabled>Madhepur</option>
            <option value="Madhubani" disabled>Madhubani</option>
            <option value="Munger" disabled>Munger</option>
            <option value="Nalanda" disabled>Nalanda</option>
            <option value="Nawada" disabled>Nawada</option>
            <option value="Purnia" disabled>Purnia</option>
            <option value="Rohtas" disabled>Rohtas</option>
            <option value="Saharsha" disabled>Saharsha</option>
            <option value="Saran" disabled>Saran</option>
            <option value="Seikhpura" disabled>Seikhpura</option>
            <option value="Sheohar" disabled>Sheohar</option>
            <option value="Siwan" disabled>Siwan</option>
            <option value="Supaul" disabled>Supaul</option>
            <option value="Vaishali" disabled>Vaishali</option>
            <option value="West Champaran" disabled>West Champaran</option>
          </select>
          <Link href={`/hotels?city=${city.toLocaleLowerCase()}`}> <button type="button"  className="text-white mt-2 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go</button></Link>

        </form>
       

      </div>
    );
  };
  
  export default Header2;