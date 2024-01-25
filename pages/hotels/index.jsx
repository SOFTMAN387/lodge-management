import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import Filters from "@/components/Filter";
import {useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

const Hotels = ({ hotels }) => {

  const[price,setPrice]=useState(0);
  const [checkedList, setCheckedList] = useState([]);
  const [total,setToal]=useState(0);

  const handleCheckList = async (e) => {
  
    let newList = [];
    if (e.target.checked===true) {
      newList.push(...checkedList,e.target.value);
      setCheckedList(newList);
      return;
    }
    if(e.target.checked===false){
      newList = checkedList.filter((i) => i !== e.target.value);
      setCheckedList(newList);
    }
   
  };

  
  const [list, setList] = useState([]);

  const handleSearch = async () => {
    const filterData=hotels.filter((item)=>{
    for(let val of item.facilities){
      if( checkedList.includes(val.name) && item.price<=price){
        return item;
      }
    
    }
    });
    setToal(filterData?.length);
    if (filterData.length>0) { 
      setList(filterData);
    }else{
      setList([]);
    }
  
  };

  return (
    <>
      <Header1 />
      <div className="lg:flex  justify-center items-center w-full">
        {hotels?.length>0? 
        <Filters
            price={price}
            setPrice={setPrice}
            handleCheckList={handleCheckList}
            handleSearch={handleSearch}     
            // checkedList={checkedList}
          />:
          <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                  <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                      <div className="relative">
                          <div className="absolute">
                          <p className="my-2 text-gray-800">Please Match Your Distric Name </p>
                              <div className="">
                                  <h1 className="my-2 mb-5 text-gray-800 font-bold text-2xl">
                                  Opps Nothing Found!
                                  </h1>
                                 
                                  <Link href={`/`} className="sm:w-full lg:w-autoborder rounded md py-4 px-8 text-center bg-gradient-to-r from-pink-600 to-red-400 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50">Take me there!</Link >
                              </div>
                          </div>
                          <div>
                              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="img-alt" />
                          </div>
                      </div>
                  </div>
                  {/* <div>
                      <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                  </div> */}
              </div>
        }
         
      
       
       </div>
       <span className="flex text-center justify-center items-center">Searched Lodge ! {total} </span>
        <hr/>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {list?.length > 0
            ? list?.map((e) => {
                return (
                  <div  key={e._id}>
                    <Hotel  e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels?.map((e) => {
                return (
                  <div  key={e._id}>
                    <Hotel  e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      <Footer />
    </>
  );
};


export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;