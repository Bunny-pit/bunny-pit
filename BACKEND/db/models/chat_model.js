import mongoose from "mongoose";
import { ChatSchema } from "../schemas/chat_schema.js";
import { UserSchema } from "../schemas/user_schema.js";

const Chat = mongoose.model("Chat", ChatSchema);
const User = mongoose.model("User", UserSchema);

class ChatModel {
  // 사용자 검색
  async searchUser(nickname) {
    // 주어진 닉네임으로 대소문자를 구분하여 사용자 검색
    const users = await User.find({
      userNickName: { $regex: new RegExp(`^${nickname}$`) },
    });
    console.log(users);
    return users;
  }

  // 새로운 채팅방 개설
  async createChatRoom(loggedInUser, searchedUser) {
    // 주어진 참여자들로 새로운 채팅방 생성.
    const newChat = await Chat.create({
      participant1: loggedInUser,
      participant2: searchedUser,
      messages: [], // 초기 메시지 배열
    });
    return newChat;
  }

  // 유저의 채팅방 전체 조회
  async getAllChatRoomsByUser(userId) {
    // 주어진 사용자의 모든 채팅방을 조회.
    const chatRooms = await Chat.find({
      $or: [{ participant1: userId }, { participant2: userId }],
    });
    return chatRooms;
  }

  // 검색한 가입자와 채팅방에서 채팅 시작
  async startChat(chatId, sender, message) {
    // 주어진 채팅방에서 새로운 메시지를 생성하여 채팅 시작.
    const chatRoom = await Chat.findById(chatId);
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
    const result = await Chat.findByIdAndDelete(chatId);
    return result;
  }

  // 채팅방 삭제
  async deleteChatRoom(chatId) {
    // 주어진 채팅방 ID로 채팅방 삭제.
    const result = await Chat.findByIdAndDelete(chatId);
    return result;
  }
}

export { ChatModel };
