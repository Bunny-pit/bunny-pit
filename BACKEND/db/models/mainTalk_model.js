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
  async getAllpost() {
    // 모든 게시물 조회 메서드
    return MainTalk.find().sort({ creationDate: -1 });
  }

  // 게시글 id를 사용하여 게시글 삭제
  async deleteById(postId) {
    const result = await MainTalk.findByIdAndDelete(postId);
    return result;
  }
}

const mainTalkModel = new MainTalkModel();

export { mainTalkModel };
