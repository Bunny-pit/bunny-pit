import { ChatManager } from "../models/chat_model";

class ChatService {
  constructor() {
    // ChatManager 인스턴스 생성
    this.chatManager = new ChatManager();
  }

  async searchUsers(keyword) {
    try {
      // ChatManager의 searchUsers 메서드 호출
      const users = await this.chatManager.searchUsers(keyword);
      return users;
    } catch (error) {
      // 오류 처리
      console.error("사용자 검색 중 오류 발생:", error);
      throw error;
    }
  }

  async createChatRoom(participants) {
    try {
      // ChatManager의 createChatRoom 메서드 호출
      const newChat = await this.chatManager.createChatRoom(participants);
      return newChat;
    } catch (error) {
      // 오류 처리
      console.error("채팅방 생성 중 오류 발생:", error);
      throw error;
    }
  }

  async getAllChatRoomsByUser(userId) {
    try {
      // ChatManager의 getAllChatRoomsByUser 메서드 호출
      const chatRooms = await this.chatManager.getAllChatRoomsByUser(userId);
      return chatRooms;
    } catch (error) {
      // 오류 처리
      console.error("사용자의 채팅방 조회 중 오류 발생:", error);
      throw error;
    }
  }

  async startChat(chatId, sender, message) {
    try {
      // ChatManager의 startChat 메서드 호출
      const chatRoom = await this.chatManager.startChat(
        chatId,
        sender,
        message,
      );
      return chatRoom;
    } catch (error) {
      // 오류 처리
      console.error("채팅 시작 중 오류 발생:", error);
      throw error;
    }
  }

  async deleteChat(chatId) {
    try {
      // ChatManager의 deleteChat 메서드 호출
      const result = await this.chatManager.deleteChat(chatId);
      return result;
    } catch (error) {
      // 오류 처리
      console.error("채팅 삭제 중 오류 발생:", error);
      throw error;
    }
  }

  async deleteChatRoom(chatId) {
    try {
      // ChatManager의 deleteChatRoom 메서드 호출
      const result = await this.chatManager.deleteChatRoom(chatId);
      return result;
    } catch (error) {
      // 오류 처리
      console.error("채팅방 삭제 중 오류 발생:", error);
      throw error;
    }
  }
}

export { ChatService };
