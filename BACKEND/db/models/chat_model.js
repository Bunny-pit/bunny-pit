import mongoose from "mongoose";
import { chatSchema } from "../schemas/chat_schema.js";
import { chatRoomSchema } from "../schemas/chatRoom_schema.js";

const Chat = mongoose.model("Chat", chatSchema);
const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

class ChatModel {
  // 새로운 채팅 메시지 생성
  async createChatMessage(chatMessageInfo) {
    const newChatMessage = await Chat.create(chatMessageInfo);
    return newChatMessage;
  }

  // 모든 채팅 메시지 조회
  async findAllChatMessages() {
    const chatMessages = await Chat.find({})
      .populate("chatRoom")
      .populate("sender")
      .populate("receiver");
    return chatMessages;
  }

  // 채팅 메시지 ID로 채팅 메시지 조회
  async findChatMessageById(chatMessageId) {
    const chatMessage = await Chat.findById(chatMessageId)
      .populate("chatRoom")
      .populate("sender")
      .populate("receiver");
    return chatMessage;
  }

  // 채팅 메시지 ID를 사용하여 채팅 메시지 업데이트
  async updateChatMessage(chatMessageId, updateData) {
    const updatedChatMessage = await Chat.findByIdAndUpdate(
      chatMessageId,
      updateData,
      { new: true },
    );
    return updatedChatMessage;
  }

  // 채팅 메시지 ID를 사용하여 채팅 메시지 삭제
  async deleteChatMessageById(chatMessageId) {
    const result = await Chat.findByIdAndDelete(chatMessageId);
    return result;
  }
}

class ChatRoomModel {
  // 새로운 채팅방 생성
  async createChatRoom(chatRoomInfo) {
    const newChatRoom = await ChatRoom.create(chatRoomInfo);
    return newChatRoom;
  }

  // 모든 채팅방 조회
  async findAllChatRooms() {
    const chatRooms = await ChatRoom.find({})
      .populate("user1")
      .populate("user2")
      .populate("messages");
    return chatRooms;
  }

  // 채팅방 ID로 채팅방 조회
  async findChatRoomById(chatRoomId) {
    const chatRoom = await ChatRoom.findById(chatRoomId)
      .populate("user1")
      .populate("user2")
      .populate("messages");
    return chatRoom;
  }

  // 채팅방 ID를 사용하여 채팅방 업데이트
  async updateChatRoom(chatRoomId, updateData) {
    const updatedChatRoom = await ChatRoom.findByIdAndUpdate(
      chatRoomId,
      updateData,
      { new: true },
    );
    return updatedChatRoom;
  }

  // 채팅방 ID를 사용하여 채팅방 삭제
  async deleteChatRoomById(chatRoomId) {
    const result = await ChatRoom.findByIdAndDelete(chatRoomId);
    return result;
  }
}

const chatModel = new ChatModel();
const chatRoomModel = new ChatRoomModel();

export { chatModel, chatRoomModel };
