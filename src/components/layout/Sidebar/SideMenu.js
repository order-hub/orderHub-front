import React from "react";

const SideMenu = ({ onAddMenu }) => {

    return(
        <div className="fixed left-[310px] flex z-20">
            <div className="flex flex-col bg-white p-4 rounded-md items-start">
                <h2 className="text-lg font-bold mb-2">단축 메뉴</h2>
                <button onClick={() => onAddMenu('단품 발주','/order/one')}>단품 발주 <span className="text-green-500">+</span></button>
                <button onClick={() => onAddMenu('중분류 발주','/order/middle')}>중분류 발주 <span className="text-green-500">+</span></button>
                <button onClick={() => onAddMenu('발주 현황 조회','/order/view')}>발주 현황 조회<span className="text-green-500">+</span></button>
                <button onClick={() => onAddMenu('상품 조회','/product/view')}>상품 조회<span className="text-green-500">+</span></button>
                <button onClick={() => onAddMenu('상품 검색','/product/search')}>상품 검색<span className="text-green-500">+</span></button>
                <button onClick={() => onAddMenu('오출 등록','/stock/miss-order/view')}>오출 등록 <span className="text-green-500">+</span></button>
                <button onClick={() => onAddMenu('재고 확인','/stock/view')}>재고 확인<span className="text-green-500">+</span></button>
            </div>
        </div>
    )
}

export default SideMenu;
