import React, { useState, useEffect } from 'react';
// import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import styles from './main_page.module.css';

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
          <img
            width="28px"
            height="28px"
            src="/assets/add_icon.svg"
            alt="add_icon"
          />
          <img
            width="28px"
            height="28px"
            src="/assets/favorite_icon.svg"
            alt="favorite_icon"
          />
          <img
            width="25px"
            height="28px"
            src="/assets/log_out_icon.svg"
            alt="navigate_icon"
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
function MainUser() {
  const [nickName, setNickName] = useState('유저 닉네임 state')
  const [postCount, setPostCount] = useState(0)
  const [follower, setFollower] = useState(0)
  const [profileMessage, setProfileMessage] = useState('유저 상태 메시지')
  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <div className={styles.mainProfile}>
          <div className={styles.mainAvata}>
            <img
              width="250px"
              height="250px"
              src="./assets/test.png"
              alt="elice_rabbit"
            />
          </div>
          <div className={styles.mainHeader}>
            <div className={styles.nickName}>
              <h2>{nickName}</h2>
            </div>
            <div className={styles.top}>
              <button>친구 초대</button>
              <button>프로필 편집</button>
            </div>
            <div className={styles.middle}>
              <ul>
                <li>게시물 <b>{postCount}</b></li>
                <li>나의 버니들 <b>{follower}</b></li>
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
          <div className={styles.mainLayout}>
            <div className={styles.mainCircle}>
              <img width="32" height="32" src="./assets/camera_icon.svg" alt="camera_icon" />
            </div>
            <h4>{postCount === 0 ? '게시물 없음' : '게시물 있음'}</h4>
          </div>
        </div>
      </section>
    </main>
  )
}


export default function Main() {
  return (
    <>
      <MainHeader />
      <MainUser />
    </>
  )
}