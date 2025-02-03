import dotenv from "dotenv";
import express from "express";
import process from "node:process"
import database from "./database.js";

dotenv.config();
database()
const PORT = process.env.PORT || 8001;

const app=express();
app.use(express.json())
app.listen(PORT, () => console.log(`server running port ${PORT}`));