import dotenv from "dotenv";
dotenv.config();   // 🔥 MUST BE FIRST

import express from "express";
import dbConnect from "./db/dbConnect.js";
import authRouter from "./route/authUser.js";
import messageRouter from "./route/messageRout.js";
import cookieParser from "cookie-parser";
import userRouter from "./route/userRoute.js";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  dbConnect();
  console.log(`working at ${PORT}`);
});
