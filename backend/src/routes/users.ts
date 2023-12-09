import express from "express";
import client from "../prisma";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await client.user.findMany();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

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

//
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const attempt = await client.user.delete({
//       where: { hash: req.params.id },
//     });
//     res.json(attempt);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/", async (req, res, next) => {
//   try {
//     const attempt = await client.user.deleteMany({});
//     res.json(attempt);
//   } catch (error) {
//     next(error);
//   }
// });

export default router;
