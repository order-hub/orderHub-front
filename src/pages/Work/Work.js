import React from "react";
import Layout from "../../components/layout/Layout";
import MenuButton from "../../components/common/MenuButton";
import { Link} from "react-router-dom";

const Work = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300 mb-6">
                    인력 관리
                </div>
                <div className="grid gap-4 p-4 ml-4">
                    <Link to="register">
                        <MenuButton>근무자 추가</MenuButton>
                    </Link>
                    <Link to="role-update">
                        <MenuButton>권한 변경</MenuButton>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Work;
