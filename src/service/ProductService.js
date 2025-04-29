// service/ProductService.js

import axios from "axios";

// 상품 등록 API (POST /api)
// 백엔드에서 consumes = multipart/form-data
export const createProduct = (formData) => {
  return axios.post("http://localhost:8080/api/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/**
 * 상품 검색 API
 * 백엔드: GET /api/search?productCode=xxx&productName=yyy
 * 응답: ProductResponse (단일)
 */
export const searchProduct = async (productCode, productName) => {
  const params = {};
  if (productCode) params.productCode = productCode;
  if (productName) params.productName = productName;

  const response = await axios.get("http://localhost:8080/api/products/search", { params });
  return response.data; // ProductResponse 객체 반환
};


// 상품 카테고리 등록 API
export const registerCategory = (categoryData) => {
  return axios.post("http://localhost:8080/api/categories", categoryData);
};

// 상품 카테고리 불러오는 API
export const getAllActiveCategories = async () => {
  const response = await axios.get("http://localhost:8080/api/categories/active");
  return response.data; 
};

// 상품 카테고리 삭제 API
export const deleteCategory = (categoryId) => {
  return axios.delete(`http://localhost:8080/api/categories/${categoryId}`);
};