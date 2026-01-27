import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";

dotenv.config(); // 🔴 MUST load .env first

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("upload"));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get("/", (req, res) => {
  res.send("API Working");
});

// connect DB then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
  });
});
