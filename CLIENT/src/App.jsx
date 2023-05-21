import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import UserMain from './main/main_page';
import MainHome from './main/main_home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/main" element={<UserMain />} />
        <Route path="/main/home" element={<MainHome />} />
      </Routes>
    </Router>

  );
}

export default App;
