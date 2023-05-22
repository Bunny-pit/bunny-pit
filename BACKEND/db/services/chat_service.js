import { ChatModel } from "../models/chat_model.js";

class ChatService {
  async searchUser(nickname) {
    try {
      const users = await ChatModel.findUser(nickname);
      return { status: 200, data: users };
    } catch (error) {
      console.error("사용자 검색 중 오류 발생:", error);
      return { status: 500, error: "서버 오류" };
    }
  }

  async createChatRoom(loggedInUser, searchedUser) {
    try {
      const newChat = await ChatModel.createChatRoom(
        loggedInUser,
        searchedUser,
      );
      return { status: 201, data: newChat };
    } catch (error) {
      console.error("채팅방 개설 중 오류 발생:", error);
      return { status: 500, error: "서버 오류" };
    }
  }

  async getAllChatRoomsByUser(userId) {
    try {
      const chatRooms = await ChatModel.getAllChatRoomsByUser(userId);
      return { status: 200, data: chatRooms };
    } catch (error) {
      console.error("채팅방 조회 중 오류 발생:", error);
      return { status: 500, error: "서버 오류" };
    }
  }

  async startChat(chatId, sender, message) {
    try {
      const chatRoom = await ChatModel.startChat(chatId, sender, message);
      return { status: 200, data: chatRoom };
    } catch (error) {
      console.error("채팅 시작 중 오류 발생:", error);
      return { status: 500, error: "서버 오류" };
    }
  }

  async deleteChat(chatId) {
    try {
      const result = await ChatModel.deleteChat(chatId);
      return { status: 200, data: result };
    } catch (error) {
      console.error("채팅 삭제 중 오류 발생:", error);
      return { status: 500, error: "서버 오류" };
    }
  }

  async deleteChatRoom(chatId) {
    try {
      const result = await ChatModel.deleteChatRoom(chatId);
      return { status: 200, data: result };
    } catch (error) {
      console.error("채팅방 삭제 중 오류 발생:", error);
      return { status: 500, error: "서버 오류" };
    }
  }
}

const chatService = new ChatService();

export { chatService };
