import connectDB from "@/mongoDB/connectdb";
import User from "@/models/users/user-model";

export default async function handler(req, res) {
  try {
    connectDB();
  if(req.method==="DELETE"){
    const {id}=req.body;
     if(id){
         const Users = await User.findByIdAndDelete({_id:id},{new:true});
         res.status(200).json({msg:"Usere Deleted" ,Users});
     }else{
     return res.status(200).json({ msg: "No User Deleted !" });
     }
 }
  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}