import { Router } from "express";
import { loginRequired } from "../middlewares/login_required.js";
import { chatService } from "../services/chat_service.js";

const chatRouter = Router();

// 사용자 검색
chatRouter.get("/search-users", loginRequired, chatService.searchUser);

// 채팅방 생성
chatRouter.post("/create-chat-room", loginRequired, chatService.createChatRoom);

// 사용자의 채팅방 조회
chatRouter.get(
  "/chat-rooms/:userId",
  loginRequired,
  chatService.getAllChatRoomsByUser,
);

// 채팅 시작
chatRouter.post("/start-chat/:chatId", loginRequired, chatService.startChat);

// 채팅 삭제
chatRouter.delete(
  "/delete-chat/:chatId",
  loginRequired,
  chatService.deleteChat,
);

// 채팅방 삭제
chatRouter.delete(
  "/delete-chat-room/:chatId",
  loginRequired,
  chatService.deleteChatRoom,
);

export { chatRouter };
