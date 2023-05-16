const multer = require("multer");
const path = require("path");
const fs = require("fs");

if (!fs.existsSync("public")) {
  fs.mkdirSync("public");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const userImageUpload = (req, res, next) => {
  upload.single("userImage")(req, res, (err) => {
    if (err) {
      return console.log(err);
    } else {
      next();
    }
  });
};

module.exports = { userImageUpload };
