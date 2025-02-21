import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NoticeBoard from './pages/NoticeBoard.js';
import QuestionBoard from './pages/QuestionBoard.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />        
          <Route  path="/notice" element={<NoticeBoard />} />        
          <Route  path="/qna" element={<QuestionBoard />} />        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
