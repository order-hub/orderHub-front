import React from "react";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/common/SearchBar";
import Button from "../components/common/Button";

const NoticeBoard = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    공지사항
                </div>
                <div className="flex flex-col-2 p-4 gap-4 mt-4">
                    <SearchBar></SearchBar>
                    <Button>검색</Button>
                </div>
                <ul className="flex bg-gray-100 ml-4 mr-4 mt-4 p-2">
                    <li className="w-1/5 border-r border-gray-400 px-2">글 번호</li>
                    <li className="w-2/5 border-r border-gray-400 px-2">글 제목</li>
                    <li className="w-1/5 border-r border-gray-400 px-2">날짜</li>
                    <li className="w-1/5 px-2">확인 여부</li>
                </ul>
                <hr className="mr-4 ml-4 border-gray-400" />
                    밑에 리스트는 디테일 페이지 만들어서 .map으로 가져오면 되지 않을까?
            </div>
        </Layout>
    );
};

export default NoticeBoard;
