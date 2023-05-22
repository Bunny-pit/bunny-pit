import { express } from "express";
// express 모듈을 가져옴
import { http } from "http";
// http 모듈을 가져옴
import { path } from "path";
// path 모듈을 가져옴
import { Server as SocketIO } from "socket.io";
// socket.io의 Server 객체를 가져옴
import { moment } from "moment";
// moment 모듈을 가져옴
import { ChatModel } from "../models/chat_model";
//chat_model 파일과 연결

const app = express();
// express 애플리케이션 생성
const server = http.createServer(app);
// express 애플리케이션을 기반으로 http 서버 생성
const io = new SocketIO(server);
// http 서버를 기반으로 socket.io 서버 생성

app.use(express.static(path.join(__dirname, "src")));
// 정적 파일 제공을 위해 express 미들웨어 설정

io.on("connection", socket => {
  socket.on("chatting", async data => {
    console.log(data); // 받은 데이터 출력
    const { message } = data;
    // 받은 데이터에서 필요한 정보 추출

    // ChatModel을 사용하여 메시지 추가
    try {
      const newMessage = await ChatModel.addMessage({ message });
      console.log("새로운 메시지가 추가되었습니다:", newMessage);
    } catch (error) {
      console.error("메시지 추가 중 오류 발생:", error);
    }

    // 클라이언트로 받은 데이터를 다시 전송
    io.emit("chatting", {
      message,
    });
  });
});

server.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
