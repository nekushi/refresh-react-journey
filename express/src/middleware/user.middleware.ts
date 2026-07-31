import type { NextFunction, Request, Response } from "express";
import type { ReqId } from "../types/reqId.type.ts";
import { statusMessages } from "../constants/statusMessages.ts";

export const validateId = (req: ReqId, res: Response, next: NextFunction) => {
  const idParam = Number(req.params.id);

  if (Number.isNaN(idParam)) {
    return res.status(400).json({ message: statusMessages[400] });
  }

  req.id = idParam;

  return next();
};

export const validateName = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const username = req.body.username;

  if (typeof username !== "string" || username.trim() === "") {
    return res.status(400).json({ message: statusMessages[400] });
  }

  return next();
};
