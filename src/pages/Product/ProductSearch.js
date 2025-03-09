import React from "react";
import Layout from "../../components/layout/Layout";

const ProductSearch = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    상품 검색
                </div>
            </div>
        </Layout>
    );
};

export default ProductSearch;