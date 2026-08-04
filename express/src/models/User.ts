import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
});

const User = model("User", userSchema);

export default User;
