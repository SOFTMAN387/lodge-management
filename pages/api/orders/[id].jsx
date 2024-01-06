import connectDB from "@/mongoDB/connectdb";
import Order from "@/models/orders/order-model";

export default async function handler(req,res){
    try {
        if(req.method==="GET"){
            connectDB();
            if(req.query.id){
                const order = await Order.find({userId:req.query.id});
                res.status(200).json({msg:"Good" , order});
            }
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
  
}