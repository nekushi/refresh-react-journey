import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError.ts";
import jwt from "jsonwebtoken";
import { env } from "../config/env.ts";
import type { AuthPayload } from "../types/auth.type.ts";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;

  if (!token) {
    throw new AppError(401, "Invalid token.");
  }

  const decoded = jwt.verify(token, env.jwtSecret) as AuthPayload; // error === throw error with global error handler

  req.user = decoded;

  next();
};
