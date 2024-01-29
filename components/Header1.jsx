"use client";
import Image from "next/image";
// import Block from "./Block";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch,useSelector } from "react-redux";
import { actions } from "@/redux/reducers/oyoReducers";
import styles from './Profile.module.css'
const Header1 = () => {

  const router = useRouter();
  const dispatch=useDispatch();
  const authUser= useSelector((state) => state.currentUser[0]) || [];
  const handleLogout = () => {
    dispatch(actions.logoutUser());
    router.push("/login");
  };
  return (
    <div className="m-0 p-0 flex justify-between border-b-2 border-gray-300 items-center h-24 px-7 w-full">
    <Link href={"/"}>
    {/* <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      /> */}
      <h1 className="text-2xl font-extrabold  text-red-400 dark:text-red ">HospitalityHub</h1>
    </Link> 
      {authUser?.token ? (
        <> 
        <label className={styles.dropdown}>

        <div className={styles.ddButton}>
       <Image src="https://tse1.mm.bing.net/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117" width={30} height={30} />
        </div>

        <input type="checkbox" className={styles.ddInput} id="test" />

        <ul className={styles.ddMenu}>
          <li><Link href={`/ordered/${authUser?.emailExists?._id}`}> Your Room </Link></li>
          <li  onClick={handleLogout}>Logout</li>
          <li className={styles.divider}></li>
          {authUser?.emailExists?.role==="admin"? <li>
          <Link href="/admin" className={styles.listItems}>Admin Panel</Link>
          </li>:""}
         
        </ul>
      </label>
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