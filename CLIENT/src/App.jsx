import { HomePage } from "./home/home_page";
import { ChatPage } from "./chat/chat_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Chatting } from "./chat/chatting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat/" element={<ChatPage />} />
        <Route path="/chat/:userId" element={<Chatting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
