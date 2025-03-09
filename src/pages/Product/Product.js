import React from "react";
import Layout from "../../components/layout/Layout";
import MenuButton from "../../components/common/MenuButton";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300 mb-6">
                    상품 관리
                </div>
                <div className="grid gap-4 p-4 ml-4">
                    <Link to="view">
                        <MenuButton>상품 조회</MenuButton>
                    </Link>
                    <Link to="register">
                        <MenuButton>상품 추가 등록</MenuButton>
                    </Link>
                    <Link to="update">
                        <MenuButton>상품 상태 변경</MenuButton>
                    </Link>
                    <Link to="search">
                        <MenuButton>상품 검색</MenuButton>
                    </Link>
                </div>
                <Outlet></Outlet>
            </div>
        </Layout>
    );
};

export default Product;
