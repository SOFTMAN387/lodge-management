import connectDB from "@/mongoDB/connectdb";
import Hotel from "@/models/hotels/hotel-model";

export default async function handler(req,res){
    try {
        if(req.method==="GET"){
            connectDB();
            if(req.query.id){
                const hotel = await Hotel.findById(req.query.id);
                res.status(200).json({msg:"Good" , hotel});
            }
        }
        
    } catch (error) {
        res.status(500).json({msg:error});
    }
  
}