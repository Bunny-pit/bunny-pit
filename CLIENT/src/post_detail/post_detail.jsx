import React from "react";
import styles from "./post_detail.module.css";
import { useNavigate, Link } from "react-router-dom";

function PostDetail() {
  const navigate = useNavigate();

  // 뒤로가기
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <button onClick={handleGoBack}>
              <img src="assets/arrow_back_icon.svg" alt="뒤로가기 버튼" />
            </button>
            <div className={styles.header_title}>
              <h2>게시물</h2>
            </div>
          </div>
          <div className={styles.input_wrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="아이디 검색하기"
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
