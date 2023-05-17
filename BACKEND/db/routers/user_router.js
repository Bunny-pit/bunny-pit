import { adminOnly } from "../middlewares/admin_only.js";
import { loginRequired } from "../middlewares/login_required.js";
import { Router } from "express";
import { userImageUpload } from "../middlewares/multer.js";
import {
  signUp,
  logIn,
  userInfo,
  adminUserInfo,
  updateUserInfo,
  deleteUser,
  deleteUserByAdmin,
  toggleFollowUsers,
  createUserProfile,
  updateProfileInfo,
  getUserProfile,
} from "../services/user_service.js";
const userRouter = Router();

//회원가입
userRouter.post("/users/join", signUp);

//로그인
userRouter.post("/users/login", logIn);

//유저정보 불러오기
userRouter.get("/users/:uid", loginRequired, userInfo);

//유저정보 수정
userRouter.patch("/users/:uid", loginRequired, updateUserInfo);

//회원 탈퇴 (유저 role -> disabled로 변경) && 관리자계정은 스스로 탈퇴 불가능
userRouter.patch("/users/delete/:uid", loginRequired, deleteUser);

//유저 페이지 팔로우 토글
userRouter.post("/users/follow/:uid", loginRequired, toggleFollowUsers);

//관리자 회원정보 전체조회
userRouter.get("/admin/users", adminOnly, adminUserInfo);

//관리자 회원삭제
userRouter.patch("/admin/delete/:uid", adminOnly, deleteUserByAdmin);

//마이페이지 조회
userRouter.get(
  "/users/mypage/:uid",
  loginRequired,
  userImageUpload,
  getUserProfile,
);
//마이페이지 등록
userRouter.post(
  "/users/mypage/:uid",
  loginRequired,
  userImageUpload,
  createUserProfile,
);
//마이페이지 수정
userRouter.patch(
  "/users/mypage/:uid",
  loginRequired,
  userImageUpload,
  updateProfileInfo,
);

export { userRouter };
