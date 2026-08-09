import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";

import cors from "cors";

import { routes } from "./constants/defaultRoutes.ts";
import { statusMessages } from "./constants/statusMessages.ts";

import helloRoutes from "./routes/hello.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import authRoutes from "./routes/auth.routes.ts";

import { errorHandler } from "./middleware/errorHandler.ts";

export const app: Express = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get(routes.home.path, (req, res) => {
  const query = req.query;
  console.log(query);

  res.json(routes.home.message);
});

app.use("/hello", helloRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

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

app.use(errorHandler);
