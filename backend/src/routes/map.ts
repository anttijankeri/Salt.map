import express from "express";
import client from "../prisma";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("index");
});

export default router;
