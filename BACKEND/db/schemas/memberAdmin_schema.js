import { Schema } from "mongoose";

// 회원정보 불러오기 스키마
const memberAdminSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userNickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "basic-user", //admin, disabled role존재
  },
});

export { memberAdminSchema };
