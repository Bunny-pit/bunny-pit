import React from "react";
import chat_style from "./chat_style.module.css";
import { useNavigate } from "react-router-dom";

export default function Message(props) {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/chat/${props.userId}`, {
      state: {
        userId: props.userId,
        img: props.img,
        date: props.date,
      },
    });
  }
  return (
    <button className={chat_style.message_container} onClick={handleClick}>
      <div className={chat_style.message_wrapper}>
        <img src={props.img} alt="프로필 사진" />
        <div className={chat_style.text}>
          <div className={chat_style.message_id}>{props.userId}</div>
          <div className={chat_style.message_date}>{props.date} 전에 보냄</div>
        </div>
      </div>
    </button>
  );
}
