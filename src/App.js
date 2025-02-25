import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NoticeBoard from './pages/NoticeBoard.js';
import QuestionBoard from './pages/QuestionBoard.js';
import Order from './pages/Order/Order.js';
import Product from './pages/Product/Product.js';
import Work from './pages/Work/Work.js';
import Stock from './pages/Stock/Stock.js';
import OrderOne from './pages/Order/OrderOne/OrderOne.js';
import OrderMiddle from './pages/Order/OrderMiddle.js';
import OrderView from './pages/Order/OrderView.js';
import ProductView from './pages/Product/ProductView.js';
import ProductRegister from './pages/Product/ProductRegister.js';
import ProductUpdate from './pages/Product/ProductUpdate.js';
import ProductSearch from './pages/Product/ProductSearch.js';
import StockView from './pages/Stock/StockView.js'
import MissOrderRegister from './pages/Stock/MissOrderRegister.js'
import MissOrderView from './pages/Stock/MissOrderView.js'
import WorkRegister from './pages/Work/WorkRegister.js'
import WorkRoleUpdate from './pages/Work/WorkRoleUpdate.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} /> 

          <Route  path="/notice" element={<NoticeBoard />} />        
          <Route  path="/qna" element={<QuestionBoard />} />    

          <Route  path="/order" element={<Order />} />        
          <Route  path="/order/one" element={<OrderOne />} />    {/* 단품발주 */}
          <Route  path="/order/middle" element={<OrderMiddle />} />    {/* 중분류 발주 */}
          <Route  path="/order/view" element={<OrderView />} />    {/* 발주 현황 조회 */}

          <Route  path="/product" element={<Product />} /> 
          <Route  path="/product/view" element={<ProductView />} />     {/* 상품 조회 */}
          <Route  path="/product/register" element={<ProductRegister />} />     {/* 상품 추가 등록 */}
          <Route  path="/product/update" element={<ProductUpdate />} />     {/* 상품 상태 변경 */}
          <Route  path="/product/search" element={<ProductSearch />} />     {/* 상품 검색 */}

          <Route  path="/stock" element={<Stock />} />          
          <Route  path="/stock/view" element={<StockView />} />    {/* 재고 확인 */}
          <Route  path="/stock/miss-order/register" element={<MissOrderRegister />} />    {/* 오출 등록 */}
          <Route  path="/stock/miss-order/view" element={<MissOrderView />} />    {/* 오출 확인 */}

          <Route  path="/work" element={<Work />} />  
          <Route  path="/work/register" element={<WorkRegister />} />  {/* 근무자 추가 */}
          <Route  path="/work/role-update" element={<WorkRoleUpdate />} />  {/* 권한 변경 */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
