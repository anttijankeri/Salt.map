import express from "express";
import client from "../prisma";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await client.user.findMany();
  res.json(data);
});

export default router;
