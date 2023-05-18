import { mainTalkService } from "../services/mainTalk_service.js";
import { loginRequired } from "../middlewares/login_required.js";
import { Router } from "express";
const bunnyTalkRouter = new Router();

// 새로운 게시물 생성
bunnyTalkRouter.post("/new-talk", loginRequired, mainTalkService.createPost);

// 모든 게시물 불러오기
bunnyTalkRouter.get("/get-talk", loginRequired, mainTalkService.getPosts);

// 본인 게시물 삭제
bunnyTalkRouter.delete(
  "/delete/:id",
  loginRequired,
  mainTalkService.deletePost
);

export { bunnyTalkRouter };
