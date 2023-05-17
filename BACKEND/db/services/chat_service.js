import { chatModel } from "../models/chat_model.js";
import { userModel } from "../models/user_model.js";

class ChatService {
  // 채팅 생성 로직
  createChat = async (req, res, next) => {
    try {
      const { chatRoomId, senderId, receiverId, message } = req.body;

      const chatData = {
        chatRoomId,
        senderId,
        receiverId,
        message,
      };

      const chat = await chatModel.createChat(chatData);

      res.status(201).json({ message: "채팅이 생성되었습니다.", chat });
    } catch (error) {
      next(error);
    }
  };

  // 모든 채팅 조회 로직
  getAllChats = async (req, res, next) => {
    try {
      const chats = await chatModel.getAllChats();
      res.status(200).json(chats);
    } catch (error) {
      next(error);
    }
  };

  // 특정 채팅 조회 로직
  getChatById = async (req, res, next) => {
    try {
      const chatId = req.params.chatId;
      const chat = await chatModel.getChatById(chatId);
      res.status(200).json(chat);
    } catch (error) {
      next(error);
    }
  };

  // 채팅 갱신 로직
  updateChat = async (req, res, next) => {
    try {
      const chatId = req.params.chatId;
      const updateData = req.body;

      const updatedChat = await chatModel.updateChat(chatId, updateData);

      res
        .status(200)
        .json({ message: "채팅이 갱신되었습니다.", chat: updatedChat });
    } catch (error) {
      next(error);
    }
  };

  // 채팅 삭제 로직
  deleteChat = async (req, res, next) => {
    try {
      const chatId = req.params.chatId;
      await chatModel.deleteChat(chatId);

      res.status(200).json({ message: "채팅이 삭제되었습니다." });
    } catch (error) {
      next(error);
    }
  };

  // 사용자 정보 가져오기
  getUserById = async userId => {
    try {
      const user = await userModel.findById(userId);
      return user;
    } catch (error) {
      throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
    }
  };

  // 상대방 정보 가져오기
  getReceiverById = async receiverId => {
    try {
      const receiver = await userModel.findById(receiverId);
      return receiver;
    } catch (error) {
      throw new Error("상대방 정보를 가져오는 데 실패했습니다.");
    }
  };

  // 상대방 채팅방 생성 로직
  createChatRoomWithReceiver = async (req, res, next) => {
    try {
      const { senderId, receiverId, message } = req.body;

      const sender = await this.getUserById(senderId);
      const receiver = await this.getReceiverById(receiverId);

      // 상대방과의 대화를 위한 채팅방 생성 로직
      const chatRoom = await chatModel.createChatRoom();

      // sender와 receiver를 chatRoom에 추가
      await chatModel.addUserToChatRoom(chatRoom._id, sender);
      await chatModel.addUserToChatRoom(chatRoom._id, receiver);

      // 채팅 생성 로직
      const chatData = {
        chatRoomId: chatRoom._id,
        senderId,
        receiverId,
        message,
      };
      const chat = await chatModel.createChat(chatData);

      res
        .status(201)
        .json({ message: "채팅방이 생성되었습니다.", chatRoom, chat });
    } catch (error) {
      next(error);
    }
  };
}

const chatService = new ChatService();

export { chatService };
