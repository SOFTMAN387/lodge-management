import connectDB from "@/mongoDB/connectdb";
import User from "@/models/users/user-model";

export default async function handler(req, res) {
  try {
    connectDB();

  if (req.method === "GET") {
    const Users = await User.find({});
    if (Users.length > 0) {
      return res.status(200).json({ msg: "Good", Users });
    }
  }
  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}