import express from "express";
import cors from "cors";

import indexRouter from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

export default app;
