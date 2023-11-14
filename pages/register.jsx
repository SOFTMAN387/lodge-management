"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header1 from "@/components/Header1";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr]=useState("");


  const router = useRouter();

  const handleSignup = async () => {
    // console.log(name,email,password);
    try {
      
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });
    console.log(res);
    if (res?.data) {
      // Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }     
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
  };

  return (
    <> <Header1 />
     <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex justify-center items-center ">
   
   <div className="m-10  ">
     <h3 className=" text-2xl font-bold ml-10">Login / Signup</h3>
            <input
                  type="text"
                  placeholder="Enter your name..."
                  className=" outline-none border my-3 border-black px-3 ml-10 w-75 h-10"
                  onChange={(e) => setName(e.target.value)}
                />
                  <input
                type="email"
                placeholder="Enter your email..."
                className=" outline-none border my-3 border-black px-3 ml-10 w-75 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter yourt password..."
                className=" outline-none border my-3 border-black px-3 ml-10 w-75 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              
              
                <button
                type="submit"
                className="ml-10 w-60 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={ handleSignup}
              >
                Sign Up
              </button>
              {err && <span className="text-red-400 text-sm ml-10">{err}</span>}
              <br/>
              <p className=" ml-10 text-xl">
                <span>
                  "Already have an account ?
                </span>
               
                    <span
                  className=" ml-10 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                >
           
              <Link href={"/login"}>
                  Login
                  </Link>
                </span>
             
               
              </p>
            </div>
          </div>
        </div>
   
 
    </>
   
   
  );
};

export default Register;