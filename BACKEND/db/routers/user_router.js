import { adminOnly } from "../middlewares/admin_only.js";
import { loginRequired } from "../middlewares/login_required.js";
import { Router } from "express";
import { signUp, logIn, userInfo } from "../services/user_service.js";
const userRouter = Router();

//회원가입
userRouter.post("/users/join", signUp);

//로그인
userRouter.post("/users/login", logIn);

//유저정보 불러오기
userRouter.get("/users/:uid", loginRequired, userInfo);

//유저정보 수정
userRouter.patch("/users/:uid", loginRequired);

//회원 탈퇴 (유저 role -> disabled로 변경)
userRouter.patch("/users/delete/:uid", loginRequired);

//유저의 페이지 팔로우 토글
userRouter.post("/users/follow/:uid", loginRequired);

//관리자 회원정보 전체조회
userRouter.get("/admin/users", adminOnly);

//관리자 회원삭제
userRouter.patch("/admin/delete/:uid", adminOnly);
