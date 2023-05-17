import React from "react";
import { useParams } from "react-router-dom";

// import style from "./chatting.module.css";

export function Chatting(props) {
  const params = useParams();
  console.log(params.userId);
  return (
    <>
      <h1>이 곳은 {params.userId}님과의 채팅방 입니다.</h1>
      <div>{props.date}</div>
    </>
  );
}
