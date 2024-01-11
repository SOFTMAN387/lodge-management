import connectDB from "@/mongoDB/connectdb";
import Order from "@/models/orders/order-model";

export default async function handler(req,res){
    try {

        //Fetching Order Data by User's Id...=================
        if(req.method==="GET"){
            connectDB();
            if(req.query.id){
                const order = await Order.find({userId:req.query.id});
                res.status(200).json({msg:"Good" , order});
            }
        }

         //Updating Order Status By Order Id...=================
        if(req.method==="PATCH"){
            connectDB();
            if(req.query.id){
                const order = await Order.findByIdAndUpdate({_id:req.query.id},{$set:req.body},{new:true});
                res.status(200).json({msg:"Good" , order});
            }
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
  
}