import React from "react";
import Layout from "../../components/layout/Layout";
import MenuButton from "../../components/common/MenuButton";
import { Link, Outlet } from "react-router-dom";

const Order = () => {
    return (
        <Layout>
            <div className="container p-4">
                <div className="flex flex-col w-full p-4 text-2xl">
                    발주 관리
                </div>
                <div className="grid gap-4 p-4">
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
                <Outlet></Outlet>
            </div>
        </Layout>
    );
};

export default Order;
