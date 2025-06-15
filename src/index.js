import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/messageRoutes.js"
import { connectDB } from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config();
const app =express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}
))


app.use("/api/auth",authRoutes);

app.use("/api/message",messageRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});



const port =8787;





app.listen(port,(req,res)=>{
  console.log("port is running on ",port);
  connectDB();
})
