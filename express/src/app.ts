import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3000;

const routes = {
  home: {
    path: "/",
    message: {
      message: "Home",
    },
  },
  about: {
    path: "/about",
    message: {
      message: "About",
    },
  },
  contact: {
    path: "/contact",
    message: {
      message: "Contact",
    },
  },
};

const users = [
  {
    id: 1,
    name: "Ivan",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Doe",
  },
];

app.use(express.json());

app.get(routes.home.path, (req, res) => {
  const query = req.query;
  console.log(query);

  res.json(routes.home.message);
});

app.get(routes.about.path, (req: Request, res: Response) => {
  res.json(routes.about.message);
});

app.get(routes.contact.path, (req: Request, res: Response) => {
  res.json(routes.contact.message);
  // res.json({
  //   message: "hello",
  // });
});

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);

  return next();
});

app.get("/users", (req, res, next) => {
  const queries = req.query;

  let result = users;

  if (queries.id) {
    result = result.filter((user) => String(user.id) === queries.id);
  }

  if (queries.name) {
    result = result.filter((user) => user.name === queries.name);
  }

  return result.length === 0
    ? res.status(404).json({ message: "No user found." })
    : res.status(200).json(result);
});

app.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);

  return res.status(201).json({
    id: body.id,
    name: body.name,
    message: statusMessages[201],
  });
});

app.put("/users/:id", (req, res) => {
  const idParams = req.params.id;

  res.json({
    message: `User id ${idParams} putting data.`,
  });
});

app.patch("/users/:id", (req, res) => {
  const idParams = req.params.id;

  res.json({
    message: `User id ${idParams} patching data.`,
  });
});

app.delete("/users/:id", (req, res) => {
  const idParams = req.params.id;

  res.json({
    message: `User id ${idParams} deleted.`,
  });
});

app.get("/success", (req, res) => {
  res.status(200).json({
    message: statusMessages[200],
  });
});

app.get("/missing", (req, res) => {
  res.status(404).json({
    message: statusMessages[404],
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

const statusMessages: Record<number, string> = {
  "200": "OK",
  "201": "Created",
  "204": "No Content",
  "400": "Bad Request",
  "401": "Unauthorized",
  "403": "Forbidden",
  "404": "Not Found",
  "500": "Internal Server Error",
};
