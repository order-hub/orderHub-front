import React from "react";
import Layout from "../../components/layout/Layout";
import MenuButton from "../../components/common/MenuButton";
import { Link, Outlet } from "react-router-dom";

const Stock = () => {
    return (
        <Layout>
            <div className="container p-4">
                <div className="flex flex-col w-full p-4 text-2xl">
                    수불 관리
                </div>
                <div className="grid gap-4 p-4">
                    <Link to="view">
                        <MenuButton>재고 확인</MenuButton>
                    </Link>
                    <Link to="miss-order/register">
                        <MenuButton>오출 등록</MenuButton>
                    </Link>
                    <Link to="miss-order/view">
                        <MenuButton>오출 확인</MenuButton>
                    </Link>
                </div>
                <Outlet></Outlet>
            </div>
        </Layout>
    );
};

export default Stock;
