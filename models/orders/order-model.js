import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    bookingDate: {
      type: String,
      required: true,
      trim: true,
    },
    leavingDate: {
      type: String,
      required: true,
      trim: true,
    },
    male: {
      type: String,
      required: true,
    },
    female: {
        type: String,
        required: true,
      },
    child: {
        type: String,
        required: true,
      },
    shippingAddress: {
        type:Object,
        required: true,
      },
    token: {
        type:Object,
        required: true,
      },
   
    totalAmount: {
      type: Number,
    },
    userId:{
        type:String,
        required:true,
    },
    userHoteldata:{
      type:Object,
      required:true,
    },
    userOrderStatus:{
      type:String,
      default:"pending"
  }
  },
  { timestamps: true }
);

export default mongoose.models?.order || mongoose.model("order", orderSchema);