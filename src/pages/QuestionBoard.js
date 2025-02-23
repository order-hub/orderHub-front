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
            </div>
        </Layout>
    );
};

export default QuestionBoard;
