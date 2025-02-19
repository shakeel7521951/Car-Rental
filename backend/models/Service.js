import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    serviceCategory: {
      type: String,
      required: true,
      trim: true,
    },
    price:{
      type:Number,
      required:true
    },
    image:{
      type:String,
      required:true
    }
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
