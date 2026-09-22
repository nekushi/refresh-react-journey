import type { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError.ts";

export const requireRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError(403, "Not authorize to access this route.");
    }

    next();
  };
};
