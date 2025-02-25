import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";


const Layout = ({ children }) => {
    return(
        <div className="flex flex-col h-screen px-16 py-4">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex flex-col w-full p-4">
                    {children}
                </div>
            </div>
        </div>

    );
};

export default Layout;