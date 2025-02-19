import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    pickupLocation:{
      type:String,
      required:true,
      trim:true
    },
    dropoffLocation:{
      type:String,
      required:true,
      trim:true
    },
    distance:{
      type:Number,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    pickupDateTime:{
      type:Date,
      required:true
    },
    orderStatus:{
      type:String,
      default:'Pending'
    }
  },
  { timestamps: true }
);

const Order = mongoose.model('Order',orderSchema);
export default Order;