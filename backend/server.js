<<<<<<< HEAD
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


=======
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config(); // 🔴 MUST load .env first

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("upload"));
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)


<<<<<<< HEAD
const app  = express()
const port = 4000


app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('upload'))



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
=======
// connect DB then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
  });
});
>>>>>>> 674e90e (Updated project with new backend, admin panel, and fixes)
