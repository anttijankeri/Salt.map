import express from "express";
import mapRouter from "./map";
import userRouter from "./users";

const router = express.Router();

router.use("/maps", mapRouter);
router.use("/users", userRouter);

export default router;
