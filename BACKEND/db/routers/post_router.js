import { loginRequired } from "../middlewares/login_required.js";
import { postService } from "../services/post_service.js";
import { Router } from "express";
const postRouter = new Router();

// 게시물 작성
postRouter.post("/new-post", loginRequired, postService.createPost);

// 게시물 수정
postRouter.patch("/update/:id", loginRequired, postService.updatePost);

// 게시물 삭제
postRouter.delete("/delete/:id", loginRequired, postService.deletePost);

// 게시물 조회
postRouter.get("/get-posts", loginRequired, postService.getPosts);

// 게시물 상세
postRouter.get("/post-detail/:id", loginRequired, postService.getPostById);

// 게시물 좋아요
postRouter.post("/like/:id", loginRequired, postService.postLike);

export { postRouter };
