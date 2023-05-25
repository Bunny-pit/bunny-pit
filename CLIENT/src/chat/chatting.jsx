import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import style from "./chatting.module.css";
// import io from "socket.io-client"; // socket.io-client 라이브러리를 가져옴
// import Chat from "./Chat"; // Chat 컴포넌트를 가져옴

// const socket = io.connect("http://localhost:3001"); // "http://localhost:3001"에 연결된 소켓을 생성하고 socket 변수에 할당

// import style from "./chatting.module.css";

export default function Chatting() {
  const { state } = useLocation();
  // const params = useParams();
  console.log(state);
  console.log(state.img);
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <header>
            <Link to="/chat">
              <img
                src="/assets/arrow-left.png"
                alt="뒤로가기 버튼"
                className={style.back}
              />
            </Link>
            <img
              src={`/${state.img}`}
              alt="프로필 사진"
              className={style.profileImg}
            />
            <h3 className={style.userId}>{state.userId}</h3>
          </header>
          <ul>
            <li>채팅채팅</li>
          </ul>
        </div>
      </div>
    </>
  );
}

// function App() {
//   const [username, setUsername] = useState(""); // 사용자명을 저장할 상태 변수와 해당 변수를 변경할 수 있는 함수
//   const [room, setRoom] = useState(""); // 채팅방 ID를 저장할 상태 변수와 해당 변수를 변경할 수 있는 함수
//   const [showChat, setShowChat] = useState(false); // 채팅 화면을 보여줄지 여부를 저장할 상태 변수와 해당 변수를 변경할 수 있는 함수

//   const joinRoom = () => {
//     // joinRoom 함수 선언
//     if (username !== "" && room !== "") {
//       // 사용자명과 채팅방 ID가 비어있지 않으면
//       socket.emit("join_room", room); // 소켓을 통해 "join_room" 이벤트를 서버로 전송
//       setShowChat(true); // showChat 상태 변수를 true로 변경하여 채팅 화면을 보여줌
//     }
//   };

//   return (
//     <div className="App">
//       {!showChat ? ( // showChat 변수가 false인 경우
//         <div className="joinChatContainer">
//           <h3>Join A Chat</h3>
//           <input
//             type="text"
//             placeholder="사용할 닉네임을 입력하세요."
//             onChange={event => {
//               setUsername(event.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="접속하실 방 정보를 입력하세요."
//             onChange={event => {
//               setRoom(event.target.value);
//             }}
//           />
//           <button onClick={joinRoom}>Join A Room</button>
//         </div>
//       ) : (
//         // showChat 변수가 true인 경우
//         <Chat socket={socket} username={username} room={room} />
//       )}
//     </div>
//   );
// }

// export default App; // App 컴포넌트를 내보냄
