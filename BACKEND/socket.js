const express = require("express"); // express 모듈 불러오기
const app = express(); // express 애플리케이션 생성
const http = require("http"); // http 모듈 불러오기
const cors = require("cors"); // cors 모듈 불러오기
const { Server } = require("socket.io"); // socket.io의 Server 클래스 불러오기
app.use(cors()); // 애플리케이션에 cors 미들웨어 적용
const server = http.createServer(app); // http 서버 생성

const io = new Server(server, {
  // socket.io 서버 생성
  cors: {
    origin: "http://localhost:3000", // 허용할 origin 설정
    methods: ["GET", "POST"], // 허용할 HTTP 메서드 설정
  },
});

io.on("connection", socket => {
  // 클라이언트가 소켓에 연결되었을 때의 이벤트 핸들러
  console.log(`User connected: ${socket.id}`); // 연결된 클라이언트의 소켓 ID 출력

  socket.on("join_room", data => {
    // "join_room" 이벤트 수신 시의 이벤트 핸들러
    socket.join(data); // 클라이언트를 해당 방에 조인
    console.log(`User with ID: ${socket.id} joined room: ${data}`); // 조인한 클라이언트의 소켓 ID와 조인한 방 ID 출력
  });

  socket.on("send_message", data => {
    // "send_message" 이벤트 수신 시의 이벤트 핸들러
    socket.to(data.room).emit("receive_message", data); // 해당 방에 있는 클라이언트들에게 "receive_message" 이벤트와 데이터를 전송
  });

  socket.on("disconnect", () => {
    // 클라이언트가 소켓 연결을 해제할 때의 이벤트 핸들러
    console.log(`User disconnected: ${socket.id}`); // 연결 해제된 클라이언트의 소켓 ID 출력
  });
});

const PORT = 3001; // 서버 포트 설정

server.listen(PORT, () => {
  // 서버를 지정된 포트로 실행
  console.log(`server is running at ${PORT}`); // 서버가 실행되었음을 출력
});
