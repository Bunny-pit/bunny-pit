import React from "react";
import chat_style from "./chat_style.module.css";
import Message from "./Message";
// import { Chatting } from "./chatting";

export function ChatPage() {
  /*
  받아와야 할 것들 
  전체 메세지,
  상대 아이디,
  시간,
  사진
  */

  return (
    <>
      <div className={chat_style.container}>
        <div className={chat_style.wrapper}>
          <header className={chat_style.header}>
            <button
              onClick={() => {
                console.log("뒤로가기!!");
              }}
            >
              <img src="assets/arrow-left.png" alt="뒤로가기 버튼" />
            </button>
            <div className={chat_style.header_title}>
              <h2>채팅하기</h2>
            </div>
          </header>
          <div className={chat_style.input_wrapper}>
            <input
              className={chat_style.input}
              type="text"
              placeholder="아이디 검색하기"
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            />
          </div>
          <Message
            userId={"navi_rabbit12"}
            img={"assets/profile2.png"}
            date={"1일"}
          />
          <Message
            userId={"lets_drinkWine"}
            img={"assets/profile3.png"}
            date={"1일"}
          />
          <Message
            userId={"cartoon_writer"}
            img={"assets/profile4.png"}
            date={"1일"}
          />
          <Message
            userId={"cute_hansome_gang"}
            img={"assets/profile5.png"}
            date={"1일"}
          />
        </div>
      </div>
    </>
  );
}
