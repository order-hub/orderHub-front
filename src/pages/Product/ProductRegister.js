import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";

const INITIAL_STATE = {
    productCode: "",
    productName: "",
    productCount: "",
    productOrderCount: "",
    productOrderDay: "",
    productSale: "",
    productStatus: "",
};

const labelMap = {
    productCode: "상품코드",
    productName: "상품명",
    productCount: "발주 재고",
    productOrderCount: "발주 배수",
    productOrderDay: "발주 요일",
    productSale: "행사",
    productStatus: "상품 상태",
};

const ProductField = ({ label, id, value, onChange }) => (
    <div className="grid grid-cols-2 gap-x-4">
        <div className="p-2 border-b border-gray-300">{label}</div>
        <div className="p-2 border-b border-gray-300">
        <SearchBar onChange={(text) => onChange(id, text)} value={value} id={id} />
        </div>
    </div>
);

const ProductRegister = () => {
    const [productData, setProductData] = useState(INITIAL_STATE);

    const handleInputChange = (field, value) => {
        setProductData(prevData => ({ ...prevData, [field]: value }));
    };

    const handleProductSave = () => {
        console.log("저장: ", productData);
        // 여기에 저장 로직 추가 (예: API 호출)

        alert("저장되었습니다");

        setProductData(INITIAL_STATE);
    };

    return (
        <Layout>
        <div className="flex flex-col w-full container">
            <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
            상품 등록
            </div>
            <div className="flex w-full gap-4 p-4 items-center">
            <label htmlFor="productCode" className="whitespace-nowrap mr-2">상품코드</label>
            <div className="relative flex">
                <SearchBar
                onChange={(text) => handleInputChange("productCode", text)}
                value={productData.productCode}
                id="productCode"
                />
            </div>
            <Button onClick={handleProductSave}>저장</Button>
            </div>
            <div className="w-full h-full p-4">
            <div className="flex w-full h-1/2 border">
                <div className="flex w-1/3 items-center justify-center p-4 border-r border-gray-300">
                상품 이미지
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-2/3">
                {Object.entries(INITIAL_STATE).slice(1).map(([key, value]) => (
                    <ProductField
                    key={key}
                    label={labelMap[key]}
                    id={key}
                    value={productData[key]}
                    onChange={handleInputChange}
                    />
                ))}
                </div>
            </div>
            </div>
        </div>
        </Layout>
    );
};

export default ProductRegister;
