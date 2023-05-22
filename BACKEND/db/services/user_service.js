import { userModel } from "../models/user_model.js";
import errorHandler from "../middlewares/error_handler.js";
import "dotenv/config";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

//회원가입
const signUp = async (req, res, next) => {
  const {
    userName,
    userNickName,
    email,
    password,
    role,
    userImage,
    introduction,
  } = req.body;
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
      userImage,
      introduction,
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
    const token = jwt.sign(
      { userId: user._id, role: user.role, userNickName: user.userNickName },

      secretKey,

    );
    const userInfoWithUserToken = {};
    userInfoWithUserToken.token = token;
    userInfoWithUserToken.userId = user._id;
    userInfoWithUserToken.role = user.role;
    userInfoWithUserToken.userNickName = user.userNickName;

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

//유저정보 불러오기(단일 정보)
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

//관리자 회원정보 전체 조회
const adminUserInfo = async (req, res, next) => {
  try {
    const users = await userModel.findAll();

    if (!users || users.length === 0) {
      throw new Error("사용자 정보를 찾을 수 없습니다.");
    }
    res.status(200).json({ message: "전체 회원 정보조회 성공", data: users });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "회원정보 전체조회 실패"));
  }
};

// //유저정보 수정하기
const updateUserInfo = async (req, res, next) => {
  const { currentPassword, newPassword, userName } = req.body;
  const userId = req.params.uid;

  try {
    const foundUser = await userModel.findById(userId);

    if (!foundUser) {
      throw new Error("존재하지 않는 아이디입니다.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      foundUser.password,
    );

    if (!isPasswordCorrect) {
      throw new Error("현재 비밀번호가 일치하지 않습니다.");
    }

    const updateData = {};

    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }
    if (userName) {
      updateData.userName = userName;
    }

    await userModel.update({ userId, updateData });

    const updatedUser = await userModel.findById(userId);

    res.status(200).json({
      message: "회원정보 수정 성공",
      data: {
        userId: updatedUser.userId,
        userName: updatedUser.userName,
      },
    });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "회원정보 수정 실패"));
  }
};

//회원탈퇴
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.uid;
    let user = await userModel.findById(userId);
    const currentRole = user.role;
    const updatedInfo = { role: "disabled" };

    if (currentRole === "basic-user") {
      user = await userModel.update({ userId, updateData: updatedInfo });
    }
    if (currentRole === "admin") {
      throw new errorHandler("관리자는 본인의 계정을 삭제할 수 없습니다.");
    }
    res.json({ message: "정상적으로 탈퇴되었습니다.", data: user });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "사용자 탈퇴실패"));
  }
};

//관리자 회원 삭제
const deleteUserByAdmin = async (req, res, next) => {
  try {
    const userId = req.params.uid;
    let user = await userModel.findById(userId);
    const currentRole = user.role;
    const updatedInfo = { role: "disabled" };

    if (currentRole === "basic-user") {
      user = await userModel.update({ userId, updateData: updatedInfo });
    }
    if (currentRole === "admin") {
      throw new errorHandler("관리자는 본인의 계정을 삭제할 수 없습니다.");
    }
    res.json({ message: "정상적으로 탈퇴되었습니다.", data: user });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "사용자 탈퇴실패"));
  }
};

//유저의 페이지 팔로우 토글
const toggleFollowUsers = async (req, res, next) => {
  try {
    const { uid, targetUserId } = req.params;

    // 유저와 대상 유저 정보 가져오기
    const user = await userModel.findById(uid);
    const targetUser = await userModel.findById(targetUserId);

    if (!user || !targetUser) {
      throw new Error("사용자 정보를 찾을 수 없습니다.");
    }

    // 팔로우 토글
    const isFollowing = user.following && user.following.includes(targetUserId);

    if (isFollowing) {
      // 이미 팔로우 중인 경우 언팔로우
      if (user.following) {
        user.following.pull(targetUserId);
      }
      if (targetUser.followers) {
        targetUser.followers.pull(uid);
      }
    } else {
      // 팔로우하지 않은 경우 팔로우
      if (user.following) {
        user.following.push(targetUserId);
      }
      if (targetUser.followers) {
        targetUser.followers.push(uid);
      }
    }

    // 변경 사항 저장
    await user.save();
    await targetUser.save();

    res.json({ message: "팔로우 토글 성공" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

//마이페이지 프로필 생성 필요없는 로직 / 회원가입할떄 빈배열로 받기 일단
// const createUserProfile = async (req, res, next) => {
//   try {
//     const { userImage, introduction } = req.body;
//     const userId = req.params.uid;

//     // 유저 정보 업데이트
//     const updatedUser = await userModel.update(
//       {
//         userId,
//         userImage,
//         introduction,
//       },
//       { new: true },
//     );
//     console.log(updatedUser);
//     if (!updatedUser) {
//       throw new Error("유저 정보를 업데이트할 수 없습니다.");
//     }

//     res.status(200).json({
//       message: "마이페이지 정보 업데이트 성공",
//       data: {
//         userId: updatedUser.userId,
//         userImage: updatedUser.userImage,
//         introduction: updatedUser.introduction,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     next(new errorHandler(400, "마이페이지 정보 업데이트 실패"));
//   }
// };

//마이프로필 조회
const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.params.uid;

    // 유저 정보 조회
    const userProfile = await userModel.findById(userId);

    if (!userProfile) {
      return next(new errorHandler(404, "유저 프로필을 찾을 수 없습니다."));
    }

    res.status(200).json({
      message: "마이페이지 정보 조회 성공",
      data: {
        userId: userProfile.userId,
        userNickName: userProfile.userNickName,
        userImage: userProfile.userImage,
        introduction: userProfile.introduction,
      },
    });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "마이페이지 정보 조회 실패"));
  }
};

//마이페이지 프로필 수정
const updateProfileInfo = async (req, res, next) => {
  const { userImage, introduction } = req.body;
  const userId = req.params.uid;
  try {
    // 사용자 정보 업데이트
    const updatedUser = await userModel.findById(userId);

    if (!updatedUser) {
      throw new Error("프로필 정보를 수정할 수 없습니다.");
    }
    const updateData = {};

    updateData.userImage = userImage;
    updateData.introduction = introduction;

    await userModel.update({ userId, updateData });
    const updatedUserProfile = await userModel.findById(userId);

    res.status(200).json({
      message: "프로필 정보 수정 성공",
      data: {
        userId: updatedUserProfile.userId,
        userImage: updatedUserProfile.userImage,
        introduction: updatedUserProfile.introduction,
      },
    });
  } catch (error) {
    console.error(error);
    next(new errorHandler(500, "프로필 정보 수정 실패"));
  }
};

export {
  signUp,
  logIn,
  userInfo,
  adminUserInfo,
  updateUserInfo,
  deleteUser,
  deleteUserByAdmin,
  toggleFollowUsers,
  // createUserProfile,
  updateProfileInfo,
  getUserProfile,
};
