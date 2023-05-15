import { postService } from "../services/post_service.js";
import { Router } from "express";
const postRouter = new Router();

// 게시물 작성
postRouter.post("/new-post", postService.createPost);

// 게시물 수정
postRouter.patch("/update:id", postService.updatePost);

// 게시물 삭제
postRouter.delete("/delete:id", postService.deletePost);

// 게시물 조회
postRouter.get("/get-posts", postService.getPosts);

// 게시물 상세
postRouter.get("/post-detail:id", postService.getPostById);

export { postRouter };
