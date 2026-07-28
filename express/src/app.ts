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
});

app.get("/users", (req, res, next) => {
  const queries = req.query;

  let result = users;

  if (queries.id) {
    result = users.filter((user) => String(user.id) === queries.id);
  }

  if (queries.name) {
    result = result.filter((user) => user.name === queries.name);
  }

  return res.json(result);
});

app.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json({
    id: body.id,
    name: body.name,
    message: "User created.",
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

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
