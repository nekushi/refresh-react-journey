import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";

import { routes } from "./constants/defaultRoutes.ts";
import { statusMessages } from "./constants/statusMessages.ts";

import userRoutes from "./routes/user.routes.ts";

export const app: Express = express();

app.use(express.json());

app.get(routes.home.path, (req, res) => {
  const query = req.query;
  console.log(query);

  res.json(routes.home.message);
});

app.use("/users", userRoutes);

app.get("/success", (req, res) => {
  res.status(200).json({
    message: statusMessages[200],
  });
});

app.get("/missing", (req, res) => {
  res.status(404).json({
    message: statusMessages[404],
  });
});
