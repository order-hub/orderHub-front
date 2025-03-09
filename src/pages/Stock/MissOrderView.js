import React from "react";
import Layout from "../../components/layout/Layout";

const MissOrderView = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    오출 등록 확인
                </div>
            </div>
        </Layout>
    );
};

export default MissOrderView;