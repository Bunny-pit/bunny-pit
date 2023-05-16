import mongoose from "mongoose";
import { MainTalkSchema } from "../schemas/mainTalk_schema.js";

const MainTalk = mongoose.model("mainTalks", MainTalkSchema);

class MainTalkModel {
  // 작성된 게시글 정보를 사용하여 새로운 게시글 생성
  async create(postInfo) {
    const createNewPost = await MainTalk.create(postInfo);
    return createNewPost;
  }

  // 전체 게시글 조회
  async findAll() {
    // populate를 사용하여 참조된 User에서 사용자 정보 가져옴
    const posts = await MainTalk.find({}).populate("author");
    return posts;
  }

  // 게시글 id를 사용하여 게시글 삭제
  async deleteById(postId) {
    const result = await MainTalk.findByIdAndDelete(postId);
    return result;
  }
}

const mainTalkModel = new MainTalkModel();

export { mainTalkModel };
