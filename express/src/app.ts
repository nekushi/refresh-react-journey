import express, {
  type Express,
  type NextFunction,
  type Request,
  type Response,
} from "express";

const app: Express = express();
const port = 3000;

const routes = {
  home: {
    path: "/",
    message: {
      message: "Home",
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

const validateId = (req: ValidatedId, res: Response, next: NextFunction) => {
  const idParam = Number(req.params.id);

  if (Number.isNaN(idParam)) {
    return res.status(400).json({ message: statusMessages[400] });
  }

  req.convertedId = idParam;

  return next();
};

app.get("/users/:id", validateId, (req: ValidatedId, res, next) => {
  const idParam = req.params.id;

  const result = users.find((user) => user.id === req.convertedId);

  return result
    ? res.status(200).json(result)
    : res.status(404).json({ message: "No user found." });
});

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name;

  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: statusMessages[400] });
  }

  return next();
};

const generateId = (req: Request, res: Response, next: NextFunction) => {
  const randomId = Math.max(...users.map((user) => user.id)) + 1;
  req.body.id = randomId;

  return next();
};

app.post("/users", validateName, generateId, (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const idParams = req.params.id;

  res.json({
    message: `User id ${idParams} putting data.`,
  });
});

app.patch("/users/:id", validateId, validateName, (req: ValidatedId, res) => {
  const selectedUser = users.findIndex((user) => user.id === req.convertedId);

  if (selectedUser === -1) {
    return res.status(404).json({ message: statusMessages[404] });
  }

  users[selectedUser] = {
    id: req.convertedId!,
    name: req.body.name,
  };

  res.status(200).json(users[selectedUser]);
});

app.delete("/users/:id", validateId, (req: ValidatedId, res) => {
  const userIndex = users.findIndex((user) => user.id === req.convertedId);

  if (userIndex === -1) {
    return res.status(404).json({ message: statusMessages[404] });
  }

  const deletedUser = users.splice(userIndex, 1);

  return res.sendStatus(204);
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

interface ValidatedId extends Request {
  convertedId?: number;
}
