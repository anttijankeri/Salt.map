import express, { NextFunction, Response, Request } from "express";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.message === "Unauthorized") {
    return res.status(401).send(err.message);
  }

  res.status(500).send(err.message);
};

app.use(errorHandler);

export default app;
