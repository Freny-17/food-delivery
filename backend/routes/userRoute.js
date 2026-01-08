import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("USER ROUTE WORKING");
});

export default router;
