import "./App.css";
import { HomePage } from "./home_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/main_page";
import PostDetail from "./post_detail/post_detail";
function App() {
  return (
    <>
      {/* <Main /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/" element={<ChatPage />} />
          <Route path="/chat/:userId" element={<Chatting />} />
          <Route path="/postDetail" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
