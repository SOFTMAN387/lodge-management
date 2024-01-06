import connectDB from "@/mongoDB/connectdb";
import Hotel from "@/models/hotels/hotel-model";

export default async function handler(req, res) {
  try {
    connectDB();
    // if (req.method === "POST") {
    //   const newHotel = new Hotel(req.body);
    //   const result = await newHotel.save();
    //   res.status(201).json({ msg: "Hotel added !", result });
    // }

  if (req.method === "GET") {
    const hotels = await Hotel.find({location:req.query.city});
    if (hotels.length > 0) {
      return res.status(200).json({ msg: "Good", hotels });
    }else{
      const allhotels = await Hotel.find({});
      return res.status(200).json({ msg: "Good", allhotels });
    }
  }
  
  if(req.method==="DELETE"){
    const {id}=req.body;
     connectDB();
     if(id){
         const Hotel = await Hotel.findByIdAndDelete({_id:id},{new:true});
         res.status(200).json({msg:"Hotele Deleted" ,Hotel});
     }else{
     return res.status(200).json({ msg: "No Hotel Deleted !" });
     }
    }


  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}