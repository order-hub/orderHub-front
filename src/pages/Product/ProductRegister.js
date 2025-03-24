import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import { createProduct } from "../../service/ProductService";

// 초기 state: DTO 구조 그대로 사용
const INITIAL_STATE = {
  name: "",               // 상품명
  categoryId: "",         // 카테고리 ID
  saleStatus: "",         // 판매 상태(ENUM 값: 예 ON_SALE, SOLD_OUT 등)
  conditionStatus: "",    // 상품 상태(ENUM 값: NEW, USED 등)
  price: "",              // 가격
  attributes: {
    productCode: "",      // 추가로 필요한 항목이라 가정 (예시)
    productCount: "",
    productOrderCount: "",
    productOrderDay: "",
  },
};

const ProductRegister = () => {
  const [productData, setProductData] = useState(INITIAL_STATE);
  const [productImage, setProductImage] = useState(null);

  /**
   * 상태값 변경 핸들러 (일반 필드)
   * @param {string} field - 필드 이름 (name, categoryId, saleStatus, ...)
   * @param {string} value - 입력 값
   */
  const handleInputChange = (field, value) => {
    setProductData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  /**
   * 상태값 변경 핸들러 (attributes 내부)
   * @param {string} attrKey - attributes 내부 key
   * @param {string} value
   */
  const handleAttributeChange = (attrKey, value) => {
    setProductData((prevData) => ({
      ...prevData,
      attributes: {
        ...prevData.attributes,
        [attrKey]: value,
      },
    }));
  };

  // 파일 업로드
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductImage(e.target.files[0]);
    }
  };

  // 저장 (등록) 버튼 클릭 시
  const handleProductSave = async () => {
    try {
      // [1] FormData 구성
      const formData = new FormData();

      // 프론트에서 관리 중인 productData를
      // JSON 으로 직렬화하여 'request' 라는 key로 담아야 함.
      formData.append(
        "request",
        new Blob([JSON.stringify(productData)], {
          type: "application/json",
        })
      );

      // 파일이 있으면 productImage로 함께 전송
      if (productImage) {
        formData.append("productImage", productImage);
      }

      // [2] API 호출
      const response = await createProduct(formData);

      console.log("등록 성공:", response.data);

      // 응답: ProductResponse
      // {
      //   id, name, categoryId, categoryName, saleStatus, conditionStatus,
      //   price, attributes, imageUrl
      // }

      alert("상품이 등록되었습니다.");

      // [3] 완료 후 상태 초기화
      setProductData(INITIAL_STATE);
      setProductImage(null);
    } catch (error) {
      console.error("등록 에러:", error);
      alert("상품 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col w-full container">
        <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
          상품 등록
        </div>

        {/* 상단 영역: 예시로 "카테고리ID" 정도만 노출 */}
        <div className="flex w-full gap-4 p-4 items-center">
          <label htmlFor="categoryId" className="whitespace-nowrap mr-2">
            카테고리ID
          </label>
          <div className="relative flex">
            <SearchBar
              id="categoryId"
              value={productData.categoryId}
              onChange={(val) => handleInputChange("categoryId", val)}
            />
          </div>
          <Button onClick={handleProductSave}>저장</Button>
        </div>

        {/* 본문 */}
        <div className="w-full h-full p-4 border">
          {/* 왼쪽: 이미지 업로드 */}
          <div className="flex flex-col w-1/3 items-center justify-center p-4 border-r border-gray-300">
            <p className="mb-2">상품 이미지</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2"
            />
            {productImage && <p className="mt-2">{productImage.name}</p>}
          </div>

          {/* 오른쪽: 나머지 정보 */}
          <div className="flex-1 grid grid-cols-2 gap-x-4 px-4">
            {/* 상품명 */}
            <div className="col-span-2 my-2">
              <label className="block mb-1">상품명 (name)</label>
              <SearchBar
                id="name"
                value={productData.name}
                onChange={(val) => handleInputChange("name", val)}
              />
            </div>

            {/* 판매상태 (saleStatus) */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">판매상태 (saleStatus)</label>
              <SearchBar
                id="saleStatus"
                value={productData.saleStatus}
                onChange={(val) => handleInputChange("saleStatus", val)}
              />
            </div>

            {/* 상품상태 (conditionStatus) */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">상품상태 (conditionStatus)</label>
              <SearchBar
                id="conditionStatus"
                value={productData.conditionStatus}
                onChange={(val) => handleInputChange("conditionStatus", val)}
              />
            </div>

            {/* 가격 (price) */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">가격 (price)</label>
              <SearchBar
                id="price"
                value={productData.price}
                onChange={(val) => handleInputChange("price", val)}
              />
            </div>

            {/* attributes.productCode */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">상품코드 (attributes.productCode)</label>
              <SearchBar
                id="productCode"
                value={productData.attributes.productCode}
                onChange={(val) => handleAttributeChange("productCode", val)}
              />
            </div>

            {/* attributes.productCount */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">발주 재고 (attributes.productCount)</label>
              <SearchBar
                id="productCount"
                value={productData.attributes.productCount}
                onChange={(val) => handleAttributeChange("productCount", val)}
              />
            </div>

            {/* attributes.productOrderCount */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">발주 배수 (attributes.productOrderCount)</label>
              <SearchBar
                id="productOrderCount"
                value={productData.attributes.productOrderCount}
                onChange={(val) => handleAttributeChange("productOrderCount", val)}
              />
            </div>

            {/* attributes.productOrderDay */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">발주 요일 (attributes.productOrderDay)</label>
              <SearchBar
                id="productOrderDay"
                value={productData.attributes.productOrderDay}
                onChange={(val) => handleAttributeChange("productOrderDay", val)}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductRegister;
