import React, { useState, useEffect } from "react";
import { Container, Grid, Modal, Button, Box } from "@mui/material";
import styles from "./main_page.module.css";
import axios from "axios";

const ModalComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        id="addPost"
        width="28px"
        height="28px"
        src="/assets/add_icon.svg"
        alt="add_icon"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 650,
            height: 800,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className={styles.modalHeader}>
            <img
              className={styles.modalClose}
              width="22px"
              height="22px"
              src="./assets/arrow_back_icon.svg"
              alt="close_icon_logo"
            />
            <h2 className={styles.modalTitle}>게시물 올리기</h2>
          </div>
          <div className={styles.modalMain}>
            <div className={styles.modalUploadBackground}>
              <img
                className={styles.modalUploadFile}
                src="./assets/upload_icon.png"
                width="180px"
                height="200px"
                alt="upload_icon"
              />
            </div>
            <div className={styles.modalUploadWrite}>
              <input placeHolder={"문구입력..."} />
            </div>
            <Button
              variant="contained"
              style={{ width: "650px", backgroundColor: "#FFD4D4" }}
            >
              {" "}
              공유하기{" "}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img
            width="108px"
            height="50px"
            src="/assets/bunny_talk_logo.png"
            alt="bunny_talk_logo"
          />
        </div>
        <div className={styles.headerButtons}>
          <img
            width="30px"
            height="30px"
            src="/assets/home_icon.svg"
            alt="home_icon"
          />
          <img
            width="28px"
            height="30px"
            src="/assets/chat_icon.svg"
            alt="send_icon"
          />
          <ModalComponent />

          <img
            width="28px"
            height="28px"
            src="/assets/favorite_icon.svg"
            alt="favorite_icon"
          />
          <img
            width="28px"
            height="28px"
            src="/assets/setting_icon.svg"
            alt="setting_icon"
          />
        </div>
      </div>
    </header>
  );
}

function MainUserHome() {
  const [nickName, setNickName] = useState("유저 닉네임 state");
  const [postCount, setPostCount] = useState(0);
  const [follower, setFollower] = useState(0);
  const [profileMessage, setProfileMessage] = useState("유저 상태 메시지");

  const [posts, setPosts] = useState([]); // 게시물 데이터 저장 state

  useEffect(() => {
    // db에서 게시물 가져오는 함수 호출
    axiosGetPost();
  }, []);

  // jwt token에서 userId 추출해서 게시물 조회하는 api 호출
  const axiosGetPost = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get("/api/posts/get-posts", config);
      const data = await res.data;
      setPosts(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <div className={styles.mainProfile}>
          <div className={styles.mainAvatar}>
            <img
              width="250px"
              height="250px"
              src="./assets/test.png"
              alt="user_avatar"
            />
          </div>
          <div className={styles.mainHeader}>
            <div className={styles.nickName}>
              <h2>{nickName}</h2>
            </div>
            <div className={styles.top}>
              <button>친구 초대</button>
              <button>프로필 편집</button>
              <img
                width="30px"
                height="30px"
                src="./assets/bunny_button.png"
                alt="bunny_button"
              />
            </div>
            <div className={styles.middle}>
              <ul>
                <li>
                  게시물 <b>{postCount}</b>
                </li>
                <li>
                  나를 좋아하는 버니들 <b>{follower}</b>
                </li>
              </ul>
            </div>
            <h3>{profileMessage}</h3>
          </div>
        </div>
        <div className={styles.mainNav}>
          <ul>
            <li>
              <a href="#">게시물</a>
            </li>
            <li>
              <a href="#">저장됨</a>
            </li>
          </ul>
        </div>
        <div className={styles.mainPosts}>
          {postCount === 0 ? (
            <div className={styles.mainLayout}>
              <div className={styles.mainCircle}>
                <img
                  width="32"
                  height="32"
                  src="./assets/camera_icon.svg"
                  alt="camera_icon"
                />
              </div>
              <h4>게시물 없음</h4>
            </div>
          ) : (
            <Grid container sapcing={2}>
              {posts.map((post, index) => (
                <Grid item xs={4} key={index}>
                  <img
                    src={post.imageUrl}
                    alt={`post-${index}`}
                    style={{ width: "100%", heigth: "auto" }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </section>
    </main>
  );
}

export default function Main() {
  return (
    <>
      <ModalComponent />
      <MainHeader />
      <MainUserHome />
      <Container>
        <Grid container spacing={1.5}>
          <Grid item xs={12} sm={4} md={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}
