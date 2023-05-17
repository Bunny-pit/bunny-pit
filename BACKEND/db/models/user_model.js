import { model } from "mongoose";
import { UserSchema } from "../schemas/user_schema.js";
const User = model("User", UserSchema);

export class UserModel {
  //회원가입시 이메일 중복 체크
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  //userId 찾기
  async findById(userId) {
    const user = await User.findOne({ _id: userId });
    return user;
  }

  //회원가입
  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);
    return createdNewUser;
  }

  //관리자의 유저 전체 조회
  async findAll() {
    const users = await User.find({});
    return users;
  }

  //userId로 유저 정보 수정하는 기능
  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { new: true }; //회원정보 업데이트 이후의 문서를 반환

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }

  //팔로워 토글 기능
  async toggleFollower(userId, followerId) {
    const user = await User.findById(userId);
    const followerIndex = user.followers.indexOf(followerId);

    if (followerIndex === -1) {
      user.followers.push(followerId);
    } else {
      user.followers.splice(followerIndex, 1);
    }
    // 업데이트된 좋아요 상태를 db에 저장하고 반환함
    await user.save();
    return user;
  }
}

const userModel = new UserModel();

export { userModel };
