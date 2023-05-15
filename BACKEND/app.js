import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import errorHandler from "./db/middlewares/error_handler.js";
import { postRouter } from "./db/routers/post_router.js";

// server open
const app = express();
dotenv.config();
// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

const mongodbUrl = process.env.MONGODB_URL;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB connected: ${process.env.MONGODB_URL}`);
  })
  .catch((err) => {
    console.error(err);
  });

// router
// JSON 형식의 데이터를 파싱하기 위한 미들웨어
app.use(express.json());

// URL-encoded 형식의 데이터를 파싱하기 위한 미들웨어
app.use(express.urlencoded({ extended: false }));

// post 라우터 사용
app.use("/api/posts", postRouter);

// 에러 핸들러 미들웨어 사용
app.use(errorHandler);

export default app;
