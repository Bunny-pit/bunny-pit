import { Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userNickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "basic-user", //admin, disabled role존재
  },
});

export { UserSchema };
