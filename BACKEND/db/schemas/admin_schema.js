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

// 게시물 스키마
const postAdminSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId, //이 부분 모르겠음
    ref: "Member",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

export { memberAdminSchema, postAdminSchema };
