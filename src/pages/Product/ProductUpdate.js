import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import SearchModal from "../../components/common/SearchModal";
import Button from "../../components/common/Button";


const ProductUpdate = () => {
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [productData, setProductData] = useState({
            productCode: "",
            productName: ""
        });
    
    const handleProductCodeChange = (text) => {
        setProductCode(text);
    };

    const handleProductNameChange = (text) => {
        setProductName(text);
        setIsSearchOpen(text.trim() !== "");
    };

    const closeModal = () => {
        setIsSearchOpen(false);
    };

    const handleSearchClick = () => {
        console.log("검색 실행:", { productCode, productName });

        const mockData = {
            productCode: "12345",
            productName: "테스트 상품",
        };

        if (productCode === mockData.productCode || productName === mockData.productName) {
            setProductData({
                productCode: mockData.productCode,
                productName: mockData.productName
            });
        } else {
            alert("일치하는 상품이 없습니다.");
            setProductData({
                productCode: "",
                productName: ""
            });
        }

        setIsSearchOpen(false);
        setProductCode("");
        setProductName("");
    };
    
    return(
        <Layout>
        <div className="flex flex-col w-full container">
            <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                상품 상태 변경
            </div>
            <div className="flex w-full gap-4 p-4 items-center">
                <label htmlFor="productCode" className="whitespace-nowrap mr-2">
                    상품코드
                </label>
                <div className="relative flex">
                    <SearchBar
                        onChange={handleProductCodeChange}
                        value={productCode}
                        id="productCode"
                    />
                </div>
                <label htmlFor="productName" className="whitespace-nowrap mr-2">
                    상품명
                </label>
                <div className="relative flex">
                    <SearchBar
                        onChange={handleProductNameChange}
                        value={productName}
                        id="productName"
                    />
                    {isSearchOpen && (
                        <SearchModal onClose={closeModal}>{productName}</SearchModal>
                    )}
                </div>
                <Button onClick={handleSearchClick}>검색</Button>
            </div>

            <div>
                <ul className="flex bg-gray-100 ml-4 mr-4 mt-4 p-2">
                    <li className="w-1/5 border-r border-gray-400 px-2">{productData.productCode}</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">{productData.productName}</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">
                    <select>
						<option>정상</option>
						<option>중단</option>
						<option>품절</option>
						<option>일시품절</option>
					</select>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
    );
};

export default ProductUpdate;