import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import SearchModal from "../../components/common/SearchModal";
import Button from "../../components/common/Button";
import { searchProduct } from "../../service/ProductService";


const ProductUpdate = () => {
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [productList, setProductList] = useState([]);
    
    
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
                    <li className="w-1/5 border-r border-gray-400 px-2">{productCode}</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">{productName}</li>
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