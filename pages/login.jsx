"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header1 from "@/components/Header1";
import Image from "next/image";
import axios from "axios";
import { actions } from "@/redux/reducers/oyoReducers";
import { useDispatch } from "react-redux";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const Login = () => {
  const dispatch=useDispatch();
const [err,setErr]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      
    const res = await axios.post(`/api/user/login`, {
      email,
      password,
    });
    if (res?.data) {
      // Cookies.set("user", res.data.token, { expires: 7 });
      dispatch(actions.loginUser([res.data]));
      alert(res.data.msg);
      router.push("/");
    }
      
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <>
    <Header1 />
      <Head>
        <title>Er. Manish Gupta's Lodge - Login !</title>
      </Head>
   <section className="bg-gray-50 dark:bg-gray-100">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-red">
          <Image className="w-8 h-8 mr-2" src="https://www.freeiconspng.com/uploads/lodge-icon-3.jpg" width={20} height={20} alt="logo" />
         HospitalityHub 
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-pink-600 to-red-400 dark:border-gray-200">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required="" />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <button
                type="submit"
                className=" w-60 h-14 text-lg font-bold bg-red-600 hover:cursor-pointer hover:bg-red-800 text-white ml-10 rounded-lg"
                onClick={handleLogin }
              >
              Login
              </button>
              <br/>
              {err && <span className="text-black-400 text-sm ml-10">{err}</span>}
              <p className=" ml-10 text-xl">
                <span className="text-white"> Don`t have an account ? </span>
              <span className=" ml-10 border-b-2  text-white pb-1 hover:cursor-pointer"
             ><Link href={"/register"}>
                  Sin Up
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

export default Login;