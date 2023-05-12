import { Schema } from "mongoose";

const PostSchema = new Schema({
  // 게시글 작성한 사용자 참조
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // 좋아요 누른 사용자 참조하는 배열
  // 좋아요 누르면 배열에 사용자 추가, 좋아요 취소시 배열에서 삭제 => arr.length로 좋아요 누른 사용자 수 계산 (댓글에서도 동일)
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  // 댓글 참조하는 배열
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export { PostSchema };
