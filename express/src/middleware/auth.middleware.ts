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
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new AppError(401, "Invalid token.");
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, env.jwtSecret) as AuthPayload; // error === throw error with global error handler

  req.user = decoded;

  next();
};
