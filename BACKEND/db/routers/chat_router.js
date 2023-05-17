import { loginRequired } from "../middlewares/login_required.js";
import { chatService } from "../services/chat_service.js";
import { Router } from "express";

const chatRouter = Router();

// 채팅 생성
chatRouter.post("/create-chat", loginRequired, chatService.createChat);

// 모든 채팅 조회
chatRouter.get("/get-all-chats", loginRequired, chatService.getAllChats);

// 특정 채팅 조회
chatRouter.get("/get-chat/:chatId", loginRequired, chatService.getChatById);

// 채팅 갱신
chatRouter.put("/update-chat/:chatId", loginRequired, chatService.updateChat);

// 채팅 삭제
chatRouter.delete(
  "/delete-chat/:chatId",
  loginRequired,
  chatService.deleteChat,
);

// 상대방 채팅방 생성
chatRouter.post(
  "/create-chat-room-with-receiver",
  loginRequired,
  chatService.createChatRoomWithReceiver,
);

export { chatRouter };
