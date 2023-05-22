import React from "react";
import { useParams, Link } from "react-router-dom";

// import style from "./chatting.module.css";

export function Chatting(props) {
  const params = useParams();
  console.log(params.userId);
  return (
    <>
      <header>
        <Link to="/chat">
          <img src="assets/arrow-left.png" alt="뒤로가기 버튼" />
        </Link>
      </header>
      <h1>이 곳은 {params.userId}님과의 채팅방 입니다.</h1>
      <div>{props.date}</div>
    </>
  );
}
