import "./App.css";
import { HomePage } from "./home_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/main_page";
import LogIn from "./log_in/login_page";
import "./App.css";

function App() {
  return (
    // <Main />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //   </Routes>
    // </BrowserRouter>
    <LogIn></LogIn>
  );
}

export default App;
