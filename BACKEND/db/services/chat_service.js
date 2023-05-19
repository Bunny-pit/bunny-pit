import { ChatModel } from "../models/chat_model.js";

class ChatService {
  constructor() {
    // ChatModel 인스턴스 생성
    this.chatModel = new ChatModel();
  }

  async searchUsers(keyword) {
    try {
      // ChatModel의 searchUsers 메서드 호출
      const users = await this.chatModel.searchUsers(keyword);
      return users;
    } catch (error) {
      // 오류 처리
      console.error("사용자 검색 중 오류 발생:", error);
      throw error;
    }
  }
  ChatSchema;
  async createChatRoom(participants) {
    try {
      // ChatModel의 createChatRoom 메서드 호출
      const newChat = await this.chatModel.createChatRoom(participants);
      return newChat;
    } catch (error) {
      // 오류 처리
      console.error("채팅방 생성 중 오류 발생:", error);
      throw error;
    }
  }

  async getAllChatRoomsByUser(userId) {
    try {
      // ChatModel의 getAllChatRoomsByUser 메서드 호출
      const chatRooms = await this.chatModel.getAllChatRoomsByUser(userId);
      return chatRooms;
    } catch (error) {
      // 오류 처리
      console.error("사용자의 채팅방 조회 중 오류 발생:", error);
      throw error;
    }
  }

  async startChat(chatId, sender, message) {
    try {
      // ChatModel의 startChat 메서드 호출
      const chatRoom = await this.chatModel.startChat(chatId, sender, message);
      return chatRoom;
    } catch (error) {
      // 오류 처리
      console.error("채팅 시작 중 오류 발생:", error);
      throw error;
    }
  }

  async deleteChat(chatId) {
    try {
      // ChatModel의 deleteChat 메서드 호출
      const result = await this.chatModel.deleteChat(chatId);
      return result;
    } catch (error) {
      // 오류 처리
      console.error("채팅 삭제 중 오류 발생:", error);
      throw error;
    }
  }

  async deleteChatRoom(chatId) {
    try {
      // ChatModel의 deleteChatRoom 메서드 호출
      const result = await this.chatModel.deleteChatRoom(chatId);
      return result;
    } catch (error) {
      // 오류 처리
      console.error("채팅방 삭제 중 오류 발생:", error);
      throw error;
    }
  }
}

const chatService = new ChatService();

export { chatService };
