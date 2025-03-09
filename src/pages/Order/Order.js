import React from "react";
import Layout from "../../components/layout/Layout";
import MenuButton from "../../components/common/MenuButton";
import { Link} from "react-router-dom";

const Order = () => {
    return (
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300 mb-6">
                    발주 관리
                </div>
                <div className="grid gap-4 p-4 ml-4">
                    <Link to="one">
                        <MenuButton>단품 발주</MenuButton>
                    </Link>
                    <Link to="middle">
                        <MenuButton>중분류 발주</MenuButton>
                    </Link>
                    <Link to="view">
                        <MenuButton>발주 현황 조회</MenuButton>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Order;
