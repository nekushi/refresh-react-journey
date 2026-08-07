import type { NextFunction, Request, Response } from "express";
import type { ReqId } from "../types/reqId.type.ts";
import { statusMessages } from "../constants/statusMessages.ts";
import mongoose from "mongoose";

export const validateId = (req: ReqId, res: Response, next: NextFunction) => {
  const idParam = Number(req.params.id);

  if (Number.isNaN(idParam)) {
    return res
      .status(400)
      .json({ type: "error", message: statusMessages[400] });
  }

  req.id = idParam;

  return next();
};

export const validateObjectId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id as string)) {
    return res
      .status(400)
      .json({ type: "error", message: "You entered an invalid ObjectId." });
  }

  return next();
};

export const validateUsername = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const username = req.body.username;

  if (typeof username !== "string" || username.trim() === "") {
    return res
      .status(400)
      .json({ type: "error", message: statusMessages[400] });
  }

  return next();
};

export const validateEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const email = req.body.email;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ type: "error", message: statusMessages[400] });
  }

  return next();
};
