"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header1 from "@/components/Header1";
import axios from "axios";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Image from "next/image";

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

      <Head>
        <title>OYO - Login !</title>
      </Head>
   

<section className="bg-gray-50 dark:bg-gray-100">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-red">
          <Image className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
         HospitalityHub 
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-pink-600 to-red-400 dark:border-gray-200">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create your account
              </h1>
              <div className="space-y-4 md:space-y-6">
              <div>
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" name="name" id="name"   onChange={(e) => setName(e.target.value)} className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter You Name" required="" />
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter You Email" required="" />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <button
                type="submit"
                className=" w-60 h-14 text-lg font-bold bg-red-600 hover:cursor-pointer hover:bg-red-800 text-white ml-10 rounded-lg"
                onClick={ handleSignup}
              >
             SinUp
              </button>
              <br/>
              {err && <span className="text-black-400 text-sm ml-10">{err}</span>}
              <p className=" ml-10 text-xl">
                <span className="text-white"> have an account ? </span>
              <span className=" ml-10 border-b-2  text-white pb-1 hover:cursor-pointer"
             ><Link href={"/login"}>
                  SinIn Here !
                  </Link>
                </span>
               
               
               
              </p>
              </div>
          </div>
      </div>
  </div>
</section>
<Footer />      
 
    </>
   
   
  );
};

export default Register;