import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";

const INITIAL_STATE = {
    productImage: null,
    productCode: "",
    productName: "",
    productCount: "",
    productOrderCount: "",
    productOrderDay: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
    },
    selectedOrderDays: [], // 체크된 요일을 저장할 배열
    productSale: "",
    productStatus: "",
};

const ProductRegister = () => {
    const [productData, setProductData] = useState(INITIAL_STATE);

    const handleFileChange = (e) => {
        setProductData((prevData) => ({ ...prevData, productImage: e.target.files[0] }));
    };

    const handleInputChange = (field, value) => {
        setProductData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleOrderDayChange = (day) => {
        setProductData((prevData) => {
        const newOrderDayState = {
            ...prevData.productOrderDay,
            [day]: !prevData.productOrderDay[day],
        };

        const selectedDays = Object.keys(newOrderDayState)
            .filter((key) => newOrderDayState[key])
            .map((key) => {
            switch (key) {
                case "mon":
                return "월";
                case "tue":
                return "화";
                case "wed":
                return "수";
                case "thu":
                return "목";
                case "fri":
                return "금";
                case "sat":
                return "토";
                case "sun":
                return "일";
                default:
                return "";
            }
            });

        return {
            ...prevData,
            productOrderDay: newOrderDayState,
            selectedOrderDays: selectedDays,
        };
        });
    };

    const handleProductSave = () => {
        console.log("저장: ", productData);
        // 여기에 저장 로직 추가 (예: API 호출)
        // productData.selectedOrderDays를 전송

        alert("저장되었습니다");

        setProductData(INITIAL_STATE);
    };

    return (
        <Layout>
        <div className="flex flex-col w-full container">
            <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
            상품 등록
            </div>
            <div className="flex w-full gap-4 p-4 items-center justify-end">
            <Button onClick={handleProductSave}>저장</Button>
            </div>
            <div className="w-full h-full p-4">
            <div className="flex w-full h-1/2 border">
                <div className="flex flex-col w-1/3 items-center justify-center p-4 border-r border-gray-300">
                    <p>상품 이미지</p>
                    <input className="flex flex-col" type="file" onChange={handleFileChange} />
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-2/3">
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>상품코드</p>
                    <SearchBar
                    onChange={(text) => handleInputChange("productCode", text)}
                    value={productData.productCode}
                    id="productCode"
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>상품명</p>
                    <SearchBar
                    onChange={(text) => handleInputChange("productName", text)}
                    value={productData.productName}
                    id="productName"
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>가격</p>
                    <SearchBar
                    onChange={(text) => handleInputChange("productSale", text)}
                    value={productData.productSale}
                    id="productSale"
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>대분류</p>
                    <select className="h-10 w-4/5 border border-gray-400 rounded">
                        <option></option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>중분류</p>
                    <select className="h-10 w-4/5 border border-gray-400 rounded">
                        <option></option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>소분류</p>
                    <select className="h-10 w-4/5 border border-gray-400 rounded">
                        <option></option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-x-4 w-full p-2">
                    <p>상품상태</p>
                    <select
                    className="h-10 w-4/5 border border-gray-400 rounded"
                    value={productData.productStatus}
                    onChange={(e) => handleInputChange("productStatus", e.target.value)}
                    >
                    <option>정상</option>
                    <option>중단</option>
                    <option>일시중단</option>
                    <option>삭제</option>
                    </select>
                </div>
                <div className="p-2">
                    발주 요일
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.mon}
                        onChange={() => handleOrderDayChange("mon")}
                    />
                    월
                    </label>
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.tue}
                        onChange={() => handleOrderDayChange("tue")}
                    />
                    화
                    </label>
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.wed}
                        onChange={() => handleOrderDayChange("wed")}
                    />
                    수
                    </label>
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.thu}
                        onChange={() => handleOrderDayChange("thu")}
                    />
                    목
                    </label>
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.fri}
                        onChange={() => handleOrderDayChange("fri")}
                    />
                    금
                    </label>
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.sat}
                        onChange={() => handleOrderDayChange("sat")}
                    />
                    토
                    </label>
                    <label className="p-2">
                    <input
                        type="checkbox"
                        checked={productData.productOrderDay.sun}
                        onChange={() => handleOrderDayChange("sun")}
                    />
                    일
                    </label>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Layout>
    );
};

export default ProductRegister;
