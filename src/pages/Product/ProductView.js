import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import SearchModal from "../../components/common/SearchModal";
import Button from "../../components/common/Button";

const ProductView = () => {
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [productData, setProductData] = useState({
        productCode: "",
        productName: "",
        productCount: "",
        productOrderCount: "",
        productOrderDay: "",
        productSale: "",
        productStatus: "",
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

        // 목업 데이터
        const mockData = {
            productCode: "12345",
            productName: "테스트 상품",
            productCount: "100",
            productOrderCount: "10",
            productOrderDay: "월수금",
            productSale: "1+1",
            productStatus: "정상",
        };

        // 상품명 또는 코드가 일치하는지 확인
        if (productCode === mockData.productCode || productName === mockData.productName) {
            // 일치하는 경우, 목업 데이터로 상태 업데이트
            setProductData({
                productCode: mockData.productCode,
                productName: mockData.productName,
                productCount: mockData.productCount,
                productOrderCount: mockData.productOrderCount,
                productOrderDay: mockData.productOrderDay,
                productSale: mockData.productSale,
                productStatus: mockData.productStatus,
            });
        } else {
            alert("일치하는 상품이 없습니다.");
            setProductData({
                productName: "",
                productCount: "",
                productOrderCount: "",
                productOrderDay: "",
                productSale: "",
                productStatus: "",
            });
        }

        setIsSearchOpen(false);
        setProductCode("");
        setProductName("");
    };

    const productFields = [
        { label: "상품코드", key: "productCode"},
        { label: "상품명", key: "productName" },
        { label: "발주 재고", key: "productCount" },
        { label: "발주 배수", key: "productOrderCount" },
        { label: "발주 요일", key: "productOrderDay" },
        { label: "행사", key: "productSale" },
        { label: "상품 상태", key: "productStatus" },
    ];

    return (
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    상품 조회
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
                <div className="w-full h-full p-4">
                    <div className="flex w-full h-1/2 border">
                        <div className="flex w-1/3 items-center justify-center p-4 border-r border-gray-300">
                            상품 이미지
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 w-2/3">
                            {productFields.map((field) => (
                                <React.Fragment key={field.key}>
                                    <div className="p-2 border-b border-gray-300">{field.label}</div>
                                    <div className="p-2 border-b border-gray-300">
                                        {productData[field.key]}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductView;
