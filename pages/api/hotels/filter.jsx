import connectDB from "@/mongoDB/connectdb";
import Hotel from "@/models/hotels/hotel-model";

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {

            connectDB();
            const key = req.query.val;
            const price=req.query.price;
            const facilities = await Hotel.find({"location":req.query.city,"facilities.name": { $in: key },"price":{$lte:price} });
            res.status(200).json({ msg: "Achha Lagta hai !", facilities });
          }
    } catch (error) {
        res.status(200).json({ msg: error});
    }
  
}