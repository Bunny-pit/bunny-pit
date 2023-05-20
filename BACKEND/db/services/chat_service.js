import { ChatModel } from "../models/chat_model.js";

class ChatService {
  // 사용자 검색
  async searchUser(nickname) {
    try {
      const users = await ChatModel.findUser(nickname);
      return users;
    } catch (error) {
      console.error("사용자 검색 중 오류 발생:", error);
      throw error;
    }
  }

  // 새로운 채팅방 개설
  async createChatRoom(loggedInUser, searchedUser) {
    try {
      const newChat = await ChatModel.createChatRoom(
        loggedInUser,
        searchedUser,
      );
      return newChat;
    } catch (error) {
      console.error("채팅방 개설 중 오류 발생:", error);
      throw error;
    }
  }

  // 유저의 채팅방 전체 조회
  async getAllChatRoomsByUser(userId) {
    try {
      const chatRooms = await ChatModel.getAllChatRoomsByUser(userId);
      return chatRooms;
    } catch (error) {
      console.error("채팅방 조회 중 오류 발생:", error);
      throw error;
    }
  }

  // 검색한 가입자와 채팅방에서 채팅 시작
  async startChat(chatId, sender, message) {
    try {
      const chatRoom = await ChatModel.startChat(chatId, sender, message);
      return chatRoom;
    } catch (error) {
      console.error("채팅 시작 중 오류 발생:", error);
      throw error;
    }
  }

  // 채팅 삭제
  async deleteChat(chatId) {
    try {
      const result = await ChatModel.deleteChat(chatId);
      return result;
    } catch (error) {
      console.error("채팅 삭제 중 오류 발생:", error);
      throw error;
    }
  }

  // 채팅방 삭제
  async deleteChatRoom(chatId) {
    try {
      const result = await ChatModel.deleteChatRoom(chatId);
      return result;
    } catch (error) {
      console.error("채팅방 삭제 중 오류 발생:", error);
      throw error;
    }
  }
}

const chatService = new ChatService();

export { chatService };
