import express from "express";
import client from "../prisma";
import { validatePost, validateUpdate } from "../validate";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await client.coordinates.findMany({ include: { user: true } });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = await client.coordinates.findFirst({
      where: { user: { hash: req.params.id } },
      include: { user: true },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;

    const validate = validatePost(body);
    if (!validate.success) {
      return res.status(400).send(validate.error.issues);
    }

    const user = await client.user.findUnique({
      where: { hash: body.userHash },
    });

    if (user) {
      return res.status(400).send("User already exists");
    }

    const newPin = {
      latitude: body.lat,
      longitude: body.lng,
    };

    await client.user.create({
      data: { name: body.name, hash: body.userHash, pin: { create: newPin } },
    });
    res.json({ ...newPin, name: body.name, hash: body.hash });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const validate = validateUpdate(body);
    if (!validate.success) {
      return res.status(400).send("Faulty data");
    }

    const user = await client.user.findUnique({
      where: { hash: id },
    });

    if (!user) {
      return res.status(400).send("User not found");
    }

    await client.coordinates.update({
      where: { id: user.id },
      data: body,
    });
    res.json(body);
  } catch (error) {
    next(error);
  }
});

export default router;
