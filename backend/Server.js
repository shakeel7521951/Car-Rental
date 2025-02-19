import dotenv from 'dotenv';
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';

import userRoutes from './routes/useRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Backend is running...");
})

const DB_URL = process.env.MONGO_URI;
mongoose.connect(DB_URL)
.then(()=>{
    console.log("Database is connected")
})
.catch(()=>{
    console.log("Error in connecting database");
});

app.use("/api/v1",userRoutes);
app.use("/api/v1",serviceRoutes);
app.use("/api/v1",orderRoutes);

app.listen(port,()=>{
    console.log(`Server is running on Port no ${port}`);
})