import React from "react";
import classname from "./register.module.css";

const Register = () => {
  return (
    <>
      <div className={classname.container}>
        <header className={classname.header}>
          <img
            src="/assets/bunny_talk_main_logo.png"
            width="120px"
            alt="bunny_talk_logo"
          />
          <p className={classname.registerTitle}>회원가입</p>
        </header>
        <form className={classname.form}>
          <div className={classname.name}>
            <label htmlFor="name-input">이름</label>
            <input type="text" placeholder="김버니" autoComplete="on" />
          </div>{" "}
          <div className={classname.nickname}>
            <label htmlFor="nickname-input">닉네임</label>
            <input type="text" placeholder="bunny_1234" autoComplete="on" />
          </div>
          <div className={classname.email}>
            <label htmlFor="email-input">이메일</label>
            <input
              type="email"
              placeholder="rabbit@rabbit.com"
              autoComplete="on"
            />
          </div>
          <div className={classname.password}>
            <label htmlFor="password-input">비밀번호</label>
            <input type="password" placeholder="********" autoComplete="on" />
          </div>
          <div className={classname.password}>
            <label htmlFor="password-input">비밀번호 재확인</label>
            <input type="password" placeholder="********" autoComplete="on" />
          </div>
          <div className={classname.btnContainer}>
            <button className={classname.registerBtn}>회원가입하기</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
