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
      <div className="flex justify-center items-center ">
   
            <div className="m-10  ">
              <h3 className=" text-2xl font-bold ml-10">Login / Signup</h3>
              <p className=" font-bold text-lg ml-10">
                Please enter your phone number to continue
              </p>
             
                  <input
                type="email"
                placeholder="Enter your email..."
                className=" outline-none border my-3 border-black px-3 py-1 w-75 ml-10 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter yourt password..."
                className=" outline-none border my-3 border-black px-3 py-1 w-75 ml-10 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              
                <button
                type="submit"
                className=" w-60 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white ml-10 rounded-lg"
                onClick={handleLogin }
              >
              Login
              </button>
              <br/>
              {err && <span className="text-red-400 text-sm ml-10">{err}</span>}
              <br/>
              <p className=" ml-10 text-xl">
                <span>
                 Don`t have an account ?
                </span>
             
                    <span
                  className=" ml-10 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                
                >
                  <Link href={"/register"}>
                  Sin Up
                  </Link>
                </span>
               
               
               
              </p>
            </div>
          </div>
        </div>

    </>
 
  );
};

export default Login;