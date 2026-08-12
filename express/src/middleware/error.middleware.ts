import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.ts";
// import type { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";

export const errorHandler = (
  err: AppError | jwt.JsonWebTokenError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ type: "error", message: err.message });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ type: "error", message: "Invalid token." });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ type: "error", message: "Token expired." });
  }

  console.error(err);

  return res
    .status(500)
    .json({ type: "error", message: "Internal Server Error" });
};
