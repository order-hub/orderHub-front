import React from "react";
import Layout from "../../components/layout/Layout";

const OrderMiddle = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full p-4">    
                <div className="flex flex-col w-full p-4 text-2xl">
                    중분류 발주
                </div>
                <div className="flex p-4 gap-4 items-center">
                    <label htmlFor="orderId"> 발주일자
                    </label>
                    <input type="date" id="orderId" value="2025-01-01" className="w-1/4"/>
                    <select className="w-1/4">
                        <option>중분류</option>
                    </select>
                    <select className="w-1/4">
                        <option>소분류</option>
                    </select>
                </div>
                <ul className="flex bg-gray-100 p-2 mt-4">
                    <li className="w-2/5 border-r border-gray-400 px-2">상품명</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">전일발주</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">금일발주</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">발주재고</li>
                    <li className="w-1/5 px-2">확인 여부</li>
                </ul>
                <hr className="mr-2 ml-2 border-gray-400" />
                여기도 카테고리 별 뽑아오면 되겠지....?
            </div>
        </Layout>
    );
};

export default OrderMiddle;