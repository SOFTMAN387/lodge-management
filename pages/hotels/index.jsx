import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import Filters from "@/components/Filter";
import axios from "axios";
import { useEffect, useState } from "react";
import connectDB from "@/mongoDB/connectdb";

const Hotels = ({ hotels,loc }) => {
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

//   const [facilityList,setFacilityList]=useState({
//     "wifi":"",
//     "swiming":"",
//     "garden":"",
//     "parking":"",
//     "gym":""

// });

// const handleCheckList = async (e) => {
//   if(e.target.checked===true){
//       setFacilityList({...facilityList,[e.target.name]:e.target.value});
//   }

//   if(e.target.checked===false){
//       setFacilityList({...facilityList,[e.target.name]:""}); 
//   }
// }
  
  const [list, setList] = useState([]);

  const handleSearch = async () => {
    const { data } = await axios.get(`/api/hotels/filter?city=${loc}&val=${checkedList}&price=${price}`);
    setToal(data?.facilities?.length);
    if (data?.hotels) {
     
      setList(data.hotels);
    }
  };

  return (
    <>
      <Header1 />
      <div className="flex justify-center items-center w-full">
          <Filters
            price={price}
            setPrice={setPrice}
            handleCheckList={handleCheckList}
            handleSearch={handleSearch}     
            checkedList={checkedList}
          />
      
       
       </div>
      
    
        <span className="text-center">Hotel Searched Founs ! {total}</span>
        <hr/>
          {list?.length > 0
            ? list?.map((e) => {
                return (
                  <div className="" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels?.map((e) => {
                return (
                  <div className="full " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
     
       
    
    
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