import express from "express";
import { postRouter } from "./routers/post_router.js";
import errorHandler from "./middlewares/error_handler.js";
const app = express();

// JSON 형식의 데이터를 파싱하기 위한 미들웨어
app.use(express.json());

// URL-encoded 형식의 데이터를 파싱하기 위한 미들웨어
app.use(express.urlencoded({ extended: false }));

// post 라우터 사용
app.use("/api/posts", postRouter);

// 에러 핸들러 사용
app.use(errorHandler);

export { app };
