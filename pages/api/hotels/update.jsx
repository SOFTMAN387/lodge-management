import connectDB from "@/mongoDB/connectdb";
import Hotels from "@/models/hotels/hotel-model";
export default async function handler(req, res) {
 
  try {
    connectDB();
  
      if(req.method==="PUT"){
       const {_id}=req.body;
        if(_id){
            const Hotel = await Hotels.findByIdAndUpdate({_id:_id},req.body,{new:true});
            res.status(200).json({msg:"Hotel Updated" ,Hotel});
        }else{
        return res.status(200).json({ msg: "No Hotel updated !" });
        }
    }
    
  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}