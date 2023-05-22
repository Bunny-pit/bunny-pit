import React from "react";
import styles from "./post_detail.module.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PostDetail() {
  const navigate = useNavigate();

  // 뒤로가기
  const handleGoBack = () => {
    navigate(-1);
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <img src="assets/arrow_prev_icon.png" alt="이전 이미지" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <img src="assets/arrow_next_icon.png" alt="다음 이미지" />
      </button>
    );
  };

  // 임시 쓰레기 데이터
  const user = {
    userImage: "assets/test.png",
    userNickName: "닉네임인데 어쩔건데",
  };

  const post = {
    imageUrl: ["assets/postImageDummy.png", "assets/test.png"],
    content: "어 반갑다",
    likes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    comments: ["맞짱뜨자", "그래 뜨자", "너 어디고"],
    createdAt: new Date(),
  };

  // 이미지 슬라이드 설정
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.headerContainer}>
              <div>
                <button onClick={handleGoBack}>
                  <img src="assets/arrow_back_icon.svg" alt="뒤로가기 버튼" />
                </button>
              </div>
              <div className={styles.header_title}>
                <h2>게시물</h2>
              </div>
            </div>
          </div>
          <main>
            <section className={styles.mainSection}>
              <div className={styles.userProfile}>
                <div className={styles.userProfileInfo}>
                  <div className={styles.userProfileImgContainer}>
                    <img
                      src={user.userImage}
                      alt="프로필 이미지"
                      className={styles.userProfileImg}
                    />
                  </div>
                  <span className={styles.userNickName}>
                    {user.userNickName}
                  </span>
                </div>
                <div className={styles.deleteButtonContainer}>
                  <img
                    src="assets/post_delete_icon.png"
                    alt="게시물 삭제 버튼"
                    className={styles.postDeleteBtn}
                  />
                </div>
              </div>
              <div className={styles.postImage}>
                <Slider {...settings}>
                  {post.imageUrl.map((url, index) => (
                    <div key={index} className={styles.postImage}>
                      <img
                        src={url}
                        alt="게시물 이미지"
                        className={styles.postImageImg}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.postLikes}>
                <sapn>좋아요 {post.likes.length}개</sapn>
              </div>
              <div className={styles.buttonsAndDate}>
                <div className={styles.buttonsContainer}>
                  <div className={styles.likeButton}>
                    <button className={styles.transparentButton}>
                      <img
                        src="assets/like_icon.png"
                        alt="좋아요 버튼"
                        className={styles.buttonIcon}
                      />
                    </button>
                  </div>
                  <div className={styles.commentButton}>
                    <button className={styles.transparentButton}>
                      <img
                        src="assets/comment_icon.png"
                        alt="댓글 버튼"
                        className={styles.buttonIcon}
                      />
                    </button>
                  </div>
                  <div className={styles.saveButton}>
                    <button className={styles.transparentButton}>
                      <img
                        src="assets/post_save_icon.png"
                        alt="게시물 저장 버튼"
                        className={styles.buttonIcon}
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.postDateContainer}>
                  <span className={styles.postDate}>
                    {post.createdAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className={styles.postContent}>{post.content}</div>
              <div className={styles.postCommentsContainer}>
                <div className={styles.postComment}>
                  <p>{post.comments[0]}</p>
                </div>
                <div className={styles.postComment}>
                  <p>{post.comments[1]}</p>
                </div>
                <div className={styles.postComment}>
                  <p>{post.comments[2]}</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default PostDetail;
