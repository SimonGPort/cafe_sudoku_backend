import { Schema, model, connect } from "mongoose";
interface User {
  name: string;
  password: string;
  score: Array<String>;
}

const userSchema = new Schema<User>({
  name: String,
  password: String,
  score: [String],
});

export const User = model<User>("User", userSchema);
