import { Schema } from "mongoose";

const chatRoomSchema = new Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      default: [],
    },
  ],
});

// 채팅방 스키마 정의

export { chatRoomSchema };
