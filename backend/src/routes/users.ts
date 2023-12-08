import express from "express";
import client from "../prisma";

const router = express.Router();

router.get("/:id", async (req, res) => {
  res.send("get one user here");
});

router.post("/", async (req, res) => {
  res.send("add one user here");
});

router.delete("/:id", async (req, res) => {
  res.send("remove one user here");
});

export default router;
