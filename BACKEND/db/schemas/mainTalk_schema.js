import mongoose from "mongoose";

const postSchema = new Schema({
  // 작성자 닉네임
  userNickName: {
    type: String,
    required: true,
  },
  // 작성자 프로필 사진 url 경로
  profilePicture: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // 게시글 내용
  content: {
    type: String,
    required: true,
  },
  // 생성 날짜
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
