import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <Layout>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 gap-4 h-1/2">
                    <Link to="/notice" className="block">
                        <div className="bg-gray-100 rounded-lg shadow-md p-4 text-lg h-full">
                            공지 게시판
                            <hr class="border-gray-500 mt-2"></hr>
                            최신글 한 다섯개
                        </div>
                    </Link>
                    <Link to="qna" className="block">
                        <div className="bg-gray-100 rounded-lg shadow-md p-4 text-lg h-full">
                            문의 사항
                            <hr class="border-gray-500 mt-2"></hr>
                            최근 문의글 한 다섯개
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Link to="order">
                        <div className="bg-gray-100 rounded-lg shadow-md p-4">발주 관리</div>
                    </Link>
                    <Link to="stock">
                        <div className="bg-gray-100 rounded-lg shadow-md p-4">수불 관리</div>
                    </Link>
                    <Link to="product">
                        <div className="bg-gray-100 rounded-lg shadow-md p-4">상품 관리</div>
                    </Link>
                    <Link to="work">
                        <div className="bg-gray-100 rounded-lg shadow-md p-4">인력 관리</div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
