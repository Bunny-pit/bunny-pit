import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { User } from "./db/models/user_model";
dotenv.config();
const { MONGODB_URL } = process.env;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();
app.use(express.urlencoded({ extended: true }));

const saveDummyData = async () => {
  const user = new User({
    userName: "John Doe",
    userNickName: "John Doe",
    email: "johndoe@example.com",
  });

  try {
    const savedUser = await user.save();
    console.log("User saved successfully:", savedUser);
  } catch (err) {
    console.error("Error saving user:", err);
  }
};

saveDummyData();

app.get("/", (req, res) => res.send("Hello World!~~"));

export default app;
