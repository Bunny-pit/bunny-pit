import React from "react";
import home_style from "./home_style.module.css";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className={home_style.container}>
      <header className={home_style.header}>
        <div className={home_style.header_container}>
          <Link to="/" className={home_style.logo_container}>
            <img
              src="/assets/logo.png"
              alt="logo"
              className={home_style.logo}
            ></img>
            <img
              src="/assets/logo_text.png"
              alt="logo_text"
              className={home_style.logo_text}
            ></img>
          </Link>
          <div className={home_style.login_container}>
            <Link to="/login" className={home_style.login_button}>
              로그인
            </Link>
            <Link to="/join" className={home_style.join_button}>
              회원가입
            </Link>
          </div>
        </div>
      </header>
      <section className={home_style.main_container}>
        <div className={home_style.main_text}>
          <h2>친구들과 함께 만드는,</h2>
          <h2 className={home_style.point_text}>우리의 공간</h2>
          <p>
            자유롭게 사진을 올리고, 공유할 수 있는 우리만의 공간을
            <br /> 버니톡과 함께 만들어가요
          </p>
        </div>
      </section>
    </div>
  );
}
