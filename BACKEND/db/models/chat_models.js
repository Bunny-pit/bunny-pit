import mongoose from "mongoose";
import { chatSchema } from "./chatSchema";

const Chat = mongoose.model("Chat", chatSchema);

class ChatService {
  // Chat 생성
  async createChat(chatData) {
    try {
      const chat = new Chat(chatData);
      const savedChat = await chat.save();
      return savedChat;
    } catch (error) {
      console.error("Chat 생성 에러:", error);
      throw error;
    }
  }

  // 모든 채팅 조회
  async getAllChats() {
    try {
      const chats = await Chat.find();
      return chats;
    } catch (error) {
      console.error("채팅 조회 에러:", error);
      throw error;
    }
  }

  // 특정 채팅 조회
  async getChatById(chatId) {
    try {
      const chat = await Chat.findById(chatId);
      return chat;
    } catch (error) {
      console.error("채팅 조회 에러:", error);
      throw error;
    }
  }

  // 채팅 갱신
  async updateChat(chatId, updateData) {
    try {
      const updatedChat = await Chat.findByIdAndUpdate(chatId, updateData, {
        new: true,
      });
      return updatedChat;
    } catch (error) {
      console.error("채팅 갱신 에러:", error);
      throw error;
    }
  }

  // 채팅 삭제
  async deleteChat(chatId) {
    try {
      await Chat.findByIdAndDelete(chatId);
      console.log("채팅이 삭제되었습니다.");
    } catch (error) {
      console.error("채팅 삭제 에러:", error);
      throw error;
    }
  }
}

const chatService = new ChatService();

export { chatService };
