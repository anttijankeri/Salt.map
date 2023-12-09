import express from "express";
import client from "../prisma";
import { validatePost, validateUpdate } from "../validate";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await client.coordinates.findMany({ include: { user: true } });
    data.forEach((coordinate) => {
      coordinate.latitude /= 100000;
      coordinate.longitude /= 100000;
    });
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
    if (data) {
      data.latitude /= 100000;
      data.longitude /= 100000;
    }
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
      latitude: Math.round(body.lat * 100000),
      longitude: Math.round(body.lng * 100000),
      color: body.color,
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
      data: {
        latitude: Math.round(body.lat * 100000),
        longitude: Math.round(body.lng * 100000),
        color: body.color,
      },
    });
    res.json(body);
  } catch (error) {
    next(error);
  }
});

export default router;
