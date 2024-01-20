import connectDB from "@/mongoDB/connectdb";
import User from "@/models/users/user-model";

export default async function handler(req,res){
    try {
        connectDB();
        //Fetching User Data by User's Id...=================
        if(req.method==="GET"){
         
            if(req.query.id){
                const Users = await User.findById(req.query.id);
                res.status(200).json({msg:"Good" , Users});
            }
        }

         //Updating User Status By User Id...=================
        if(req.method==="PATCH"){
            if(req.query.id){
                const Users = await User.findByIdAndUpdate({_id:req.query.id},{$set:req.body},{new:true});
                res.status(200).json({msg:"Good" , Users});
            }
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
  
}