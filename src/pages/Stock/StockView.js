import React from "react";
import Layout from "../../components/layout/Layout";

const StockView = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    재고 확인
                </div>
            </div>
        </Layout>
    );
};

export default StockView;