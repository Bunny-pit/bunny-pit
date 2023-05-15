import { userModel } from "../db";
import { errorHandler } from "../middlewares/error_handler.js";
import "dotenv/config";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

//회원가입
const signUp = async (req, res, next) => {
  const { userName, userNickName, email, password, role } = req.body;
  if (!userName || !userNickName || !email || !password) {
    return next(new errorHandler(400, "모든 항목을 입력해주세요."));
  }
  try {
    const foundUser = await userModel.findByEmail(email);
    if (foundUser) {
      throw new Error("이 이메일은 이미 사용중인 이메일입니다.");
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await userModel.create({
      userName,
      userNickName,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "회원가입 성공" });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "회원가입 실패"));
  }
};

//로그인
const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  //해당 이메일의 사용자가 존재하는지 확인
  try {
    const user = await userModel.findByEmail(email);
    if (!user) {
      throw new Error(
        "해당 이메일을 가진 사용자는 존재하지 않습니다. 다시 확인해주세요.",
      );
    }
    if (user.role === "disabled") {
      throw new Error(
        "해당 이메일은 탈퇴처리된 사용자입니다. 관리자에게 문의하세요.",
      );
    }
    //비밀번호 일치 여부 확인
    const checkPassword = user.password;
    const isPasswordCorrect = await bcrypt.compare(password, checkPassword);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    //로그인 성공시 JWT토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);
    const userInfoWithUserToken = {};
    userInfoWithUserToken.token = token;
    userInfoWithUserToken.userId = user._id;
    userInfoWithUserToken.role = user.role;

    res.status(200).json({
      message: "로그인 성공",
      data: {
        userName: user.userName,
        userNickName: user.userNickName,
        email: user.email,
        role: user.role,
        userInfoWithUserToken,
      },
    });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "로그인 실패"));
  }
};

//유저정보 불러오기
const userInfo = async (req, res, next) => {
  try {
    const userId = req.params.uid;
    const user = await userModel.findById(userId);
    if (!user)
      return next(new errorHandler(400, "유저정보를 찾을 수 없습니다."));

    res.status(200).json({ message: "사용자 정보조회 성공", data: user });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "사용자 정보조회 실패"));
  }
};

module.exports = {
  signUp,
  logIn,
  userInfo,
};
