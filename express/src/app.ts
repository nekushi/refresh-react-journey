import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

app.get(
  "/name/:name/*placeholder",
  (req: Request<{ name: string; placeholder: string[] }>, res: Response) => {
    res.send(req.params.placeholder.join("/"));
  },
);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
