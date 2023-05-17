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
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            />
          </div>
          <Message
            userId={"cute_hyeon"}
            img={"assets/profile1.png"}
            date={"1일"}
          />
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
          <Message
            userId={"cute_hansome_gang"}
            img={"assets/profile5.png"}
            date={"1일"}
          />
          <Message
            userId={"cute_hansome_gang"}
            img={"assets/profile5.png"}
            date={"1일"}
          />
          <Message
            userId={"cute_hansome_gang"}
            img={"assets/profile5.png"}
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

function Message(props) {
  return (
    <div className={chat_style.message_container}>
      <div
        className={chat_style.message_wrapper}
        onClick={() => {
          console.log("아직 준비중이에요 ㅋㅋ");
        }}
      >
        <img src={props.img} alt="프로필 사진" />
        <div className={chat_style.text}>
          <div className={chat_style.message_id}>{props.userId}</div>
          <div className={chat_style.message_date}>{props.date} 전에 보냄</div>
        </div>
      </div>
    </div>
  );
}
