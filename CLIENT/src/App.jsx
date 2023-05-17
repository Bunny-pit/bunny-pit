import "./App.css";
import { HomePage } from "./home_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/main_page";
import "./App.css";
import LogIn from "./log_in/login_page";
import Register from "./register/register";

function App() {
  return (
    <>
      {/* <LogIn /> */}
      <Register />
      {/* <Main />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
