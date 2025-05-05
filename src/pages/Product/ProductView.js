import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import SearchModal from "../../components/common/SearchModal";
import Button from "../../components/common/Button";
import { searchProduct } from "../../service/ProductService"; // <-- 새로 추가

const ProductView = () => {
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 실제로 화면에 표시할 데이터
  const [productData, setProductData] = useState({
    productCode: "",
    productName: "",
    productCount: "",
    productOrderCount: "",
    productOrderDay: "",
    productSale: "",
    productStatus: "",
    imageUrl: "",
  });

  // 검색 바 핸들러
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

  // [1] 실제 검색 로직
  const handleSearchClick = async () => {
    try {
      // 백엔드 호출
      const response = await searchProduct(productCode, productName);
      // response는 ProductResponse 형식
      // {
      //   id, name, categoryId, categoryName, saleStatus, conditionStatus,
      //   price, attributes, imageUrl
      // }
      console.log(response);

      // 백엔드가 'attributes' 안에 { productCode, productCount, productOrderCount, ... } 를 넣는다고 가정
      const { id, name, imageUrl, attributes, conditionStatus, saleStatus } = response.content[0];
      
      // 우리가 표시하고 싶은 필드들을 매핑
      setProductData({
        productCode: attributes?.productCode || "",      // 예: attributes에 productCode가 있다고 가정
        productName: name || "",                         // 실제 상품명
        productCount: attributes?.productCount || "",    // 발주 재고
        productOrderCount: attributes?.productOrderCount || "",
        productOrderDay: attributes?.productOrderDay || "",
        productSale: attributes?.productSale || saleStatus || "", // 행사는 saleStatus? or 별도?
        productStatus: attributes?.productStatus || conditionStatus || "",
        imageUrl: imageUrl || "",
      });
    } catch (error) {
      console.error("검색 에러:", error);
      alert("일치하는 상품이 없습니다.");
      // 검색 실패 시, 폼 초기화
      setProductData({
        productCode: "",
        productName: "",
        productCount: "",
        productOrderCount: "",
        productOrderDay: "",
        productSale: "",
        productStatus: "",
        imageUrl: "",
      });
    } finally {
      setIsSearchOpen(false);
      setProductCode("");
      setProductName("");
    }
  };

  // UI에 표시할 필드 설정
  const productFields = [
    { label: "상품코드", key: "productCode" },
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
            {/* 왼쪽: 상품 이미지 미리보기 */}
            <div className="flex w-1/3 items-center justify-center p-4 border-r border-gray-300">
              {productData.imageUrl ? (
                <img
                  src={productData.imageUrl}
                  alt="상품 이미지"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ) : (
                "상품 이미지"
              )}
            </div>
            {/* 오른쪽: 정보 표시 */}
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
