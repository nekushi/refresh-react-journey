import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.ts";

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
