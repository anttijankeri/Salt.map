import express from "express";
import client from "../prisma";
import { validatePin, validatePinPartial } from "../validate";

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

    const validate = validatePin(body);
    if (!validate.success) {
      return res.status(400).send("Faulty data");
    }

    const user = await client.user.findUnique({
      where: { hash: body.userHash },
    });

    if (!user) {
      return res.status(400).send("User not found");
    }

    const newPin = {
      latitude: body.lat,
      longitude: body.lng,
      userId: user.id,
    };

    await client.coordinates.create({ data: newPin });
    res.json(newPin);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const validate = validatePinPartial(body);
    if (!validate.success) {
      return res.status(400).send("Faulty data");
    }

    const user = await client.user.findUnique({
      where: { hash: id },
    });

    if (!user) {
      return res.status(400).send("User not found");
    }

    delete body.userHash;

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
