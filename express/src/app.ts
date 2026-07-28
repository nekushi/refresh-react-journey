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

app.get(
  "/users",
  (req: Request, res: Response, next) => {
    const queryKeyCount = Object.keys(req.query).length;
    console.log(Object.keys(req.query).length);

    if (queryKeyCount === 1) {
      return next();
    }

    const idQuery = req.query.id;
    const nameQuery = req.query.name;

    const selectedUser = users.filter(
      (user) => user.id === Number(idQuery) && user.name === nameQuery,
    );

    if (selectedUser.length === 0) {
      res.json({
        message: "No user found.",
      });
    } else {
      res.json(selectedUser);
    }
  },
  (req: Request, res: Response, next) => {
    const idQuery = req.query.id;

    const selectedUser = users.filter((user) => user.id === Number(idQuery));

    if (selectedUser.length === 0 || !selectedUser) return next();

    res.json(selectedUser);
  },
  (req: Request, res: Response, next) => {
    const nameQuery = req.query.name;

    const selectedUser = users.filter((user) => user.name === nameQuery);

    if (selectedUser.length === 0 || !selectedUser) {
      res.send("No user found.");
    }

    res.json(selectedUser);
  },
);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
