import type { Request, Response } from "express";

export const sayHelloFromBackend = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello from Express!",
  });
};
