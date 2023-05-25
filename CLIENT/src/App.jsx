import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//이종욱
import { HomePage } from "./home/home_page";
//임정훈
import PostDetail from "./post_detail/post_detail";
import Main from "./main/main_page";
//김종현
import UserMain from "./main/user_main";
import MainHome from "./main/main_home";
//류이서
import LogIn from "./log_in/login_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/main" element={<UserMain />} />
        {/* 게시물 상세 */}
        <Route path="/postDetail" element={<PostDetail />} />
        {/* 방명록 */}
        <Route path="/main/home" element={<MainHome />} />
        {/* 홈페이지 */}
        <Route path="/" element={<HomePage />} />
        {/* 로그인 */}
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
