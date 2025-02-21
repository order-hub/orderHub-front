import React from "react";
import Layout from "../components/layout/Layout";
import Button from "../components/common/Button";

const QuestionBoard = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full p-4">
                <div className="mb-2"> 
                    <h2 className="w-full font-bold text-2xl">QnA</h2>
                </div>
                <div className="flex m-2 items-center gap-4"> 
                    <input type="text" className="h-10 w-4/5 outline outline-1 mr-2 rounded p-2" />
                    <Button>검색</Button>
                </div>
            </div>
        </Layout>
    );
};

export default QuestionBoard;
