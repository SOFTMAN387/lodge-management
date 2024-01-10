import connectDB from "@/mongoDB/connectdb";
import Hotel from "@/models/hotels/hotel-model";

export default async function handler(req,res){
    try {
        connectDB();
        if(req.method==="GET"){
          
            if(req.query.id){
                const hotel = await Hotel.findById(req.query.id);
                res.status(200).json({msg:"Good" , hotel});
            }
        }
        //Updating Hotel=======================
        // if(req.method==="PUT"){
        //     const {data}=req.body;
        //     if(req.query.id){
        //         const Hotel = await Hotel.findByIdAndUpdate({_id:req.query.id},{$set:data},{new:true});
        //         res.status(200).json({msg:"Hotele Updated" ,Hotel});
        //     }else{
        //     return res.status(200).json({ msg: "No Hotel Updated !" });
        //     }
        // }
        
    } catch (error) {
        res.status(500).json({msg:error});
    }
  
}