import { Schema } from "mongoose";

const ChatSchema = new Schema({
  participant1: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  participant2: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messages: [
    {
      sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
        required: true,
      },
    },
  ],
});

export { ChatSchema };
