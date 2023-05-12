require("dotenv").config();
const { PORT, MONGODB_URL } = process.env;

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~~"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
