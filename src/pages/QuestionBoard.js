import React from "react";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/common/SearchBar";

const QuestionBoard = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full p-4">
                <div className="mb-2"> 
                    <h2 className="w-full font-bold text-2xl">QnA</h2>
                </div>
                <SearchBar></SearchBar>
                <ul className="flex bg-gray-100 p-2 mt-4">
                    <li className="w-1/5 border-r border-gray-400 px-2">글 번호</li>
                    <li className="w-2/5 border-r border-gray-400 px-2">글 제목</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">날짜</li>
                    <li className="w-1/5 px-2">확인 여부</li>
                </ul>
                <hr className="mr-2 ml-2 border-gray-400" />
                밑에 리스트는 디테일 페이지 만들어서 .map으로 가져오면 되지 않을까?
                여긴 밑에 글 작성 폼도 같이 진열
            </div>
        </Layout>
    );
};

export default QuestionBoard;
