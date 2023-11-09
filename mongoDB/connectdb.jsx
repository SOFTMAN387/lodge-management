import mongoose from "mongoose";
const URL=process.env.MONGODB_URL;
 
const  connectDB=()=>{
  // mongoose.set('strictQuery',true);
  mongoose.connect(URL,
      {
          useUnifiedTopology: true  })
  .then(()=>console.log("MongoDB Connected..."))
  .catch((error)=>console.log(error))
}

  
  export default connectDB;