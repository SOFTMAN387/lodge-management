import connectDB from "@/mongoDB/connectdb";
import User from "@/models/users/user-model";
import bcrypt from "bcrypt";


export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All Fields are Mandatory !" });
    }
    const emailExists = await User.findOne({ email:email });
    if (emailExists) {
      return res.status(400).json({ msg: "User already Registered !" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    return res
      .status(201)
      .json({ msg: "Registered Succesfully !",user:result });
  }
}
  