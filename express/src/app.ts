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

app.get("/users", (req, res, next) => {
  const queries = req.query;
  console.log(queries);

  const selectedSpecificUser = users.filter(
    (user) => user.id === Number(queries.id) || user.name === queries.name,
  );

  if (selectedSpecificUser.length === 1) {
    return res.json(selectedSpecificUser);
  }

  const selectedUser = selectedSpecificUser.find((user) => {
    const lookForValue = Object.values(queries).toString().toLowerCase();

    return (
      user.id === Number(lookForValue) ||
      user.name.toLowerCase() === lookForValue
    );
  });

  if (selectedUser) {
    return res.json(selectedUser);
  }

  res.json({
    message: "No user found.",
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
