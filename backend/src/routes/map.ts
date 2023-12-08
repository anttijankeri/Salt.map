import express from "express";
import client from "../prisma";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("all pins on map here");
});

router.get("/:id", (req, res) => {
  res.send("one pin on map here");
});

router.post("/", (req, res) => {
  res.send("add a single pin here");
});

router.patch("/:id", (req, res) => {
  res.send("update single pin here");
});

export default router;
