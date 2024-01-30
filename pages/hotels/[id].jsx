"use client";
import Head from "next/head";
import Image from "next/image";
import Header1 from "@/components/Header1";
import { useSelector } from "react-redux";
import Link from "next/link";
import Footer from "@/components/Footer";


const SingleHotel = ({ hotel }) => {
  const authUser= useSelector((state) => state.currentUser[0]) || [];


  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <Header1 />
      <div className="w-7/12 mx-auto my-10 ">
        <Image
          src={hotel?.banner}
          alt="hotel"
          width={200}
          height={200}
          className=" w-full  my-5"
        />
        <div className=" ">
          <h3 className=" text-3xl font-bold">{hotel?.name}</h3>
          <p className=" text-sm my-5 ">{hotel?.description}</p>
          <button className=" w-60 h-14 rounded-lg bg-blue-400 text-white text-lg">
            Price : &#8377; {hotel?.price}
          </button>
          <p className=" text-3xl font-bold my-5">Facilities : </p>
          <ul className=" flex text-xl justify-between flex-col  lg:flex-row">
            {hotel
              ? hotel.facilities?.map((ele) => {
                  return (
                    <li
                      key={ele._id}
                      className=" mr-10 mb-3 flex items-center"
                    >
                      <span>
                        <Image
                          src={ele.img}
                          width={200}
                          height={200}
                          className="w-8 h-8 rounded-full"
                          alt="er-manishgupta"
                        />
                      </span>
                      <span className="ml-5">{ele.name}</span>
                    </li>
                  );
                })
              : ""}
          </ul>

          {authUser?.token? (
            <Link href={`/orders/${hotel?._id}`}>
              <button className=" w-60 h-14 text-white rounded-lg bg-red-400 my-5 text-lg">
                Book Now
              </button>
            </Link>
          ) : (
            <Link href={`/login`}>
              <button className=" w-60 h-14 text-white rounded-lg bg-red-400 my-5 text-lg">
                Book Now
              </button>
            </Link>
          )}
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;