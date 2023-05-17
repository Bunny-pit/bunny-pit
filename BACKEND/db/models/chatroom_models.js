import mongoose, { model } from "mongoose";
import { ChatroomSchema } from "../schemas/chatroom_schema";

const Chatroom = mongoose.model("Chatrooms", ChatroomSchema);

export class ChatroomModel {
  //userId 찾기
}
