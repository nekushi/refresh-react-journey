import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
});

const User = model("User", userSchema);

export default User;
