import connectDB from "@/mongoDB/connectdb";
import Order from "@/models/orders/order-model";

export default async function handler(req, res) {
  try {
    connectDB();
    if (req.method === "POST") {
      const newOrder = new Order(req.body);
      const result = await newOrder.save();
      res.status(201).json({ msg: "Order added !", result });
    }

  // if (req.method === "GET") {
  //   const Orders = await Order.find({userId:req.query.id});
  //   if (Orders.length > 0) {
  //     return res.status(200).json({ msg: "Good", Orders });
  //   }else{
  //     return res.status(200).json({ msg: "No Order Yet !" });
  //   }
   
  // }
    
  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}