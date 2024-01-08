import connectDB from "@/mongoDB/connectdb";
import Hotels from "@/models/hotels/hotel-model";
export default async function handler(req, res) {
 
  try {
    connectDB();
  
      if(req.method==="DELETE"){
       const {id}=req.body;
        if(id){
            const Hotel = await Hotels.findByIdAndDelete({_id:id},{new:true});
            res.status(200).json({msg:"Hotel Deleted" ,Hotel});
        }else{
        return res.status(200).json({ msg: "No Hotel Deleted !" });
        }
    }
    

    
  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}