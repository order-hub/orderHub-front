import React from "react";
import Layout from "../../components/layout/Layout";

const MissOrderRegister = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    오출 등록
                </div>
                <div className="flex p-4 gap-4 items-center">
                    <label htmlFor="orderId"> 발주일자
                    </label>
                    <input type="date" id="orderId" value="2025-01-01" className="w-1/4"/>
                </div>
                <ul className="flex bg-gray-100 ml-4 mr-4 mt-4 p-2">
                    <li className="w-2/5 border-r border-gray-400 px-2">상품명</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">금일발주</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">실입고</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">금액</li>
                    <li className="w-1/5 px-2">확인 여부</li>
                </ul>
            </div>
        </Layout>
    );
};

export default MissOrderRegister;