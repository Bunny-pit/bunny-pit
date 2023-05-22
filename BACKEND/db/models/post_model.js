import mongoose from "mongoose";
import { PostSchema } from "../schemas/post_schema";

const Post = mongoose.model("posts", PostSchema);

class PostModel {
  // 작성된 게시글 정보를 사용하여 새로운 게시글 생성
  async create(postInfo) {
    const createNewPost = await Post.create(postInfo);
    return createNewPost;
  }

  // 전체 게시글 조회
  async findAll() {
    // populate를 사용하여 참조된 User, Comment에서 사용자 정보와 댓글 정보를 가져옴
    const posts = await Post.find({}).populate("userId").populate("comments");
    return posts;
  }

  // 게시글 id로 게시글 찾기
  async findById(postId) {
    const post = await Post.findById(postId)
      .populate("userId")
      .populate("comments");
    return post;
  }

  // 게시글 id를 사용하여 게시글 업데이트
  async update(postId, updateData) {
    const option = { new: true };

    const updatePost = await Post.findByIdAndUpdate(postId, updateData, option);
    return updatePost;
  }

  // 게시글 id를 사용하여 게시글 삭제
  async deleteById(postId) {
    const result = await Post.findByIdAndDelete(postId);
    return result;
  }

  // 좋아요 기능 추가 및 삭제 (toggle 방식)
  async toggleLike(postId, userId) {
    const post = await this.findById(postId);
    // 게시글의 좋아요 중 해당 좋아요를 누른 사용자id의 인덱스를 찾음
    const likeIndex = post.likes.indexOf(userId);
    // 사용자id로 검색된 인덱스가 없으면, 좋아요를 누르지 않았다는 뜻이기에 좋아요를 표시하고 배열에 해당 사용자id를 추가함
    if (likeIndex === -1) {
      post.likes.push(userId);
    } else {
      // 사용자id로 검색된 인덱스가 있으면, 이미 좋아요룰 누른 상태이기에 좋아요 배열에서 해당 사용자id를 삭제함으로서 좋아요를 취소함
      post.likes.splice(likeIndex, 1);
    }
    // 업데이트된 좋아요 상태를 db에 저장하고 반환함
    await post.save();
    return post;
  }
}

export default PostModel;
