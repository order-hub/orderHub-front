import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NoticeBoard from './pages/NoticeBoard.js';
import QuestionBoard from './pages/QuestionBoard.js';
import Order from './pages/Order/Order.js';
import Product from './pages/Product/Product.js';
import Work from './pages/Work/Work.js';
import Stock from './pages/Stock/Stock.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />        
          <Route  path="/notice" element={<NoticeBoard />} />        
          <Route  path="/qna" element={<QuestionBoard />} />        
          <Route  path="/order" element={<Order />} />        
          <Route  path="/product" element={<Product />} />        
          <Route  path="/work" element={<Work />} />        
          <Route  path="/stock" element={<Stock />} />        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
