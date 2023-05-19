import mongoose from "mongoose";
import { ChatSchema } from "../schemas/chat_schema.js";
import { UserSchema } from "../schemas/user_schema.js";

const Chat = mongoose.model("Chat", ChatSchema);
const User = mongoose.model("User", UserSchema);

class ChatModel {
  constructor() {
    // Mongoose 모델을 클래스의 속성으로 설정.
    this.ChatModel = Chat;
    this.UserModel = User;
  }

  // 가입자 검색
  async searchUsers(keyword) {
    // 주어진 키워드로 사용자 검색.
    const users = await this.UserModel.find({
      $or: [
        { userName: { $regex: keyword, $options: "i" } },
        { userNickName: { $regex: keyword, $options: "i" } },
        { email: { $regex: keyword, $options: "i" } },
      ],
    });
    return users;
  }

  // 새로운 채팅방 개설
  async createChatRoom(participants) {
    // 주어진 참여자들로 새로운 채팅방 생성.
    const newChat = await this.ChatModel.create({ participants });
    return newChat;
  }

  // 유저의 채팅방 전체 조회
  async getAllChatRoomsByUser(userId) {
    // 주어진 사용자의 모든 채팅방을 조회.
    const chatRooms = await this.ChatModel.find({ participants: userId });
    return chatRooms;
  }

  // 검색한 가입자와 채팅방에서 채팅 시작
  async startChat(chatId, sender, message) {
    // 주어진 채팅방에서 새로운 메시지를 생성하여 채팅 시작.
    const chatRoom = await this.ChatModel.findById(chatId);
    chatRoom.messages.push({
      sender,
      message,
      timestamp: Date.now(),
    });
    await chatRoom.save();
    return chatRoom;
  }

  // 채팅 삭제
  async deleteChat(chatId) {
    // 주어진 채팅 ID로 채팅 삭제.
    const result = await this.ChatModel.findByIdAndDelete(chatId);
    return result;
  }

  // 채팅방 삭제
  async deleteChatRoom(chatId) {
    // 주어진 채팅방 ID로 채팅방 삭제.
    const result = await this.ChatModel.findByIdAndDelete(chatId);
    return result;
  }
}

export { ChatModel };
