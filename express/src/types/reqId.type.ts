import { type Request } from "express";

export interface ReqId extends Request {
  id?: number;
}
