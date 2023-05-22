import React from "react";
import classes from "./login_page.module.css";

const LogIn = () => {
  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <img
            src="/assets/bunny_talk_main_logo.png"
            width="120px"
            alt="bunny_talk_logo"
          />
          <p className={classes.loginTitle}>환영해요 버니!</p>
        </header>
        <form className={classes.form}>
          <div className={classes.email}>
            <label htmlFor="email-input">이메일</label>
            <input
              type="email"
              placeholder="rabbit@rabbit.com"
              autoComplete="on"
            />
          </div>
          <div className={classes.password}>
            <label htmlFor="password-input">비밀번호</label>
            <input type="password" placeholder="********" autoComplete="on" />
          </div>
          <div className={classes.btnContainer}>
            <button className={classes.loginBtn}>로그인하기</button>
            <button className={classes.registerBtn}>회원가입하기</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
