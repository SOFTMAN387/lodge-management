"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch,useSelector } from "react-redux";
import { actions } from "@/redux/reducers/oyoReducers";
const Header1 = () => {

  const router = useRouter();
  const dispatch=useDispatch();
  const authUser= useSelector((state) => state.currentUser[0]) || [];


  const handleLogout = () => {
    dispatch(actions.logoutUser());
    router.push("/login");
  };
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10 w-full">
    <Link href={"/"}>
    <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
    </Link>
      {/* <div className=" h-full flex md:hidden sm:hidden">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />
        <div className="flex items-center px-3 ">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className=" w-10 h-10 rounded-full mr-5"
          />
        
          
        </div>
      
      </div> */}
     
      {authUser?.token ? (
        <>
          <Link href={`/ordered/${authUser?.emailExists?._id}`}  className=" ml-1 border-b-2  pb-1 hover:cursor-pointer font-bold">
              Your Hotel
        </Link>
            <h3
            className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer font-bold"
              onClick={handleLogout}
            >
              Logout
            </h3>
            </>
          ) : (
            <Link href={"/login"}  className=" ml-1 border-b-2  pb-1 hover:cursor-pointer font-bold">
              Login / Signup
            </Link>
          )}
    </div>
  );
};

export default Header1;