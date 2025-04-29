import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import { createProduct, getAllActiveCategories } from "../../service/ProductService";

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
  const [categories, setCategories] = useState([]);
  const [selectedMajor, setSelectedMajor] = useState(); // 대분류 id
  const [selectedMiddle, setSelectedMiddle] = useState(); // 중분류 id
  const [selectedMinor, setSelectedMinor] = useState(); // 소분류 id


  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getAllActiveCategories();
        setCategories(categories);
        console.log(categories);
      } catch (e) {
        console.error("카테고리 불러오기 실패", e);
      }
    }
    fetchCategories();
  }, []);

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

        {/* 상단 영역*/}
        <div className="flex w-full gap-4 p-4 items-center">
          {/* 상품 카테고리 */}
          <div className="col-span-4 my-2">
              {/* 대분류 */} 대분류
              <select
                value={selectedMajor}
                onChange={e => {
                  setSelectedMajor(e.target.value);
                  setSelectedMiddle("");
                  setSelectedMinor("");
                  handleInputChange("categoryId", ""); // 최종 categoryId 초기화
                }}
                className="m-4 p-1 outline outline-1 rounded"
              >
                <option value="">대분류 선택</option>
                {categories?.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              {/* 중분류 */} 중분류
              <select
                value={selectedMiddle}
                onChange={e => {
                  setSelectedMiddle(e.target.value);
                  setSelectedMinor("");
                  handleInputChange("categoryId", ""); // 최종 categoryId 초기화
                }}
                className="m-4 p-1 outline outline-1 rounded"
                disabled={!selectedMajor}
              >
                <option value="">중분류 선택</option>
                {selectedMajor &&
                  categories
                    .find(cat => String(cat.id) === String(selectedMajor))
                    ?.children?.map(mid => (
                      <option key={mid.id} value={mid.id}>{mid.name}</option>
                    ))}
              </select>

              {/* 소분류 */} 소분류
              <select
                value={selectedMinor}
                onChange={e => {
                  setSelectedMinor(e.target.value);
                  handleInputChange("categoryId", e.target.value); // 최종 categoryId에 소분류 id 저장
                }}
                className="m-4 p-1 outline outline-1 rounded"
                disabled={!selectedMiddle}
              >
                <option value="">소분류 선택</option>
                {selectedMajor && selectedMiddle &&
                  categories
                    .find(cat => String(cat.id) === String(selectedMajor))
                    ?.children?.find(mid => String(mid.id) === String(selectedMiddle))
                    ?.children?.map(minor => (
                      <option key={minor.id} value={minor.id}>{minor.name}</option>
                    ))}
              </select>
            </div>
          
          <Button onClick={handleProductSave}>저장</Button>
        </div>

        {/* 본문 */}
        <div className="w-full h-full p-4 border flex flex-row">
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
          <div className="flex-1 flex-col grid grid-cols-2 gap-x-4 px-4">


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
              <select
                value={productData.saleStatus}
                onChange={e => handleInputChange("saleStatus", e.target.value)}
                className="h-10 w-4/5 outline outline-1 mr-2 rounded p-2"
              >
                <option value="FOR_SALE">판매중</option>
                <option value="OUT_OF_STOCK">품절</option>
                <option value="DISCONTINUED">단종</option>
                <option value="PREORDER">예약 판매</option>
                <option value="BACKORDER">재입고 예정</option>
                <option value="DELETED">삭제</option>
              </select>
            </div>

            {/* 상품상태 (conditionStatus) */}
            <div className="col-span-1 my-2">
              <label className="block mb-1">상품상태 (conditionStatus)</label>
              <select
                value={productData.conditionStatus}
                onChange={e => handleInputChange("conditionStatus", e.target.value)}
                className="h-10 w-4/5 outline outline-1 mr-2 rounded p-2"
              >
                <option value="NEW">새상품</option>
                <option value="REFURBISHED">리퍼브</option>
                <option value="DAMAGED">손상됨</option>
                <option value="RETURNED">반품됨</option>
                <option value="EXPIRED">유통기한 만료</option>
              </select>
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
