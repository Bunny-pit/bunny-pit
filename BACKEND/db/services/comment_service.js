import { commentModel } from "../models/comment_model.js";
import { postModel } from "../models/post_model.js";

class CommentService {
  // 댓글 작성 로직
  createComment = async (req, res, next) => {
    try {
      const { content } = req.body;

      const postId = req.params.postId;

      const userId = req.currentUserId;

      if (!content) {
        throw new Error("댓글을 입력하세요.");
      }

      const { post, newComment } = await commentModel.addComment(postId, {
        content,
        userId,
      });

      res
        .status(201)
        .json({ message: "댓글이 등록되었습니다.", post, newComment });
    } catch (err) {
      next(err);
    }
  };

  // 댓글 조회 로직
  getComments = async (req, res, next) => {
    try {
      const postId = req.params.postId;

      const comments = await commentModel.getAllCommentsByPostId(postId);

      res.status(200).json(comments);
    } catch (err) {
      next(err);
    }
  };

  // 댓글 수정 로직
  updateComment = async (req, res, next) => {
    try {
      const commentId = req.params.id;
      const { content } = req.body;
      const userId = req.user.id;

      const comment = await commentModel.findById(commentId);

      if (!comment) {
        throw new Error("댓글을 찾을 수 없습니다.");
      }

      if (comment.userId !== userId) {
        throw new Error("댓글을 수정할 권한이 없습니다.");
      }

      const updatedComment = await commentModel.update(
        commentId,
        {
          content,
        },
        { new: true }
      );

      res
        .status(200)
        .json({ message: "댓글이 수정되었습니다.", comment: updatedComment });
    } catch (err) {
      next(err);
    }
  };

  // 댓글 삭제 로직
  deleteComment = async (req, res, next) => {
    try {
      const { postId, commentId } = req.params;
      const userId = req.currentUserId;

      const comment = await commentModel.findById(commentId);

      if (!comment) {
        throw new Error("댓글을 찾을 수 없습니다.");
      }

      if (comment.userId._id.toString() !== userId) {
        throw new Error("댓글을 삭제할 권한이 없습니다.");
      }

      const deletedComment = await commentModel.deleteById(commentId);

      if (!deletedComment) {
        throw new Error("댓글을 삭제할 수 없습니다.");
      }

      const post = await postModel.findById(postId);
      const index = post.comments.indexOf(commentId);

      post.comments.splice(index, 1);
      await post.save();

      res.status(200).json({ message: "댓글이 삭제되었습니다.", post });
    } catch (err) {
      next(err);
    }
  };

  // 댓글 좋아요 로직
  commentLike = async (req, res, next) => {
    try {
      const commentId = req.params.id;
      const userId = req.currentUserId;

      const comment = await commentModel.toggleLike(commentId, userId);

      res.status(200).json({ message: "좋아요가 반영되었습니다.", comment });
    } catch (err) {
      next(err);
    }
  };
}

const commentService = new CommentService();

export { commentService };
