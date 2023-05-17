import React from "react";
import chat_style from "./chat_style.module.css";
import { Link } from "react-router-dom";

export function ChatPage() {
  return (
    <>
      <div className={chat_style.container}>
        <div className={chat_style.wrapper}>
          <div className={chat_style.header}>
            <button>
              <img src="assets/arrow-left.png" alt="뒤로가기 버튼" />
            </button>
            <div className={chat_style.header_title}>
              <h2>채팅하기</h2>
            </div>
          </div>
          <div className={chat_style.input_wrapper}>
            <input
              className={chat_style.input}
              type="text"
              placeholder="아이디 검색하기"
            />
          </div>
          <div className={chat_style.message_container}>
            <div
              className={chat_style.message_wrapper}
              onClick={() => {
                console.log("아직 준비중이에요 ㅋㅋ");
              }}
            >
              <img src="/assets/profile1.png" alt="프로필 사진" />
              <div className={chat_style.text}>
                <div className={chat_style.message_id}>Cute_hyeon</div>
                <div className={chat_style.message_date}>1일 전에 보냄</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
