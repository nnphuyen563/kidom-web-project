import donetv from "dotenv";
donetv.config();

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

import { dbConnect } from "./configs/database.config";
dbConnect();

import productRouter from './routers/product.router';
import userRouter from './routers/user.router';

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:` + port);
})