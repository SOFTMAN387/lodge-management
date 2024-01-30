"use client";
import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState(" ");

  return (
    <div className=" bg-gradient-to-r from-pink-600 to-red-400 h-85 w-100 items-center">
      <div className=" p-5">
        <form>
        <h2 className=" text-2xl text-white text-center font-bold">
         Specially for Bihar Engineering & Polytechnic,1000 + rooms.
        </h2>
        <div className="flex justify-center my-5 mx-20   ">
          <input
            type="text"
            placeholder="Search By Distric..."
            className=" w-12/12  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <button
            type="submit"
            className=" h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
          >
            {city===" "? <span>Search</span>: <Link href={`/hotels?city=${city.toLocaleLowerCase()}`}>Search</Link>}
           
          </button>
        </div>
        <div className="flex mx-5 my-5 font-bold">
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
          >
            Continue search
          </button>
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
          >
            Homestay in Bihar 
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Header3;