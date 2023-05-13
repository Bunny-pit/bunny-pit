import { model } from "mongoose";
import { memberAdminSchema } from "../schemas/memberAdmin_Schema.js";
const memberAdmin = model("memberAdmin", memberAdminSchema);

class MemberModel {
  // 모든 회원 조회
  async findAllMembers() {
    const members = await memberAdmin.find({});
    return members;
  }

  // 회원 삭제
  async deleteMember(memberId) {
    const deletedMember = await memberAdmin.findByIdAndDelete(memberId);
    return deletedMember;
  }
  // 모든 회원 이메일 조회
  async getMemberByEmail(email) {
    const membersEmail = await memberAdmin.findOne({ email });
    return membersEmail;
  }
}

const memberModel = new MemberModel();

export { memberModel };
