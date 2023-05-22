const CommentSchema = new Schema({
  // 댓글 작성자 참조
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // 게시글 고유 id 참조
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
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
  // 좋아요 누른 사용자 참조
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export { CommentSchema };
