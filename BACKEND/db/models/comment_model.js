import mongoose from "mongoose";
import { CommentSchema } from "../schemas/comment_schema.js";
import { postModel } from "./post_model.js";

const Comment = mongoose.model("comments", CommentSchema);

class CommentModel {
  // 댓글 생성 및 게시글에 댓글 추가
  async addComment(postId, commentInfo) {
    // 댓글 생성
    const newComment = await Comment.create(commentInfo);

    // 게시글id를 사용한 게시글에 댓글 추가하기
    const post = await postModel.findById(postId);
    // 찾은 게시글의 댓글 배열에 새로운 게시글 추가
    post.comments.push(newComment._id);

    await post.save();

    return {
      post,
      newComment,
    };
  }

  // 댓글 조회
  async getAllCommentsByPostId(postId) {
    const comments = await Comment.find({ postId: postId }).populate("userId");
    return comments;
  }

  // 댓글 조회 (상세)
  async findById(commentId) {
    // populate로 받아온 사용자 정보와 댓글 id 조회하기
    const comment = await Comment.findById(commentId).populate("userId");
    return comment;
  }

  // 댓글 업데이트 (수정)
  async update(commentId, updateData) {
    // new: true 설정으로 업데이트된 데이터 반환
    const option = { new: true };
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      updateData,
      option
    );
    return updatedComment;
  }

  // 댓글 삭제
  async deleteById(commentId) {
    const result = await Comment.findByIdAndDelete(commentId);
    return result;
  }

  // 댓글에 좋아요 기능 추가 및 삭제 (toggle 방식)
  // 동작 원리는 게시글 좋아요와 같음
  async toggleLike(commentId, userId) {
    const comment = await this.findById(commentId);
    const likeIndex = comment.likes.indexOf(userId);

    if (likeIndex === -1) {
      comment.likes.push(userId);
    } else {
      comment.likes.splice(likeIndex, 1);
    }

    await comment.save();
    return comment;
  }
}

const commentModel = new CommentModel();

export { commentModel };
