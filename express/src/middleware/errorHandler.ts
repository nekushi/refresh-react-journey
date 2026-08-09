import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.ts";

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ type: "error", message: err.message });
  }

  console.error(err);

  return res
    .status(500)
    .json({ type: "error", message: "Internal Server Error" });
};
