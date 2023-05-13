import { Schema } from "mongoose";

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
