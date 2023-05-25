import React, { useState } from "react";
import classes from "./login_page.module.css";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { redirect } from "react-router-dom";
import useInput from "../hooks/useInput";
const LogIn = () => {
  const { data: userData, error, revalidate } = useSWR("/users/login", fetcher);
  const [errorLogIn, setErrorLogIn] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmit = (e) => {
    e.preventDefault();
    setErrorLogIn(false);
    axios
      .post(
        "/users/login",
        { email, password },
        //사용자 인증정보 포함 옵션
        {
          withCredentials: true,
        },
      )
      .then(() => {
        revalidate();
      })
      .catch((error) => {
        setErrorLogIn(error.response?.data?.statusCode === 401);
      });
  };
  if (!error && userData) {
    //메인화면 url 나오면 넣어주기
    return redirect("/");
  }
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
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.email}>
            <label htmlFor="email-input">이메일</label>
            <input
              type="email"
              placeholder="rabbit@rabbit.com"
              autoComplete="on"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className={classes.password}>
            <label htmlFor="password-input">비밀번호</label>
            <input
              type="password"
              placeholder="********"
              autoComplete="on"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          {errorLogIn && <p>이메일과 비밀번호가 다릅니다.</p>}
          <div className={classes.btnContainer}>
            <button className={classes.loginBtn} type="submit">
              로그인하기
            </button>
            <a className={classes.registerBtn} href="/">
              회원가입하기
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
