import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/user", userRoute);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
