import { mainTalkModel } from "../models/mainTalk_model.js";

class MainTalkService {
  // 게시글 작성 로직
  createPost = async (req, res, next) => {
    try {
      // req에서 userId와 내용 가져옴
      const { content } = req.body;
      const userId = req.currentUserId;
      const userNickName = req.currentUserNickName;
      console.log(userNickName);
      const createdAt = new Date();
      // 내용 안적으면 에러 메세지
      if (!content) {
        throw new Error("내용을 입력해주세요.");
      }

      // 새로운 게시글 db에 저장
      const newPost = await mainTalkModel.create({
        userNickName,
        content,
        userId,
        createdAt,
      });

      // 저장된 게시글과 성공 메세지 전송
      res
        .status(201)
        .json({ message: "게시글이 작성되었습니다.", post: newPost });
    } catch (err) {
      // 에러 발생시 errorHandler 미들웨어로 전송
      next(err);
    }
  };

  // 게시글 조회 로직
  getPosts = async (req, res, next) => {
    try {
      // db에서 모든 게시글 조회
      const posts = await mainTalkModel.getAllpost();
      // 조회된 게시글 목록 전송
      res.status(200).json(posts);
    } catch (err) {
      // 에러 발생시 errorHandler 미들웨어로 전송
      next(err);
    }
  };

  // 게시글 삭제 로직
  deletePost = async (req, res, next) => {
    try {
      // req.params에서 게시글id 가져옴
      const postId = req.params.id;
      const userId = req.user.id;

      const post = await mainTalkModel.deleteById(postId);

      if (!post) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }

      if (post.userId !== userId) {
        throw new Error("게시글을 삭제할 권한이 없습니다.");
      }

      // 해당 id의 게시글 db에서 삭제
      const deletedPost = await mainTalkModel.findByIdAndDelete(postId);

      // 삭제된 게시글 정보와 성공 메세지 전송
      res
        .status(200)
        .json({ message: "게시글이 삭제되었습니다.", post: deletedPost });
    } catch (err) {
      // 에러 발생시 errorHandler 미들웨어로 전송
      next(err);
    }
  };
}

const mainTalkService = new MainTalkService();

export { mainTalkService };
