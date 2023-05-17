import { postModel } from "../models/post_model.js";

class PostService {
  // 게시글 작성 로직
  createPost = async (req, res, next) => {
    try {
      // req에서 userId와 내용 가져옴
      const { content } = req.body;
      const userId = req.currentUserId;
      // 내용 안적으면 에러 메세지
      if (!content) {
        throw new Error("내용을 입력해주세요.");
      }

      // 새로운 게시글 db에 저장
      const newPost = await postModel.create({
        content,
        userId,
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
      const posts = await postModel.findAll();
      // 조회된 게시글 목록 전송
      res.status(200).json(posts);
    } catch (err) {
      // 에러 발생시 errorHandler 미들웨어로 전송
      next(err);
    }
  };

  // 게시글 상세 조회 로직
  getPostById = async (req, res, next) => {
    try {
      // req.parmas에서 게시글id 가져옴
      const postId = req.params.id;

      // db에서 해당 id의 게시글 조회
      const post = await postModel.findById(postId);

      // 해당 게시글이 없을 경우 에러 메세지
      if (!post) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }

      // 조회된 게시글 전송
      res.status(200).json(post);
    } catch (err) {
      // 에러 발생시 errorHandler 미들웨어로 전송
      next(err);
    }
  };

  // 게시글 수정 로직
  updatePost = async (req, res, next) => {
    try {
      // req.parmas에서 게시글id 가져옴
      const postId = req.params.id;
      // req에서 userId랑 내용 가져옴
      const { content } = req.body;
      const userId = req.currentUserId;

      const post = await postModel.findById(postId);

      if (!post) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }

      if (post.userId.toString() !== userId) {
        throw new Error("게시글을 수정할 권한이 없습니다.");
      }

      // 해당 id의 게시글에서 내용 수정하고 수정된 게시글 반환 (new: true)
      const updatedPost = await postModel.update(
        postId,
        {
          content,
        },
        { new: true }
      );

      // 수정된 게시글 정보와 성공 메세지 전송
      res
        .status(200)
        .json({ message: "게시글이 수정되었습니다.", post: updatedPost });
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
      const userId = req.currentUserId;

      const post = await postModel.findById(postId);

      if (!post) {
        throw new Error("게시글을 찾을 수 없습니다.");
      }

      if (post.userId.toString() !== userId) {
        throw new Error("게시글을 삭제할 권한이 없습니다.");
      }

      // 해당 id의 게시글 db에서 삭제
      const deletedPost = await postModel.deleteById(postId);

      // 삭제된 게시글 정보와 성공 메세지 전송
      res
        .status(200)
        .json({ message: "게시글이 삭제되었습니다.", post: deletedPost });
    } catch (err) {
      // 에러 발생시 errorHandler 미들웨어로 전송
      next(err);
    }
  };

  // 좋아요 로직
  postLike = async (req, res, next) => {
    try {
      const postId = req.params.id;
      const userId = req.currentUserId;

      const post = await postModel.toggleLike(postId, userId);

      res.status(200).json({ message: "좋아요가 반영되었습니다.", post });
    } catch (err) {
      next(err);
    }
  };
}

const postService = new PostService();

export { postService };
