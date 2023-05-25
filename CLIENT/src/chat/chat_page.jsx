import React, { useNavigate } from "react";
import chat_style from "./chat_style.module.css";
import { Link } from "react-router-dom";
// import Chatting from "./chatting";

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
  // const navigate = useNavigate();
  // const navigateToChat = () => {
  //   navigate("/chat");
  // };

  return (
    <Link to={`/chat/${props.userId}`} className={chat_style.message_container}>
      <div
        className={chat_style.message_wrapper}
        onClick={() => {
          console.log("test");
        }}
      >
        <img src={props.img} alt="프로필 사진" />
        <div className={chat_style.text}>
          <div className={chat_style.message_id}>{props.userId}</div>
          <div className={chat_style.message_date}>{props.date} 전에 보냄</div>
        </div>
      </div>
    </Link>
  );
}
