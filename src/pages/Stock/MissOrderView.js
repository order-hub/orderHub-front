import React from "react";
import Layout from "../../components/layout/Layout";

const MissOrderView = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    오출 등록 확인
                </div>
                <div className="flex p-4 gap-4 items-center">
                    <label htmlFor="orderId"> 발주일자
                    </label>
                    <input type="date" id="orderId" value="2025-01-01" className="w-1/4"/>
                </div>
            </div>
        </Layout>
    );
};

export default MissOrderView;