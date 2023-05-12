import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${port}`);
});
