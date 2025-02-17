import dotenv from "dotenv";
import express from "express";
import process from "node:process"
import database from "./database.js";
import userRoutes  from "./route/userroutes.js";

dotenv.config();
database()
const PORT = process.env.PORT || 8001;

const app=express();
app.use(express.json())
app.use("/user",userRoutes)
app.listen(PORT, () => console.log(`server running port ${PORT}`));