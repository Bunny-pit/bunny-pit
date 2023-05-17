import mongoose from "mongoose";
import { chatRoomSchema } from "./chatRoomSchema";
import { chatSchema } from "./chatSchema";

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
const Chat = mongoose.model("Chat", chatSchema);

class ChatRoomService {
  // 채팅방 생성
  async createChatRoom(user1Id, user2Id) {
    try {
      const chatRoom = new ChatRoom({
        user1: user1Id,
        user2: user2Id,
      });
      const savedChatRoom = await chatRoom.save();
      return savedChatRoom;
    } catch (error) {
      console.error("채팅방 생성 에러:", error);
      throw error;
    }
  }

  // 모든 채팅방 조회
  async getAllChatRooms() {
    try {
      const chatRooms = await ChatRoom.find();
      return chatRooms;
    } catch (error) {
      console.error("채팅방 조회 에러:", error);
      throw error;
    }
  }

  // 특정 채팅방 조회
  async getChatRoomById(chatRoomId) {
    try {
      const chatRoom = await ChatRoom.findById(chatRoomId);
      return chatRoom;
    } catch (error) {
      console.error("채팅방 조회 에러:", error);
      throw error;
    }
  }

  // 채팅방 갱신
  async updateChatRoom(chatRoomId, updateData) {
    try {
      const updatedChatRoom = await ChatRoom.findByIdAndUpdate(
        chatRoomId,
        updateData,
        { new: true },
      );
      return updatedChatRoom;
    } catch (error) {
      console.error("채팅방 갱신 에러:", error);
      throw error;
    }
  }

  // 채팅방 삭제
  async deleteChatRoom(chatRoomId) {
    try {
      await ChatRoom.findByIdAndDelete(chatRoomId);
      console.log("채팅방이 삭제되었습니다.");
    } catch (error) {
      console.error("채팅방 삭제 에러:", error);
      throw error;
    }
  }
}

class ChatService {
  // 채팅 생성
  async createChat(chatData) {
    try {
      const chat = new Chat(chatData);
      const savedChat = await chat.save();
      return savedChat;
    } catch (error) {
      console.error("채팅 생성 에러:", error);
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

const chatRoomService = new ChatRoomService();
const chatService = new ChatService();

export { chatRoomService, chatService };
