"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header1 from "@/components/Header1";
import axios from "axios";
import { actions } from "@/redux/reducers/oyoReducers";
import { useDispatch } from "react-redux";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";

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
       <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className=" absolute w-full top-10 px-20 flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className=" font-bold text-2xl  ">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div className=" text-white">
            <p className=" font-bold text-5xl text-justify">
              There’s a smarter way to OYO around
            </p>
            <p className=" text-2xl mt-5 text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10">
              <h3 className=" text-5xl font-bold my-5">Login / Signup</h3>
              <p className=" font-bold text-lg mb-1">
                Please enter your phone number to continue
              </p>
             
                  <input
                type="email"
                placeholder="Enter your email..."
                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter yourt password..."
                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              
                <button
                type="submit"
                className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={handleLogin }
              >
              Login
              </button>
              {err && <span className="text-red-400 text-sm">{err}</span>}
              <br/>
              <p className=" my-1 text-xl">
                <span>
                 Don`t have an account ?
                </span>
             
                    <span
                  className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                
                >
                  <Link href={"/register"}>
                  Sin Up
                  </Link>
                </span>
               
               
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div></>
 
  );
};

export default Login;