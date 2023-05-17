import { mainTalkService } from "../services/mainTalk_service.js";
import { loginRequired } from "../middlewares/login_required.js";
import { Router } from "express";
const bunnyTalkRouter = new Router();

// 새로운 게시물 생성
bunnyTalkRouter.post(
  "/bunnyTalk/new-talk",
  loginRequired,
  mainTalkService.createPst
);

// 모든 게시물 불러오기
bunnyTalkRouter.get(
  "/bunnyTalk/get-talk",
  loginRequired,
  mainTalkService.getPosts
);

export { bunnyTalkRouter };
