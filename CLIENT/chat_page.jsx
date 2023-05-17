import React from "react";
import chat_style from "./chat_style.module.css";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <div className={chat_style.container}>
        <header className={chat_style.header}>
          <div className={chat_style.header_container}>
            <Link to="/" className={chat_style.logo_container}>
              <img
                src="/assets/logo.png"
                alt="logo"
                className={chat_style.logo}
              ></img>
              <img
                src="/assets/logo_text.png"
                alt="logo_text"
                className={chat_style.logo_text}
              ></img>
            </Link>
            <div className={chat_style.login_container}>
              <Link to="/login" className={chat_style.login_button}>
                로그인
              </Link>
              <Link to="/join" className={chat_style.join_button}>
                회원가입
              </Link>
            </div>
          </div>
        </header>
        <div className={chat_style.main_container}>
          <div className={chat_style.main_text}>
            <h2>친구들과 함께 만드는,</h2>
            <h2 className={chat_style.point_text}>우리의 공간</h2>

            <p>
              자유롭게 사진을 올리고, 공유할 수 있는 우리만의 공간을
              <br /> 버니톡과 함께 만들어가요
            </p>
            <button className={chat_style.button}>바로가기</button>
          </div>
        </div>
      </div>
      <div className={chat_style.sec_container}>
        <div className={chat_style.sec_wrapper}>
          <div className={chat_style.sec_image}></div>
          <div className={chat_style.text_wrapper}>
            <h2>친구들과 채팅</h2>
            <p>
              어쩌구 저쩌구 버니톡 정말 좋아요
              <br />
              난 탑걸 톡톡톡 튀는 핫걸~
              <br />
              반할걸 녹녹녹 녹아들걸~
            </p>
          </div>
        </div>
      </div>
      <div
        className={chat_style.sec_container}
        style={{ backgroundColor: "#ffd4d4" }}
      >
        <div className={chat_style.sec_wrapper}>
          <div className={chat_style.text_wrapper}>
            <h2>친구들과 채팅</h2>
            <p>
              어쩌구 저쩌구 버니톡 정말 좋아요
              <br />
              매력이 터져 뿜!! 한순간 뿜!!
              <br />
              완전히 뿜뿜 터질 것 같아아~~ 확끌려~
            </p>
          </div>
          <div className={chat_style.sec_image}></div>
        </div>
      </div>
      <div className={chat_style.sec_container}>
        <div className={chat_style.sec_wrapper}>
          <div className={chat_style.sec_image}></div>
          <div className={chat_style.text_wrapper}>
            <h2>
              내가 보고싶은 <br />
              친구 소환
            </h2>
            <p>
              어쩌구 저쩌구 버니톡 정말 좋아요
              <br />
              와와와 느낌이 와 내게 와와와 짜릿한 느낌이
              <br />
              wow 이런 기분 최고야 날 말릴 수 없을거야~
            </p>
          </div>
        </div>
      </div>
      <div className={chat_style.sec2_container}>
        <div className={chat_style.sec2_wrapper}>
          <button className={chat_style.button}>나만의 공간 만들러 가기</button>
        </div>
      </div>
      <footer>
        <div className={chat_style.footer_wrapper}>
          <span className={chat_style.text}>
            버니톡 | FE : 이종욱 김종현 | BE : 오창현 이준미 | FULL : 류이서
            임정훈
          </span>
        </div>
      </footer>
    </>
  );
}
