import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import { app } from "./app.ts";

const port = 3000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log(`Connection established.`);

    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  } catch (err) {
    console.error(`Failed to connect to MongoDB.`);
    console.error(` ${err}`);

    process.exit(1);
  }
}

startServer();
