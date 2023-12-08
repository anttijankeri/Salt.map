import express from "express";
import client from "../prisma";
import { validateUSer } from "../validate";

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const data = await client.user.findUnique({
      where: { hash: req.params.id },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;

    const validate = validateUSer(body);
    if (!validate.success) {
      return res.status(400).send("Faulty data");
    }

    const result = await client.user.create({ data: body });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const attempt = await client.user.delete({
      where: { hash: req.params.id },
    });
    res.json(attempt);
  } catch (error) {
    next(error);
  }
});

export default router;
