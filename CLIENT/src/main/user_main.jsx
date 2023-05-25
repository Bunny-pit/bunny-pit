import React, { useState, useEffect } from 'react';
import { Container, Grid, Modal, Button, Box } from "@mui/material"
import UserMainStyles from './user_main.module.css';



function UserMainHeader() {
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
        <img id="addPost"
          width="28px"
          height="28px"
          src="/assets/add_icon.svg"
          alt="add_icon"
          onClick={handleOpen}
          style={{ cursor: 'pointer' }}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 650, height: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4
          }}>
            <div className={UserMainStyles.modalHeader}>
              <img
                className={UserMainStyles.modalClose}
                width="22px"
                height="22px"
                src="./assets/arrow_back_icon.svg"
                alt="close_icon_logo"
              />
              <h2 className={UserMainStyles.modalTitle}>게시물 올리기</h2>
            </div>
            <div className={UserMainStyles.modalMain}>
              <div className={UserMainStyles.modalUploadBackground}>
                <img
                  className={UserMainStyles.modalUploadFile}
                  src="./assets/upload_icon.png"
                  width="180px"
                  height="200px"
                  alt="upload_icon" />
              </div>
              <div className={UserMainStyles.modalUploadWrite}>
                <input placeHolder={'문구입력...'} />
              </div>
              <Button variant="contained" style={{ width: '650px', backgroundColor: '#FFD4D4' }}> 공유하기 </Button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <header className={UserMainStyles.header}>
      <div className={UserMainStyles.headerContainer}>
        <div className={UserMainStyles.headerLogo}>
          <img
            width="108px"
            height="50px"
            src="/assets/bunny_talk_logo.png"
            alt="bunny_talk_logo"
          />
        </div>
        <div className={UserMainStyles.headerButtons}>
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
  )
}

function UserMainProfile() {
  const [nickName, setNickName] = useState('유저 닉네임 state')
  const [postCount, setPostCount] = useState(0)
  const [follower, setFollower] = useState(0)
  const [profileMessage, setProfileMessage] = useState('유저 상태 메시지')
  return (
    <main className={UserMainStyles.main}>
      <section className={UserMainStyles.mainSection}>
        <div className={UserMainStyles.mainProfile}>
          <div className={UserMainStyles.mainAvatar}>
            <img
              width="250px"
              height="250px"
              src="./assets/test.png"
              alt="user_avatar"
            />
          </div>
          <div className={UserMainStyles.mainHeader}>
            <div className={UserMainStyles.nickName}>
              <h2>{nickName}</h2>
            </div>
            <div className={UserMainStyles.top}>
              <button>친구 초대</button>
              <button>프로필 편집</button>
              <img
                width="30px"
                height="30px"
                src="./assets/bunny_button.png"
                alt="bunny_button"
              />
            </div>
            <div className={UserMainStyles.middle}>
              <ul>
                <li>게시물 <b>{postCount}</b></li>
                <li>나를 좋아하는 버니들 <b>{follower}</b></li>
              </ul>
            </div>
            <h3>{profileMessage}</h3>
          </div>
        </div>
        <div className={UserMainStyles.mainNav}>
          <ul>
            <li>
              <a href="#">게시물</a>
            </li>
            <li>
              <a href="#">저장됨</a>
            </li>
          </ul>
        </div>
        <div className={UserMainStyles.mainPosts}>
          <div className={UserMainStyles.mainLayout}>
            <div className={UserMainStyles.mainCircle}>
              <img width="32" height="32" src="./assets/camera_icon.svg" alt="camera_icon" />
            </div>
            <h4>{postCount === 0 ? '게시물 없음' : '게시물 있음'}</h4>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function UserMain() {
  return (
    <>
      <UserMainHeader />
      <UserMainProfile />
    </>
  )
}

export { UserMainHeader }