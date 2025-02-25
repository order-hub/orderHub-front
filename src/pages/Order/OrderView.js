import React from "react";
import Layout from "../../components/layout/Layout";

const OrderView = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full p-4">
                <div className="flex flex-col w-full p-4 text-2xl">
                    발주 현황 조회
                </div>
                <div className="flex p-4 gap-4">
                    <label htmlFor="orderId"> 발주일자</label>
                    <input type="date" id="orderId" value="2025-01-01" className="w-1/4"/>
                </div>
                <ul className="flex bg-gray-100 p-2 mt-4">
                    <li className="w-2/5 border-r border-gray-400 px-2">상품명</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">전일발주</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">금일발주</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">발주재고</li>
                    <li className="w-1/5 px-2">확인 여부</li>
                </ul>
                <hr className="mr-2 ml-2 border-gray-400" />
                여긴 날짜별로 전체 출력
            </div>
        </Layout>
    );
};

export default OrderView;