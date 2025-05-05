import {React, useState} from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";
import { searchProduct } from "../../service/ProductService";

const ProductSearch = () => {
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const productSaleMap = {
        FOR_SALE: "판매 중",
        OUT_OF_STOCK: "품절",
        DISCONTINUED: "단종",
        PREORDER: "예약 판매",
        BACKORDER: "재입고 예정",
        DELETED: "삭제",
    };
    const productStatusMap = {
        NEW: "새 상품",
        REFURBISHED: "리퍼브",
        DAMAGED: "손상됨",
        RETURNED: "반품됨",
        EXPIRED: "유통기한 만료"
    }


    const handleProductCodeChange = (text) => {
        setProductCode(text);
    };
    const handleProductNameChange = (text) => {
        setProductName(text);
    };

    const [productList, setProductList] = useState([]);

    const handleSearchClick = async () => {
        try {
            const response = await searchProduct(productCode, productName);
            // 여러 상품을 배열로 변환
            const products = response.content.map(item => {
                const { name, imageUrl, attributes, conditionStatus, saleStatus } = item;
                return {
                    productCode: attributes?.productCode || "",
                    productName: name || "",
                    productCount: attributes?.productCount || "",
                    productOrderCount: attributes?.productOrderCount || "",
                    productOrderDay: attributes?.productOrderDay || "",
                    productSale: attributes?.productSale || saleStatus || "",
                    productStatus: attributes?.productStatus || conditionStatus || "",
                    imageUrl: imageUrl || "",
                };
            });
            setProductList(products);
        } catch (error) {
            alert("일치하는 상품이 없습니다.");
            setProductList([]);
        } finally {
            setProductCode("");
            setProductName("");
        }
    };

    return(
        <Layout>
            <div className="flex flex-col w-full container">
            <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                상품 검색
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
                </div>
                <Button onClick={handleSearchClick}>검색</Button>
                </div>
                <div>
                    <ul className="flex bg-gray-100 ml-4 mr-4 mt-4 p-2">
                        <li className="w-1/5 border-r border-gray-400 px-2">상품코드</li>
                        <li className="w-2/5 border-r border-gray-400 px-2">상품명</li>
                        <li className="w-1/5 border-r border-gray-400 px-2">판매상태</li>
                        <li className="w-1/5 px-2">상품상태</li>
                    </ul>
                    {productList.length > 0 && productList.map((product, index) => (
                        <ul key={index} className="flex ml-4 mr-4 p-2 border-b border-gray-300">
                            <li className="w-1/5 border-r border-gray-400 px-2">{product.productCode}</li>
                            <li className="w-2/5 border-r border-gray-400 px-2">{product.productName}</li>
                            <li className="w-1/5 border-r border-gray-400 px-2">{productStatusMap[product.productStatus] || product.productStatus}</li>
                            <li className="w-1/5 px-2">{productSaleMap[product.productSale] || product.productSale}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ProductSearch;