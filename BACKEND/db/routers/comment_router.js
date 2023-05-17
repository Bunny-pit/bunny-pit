import { loginRequired } from "../middlewares/login_required.js";
import { commentService } from "../services/comment_service.js";
import { Router } from "express";
const commentRouter = new Router();

// 댓글 작성
commentRouter.post(
  "/post-comments/:postId",
  loginRequired,
  commentService.createComment
);

// 댓글 삭제
commentRouter.delete(
  "/delete-comment/:postId/:commentId",
  loginRequired,
  commentService.deleteComment
);

// 댓글 조회
commentRouter.get(
  "/get-comments/:postId",
  loginRequired,
  commentService.getComments
);

// 댓글 좋아요
commentRouter.post(
  "/comment-like/:commentId",
  loginRequired,
  commentService.commentLike
);

export { commentRouter };
