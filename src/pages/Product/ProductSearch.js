import {React, useState} from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";

const ProductSearch = () => {
    const [productName, setProductName] = useState("");

    const handleProductNameChange = (text) => {
        setProductName(text);
    };

    const handleSearchClick = () => {
        console.log("검색 실행:", {productName });
        setProductName("");
    };
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    상품 검색
                </div>
                <div className="relative mt-4 ml-4 items-center">
                    <SearchBar onChange={handleProductNameChange} value={productName}/>
                    <Button onClick={handleSearchClick}>검색</Button>
                </div>
                <div>
                    <ul className="flex bg-gray-100 ml-4 mr-4 mt-4 p-2">
                        <li className="w-1/5 border-r border-gray-400 px-2">상품코드</li>
                        <li className="w-2/5 border-r border-gray-400 px-2">상품명</li>
                        <li className="w-1/5 border-r border-gray-400 px-2">상품상태</li>
                        <li className="w-1/5 px-2">취급여부</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default ProductSearch;