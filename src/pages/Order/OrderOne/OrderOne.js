import React, {useState} from "react";
import Layout from "../../../components/layout/Layout";
import SearchBar from "../../../components/common/SearchBar"
import OrderOneSearch from "./OrderOneSearch";

const OrderOne = () => {
    const [searchText, setSearchText] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearch = (text) => {
        setSearchText(text);
        setIsSearchOpen(true);
    };

    const closeModal = () => {
        setIsSearchOpen(false);
    };

    return(
        <Layout>
            <div className="flex flex-col w-full p-4">
                <div className="flex flex-col w-full p-4 text-2xl">
                    단품 발주
                </div>
                <SearchBar onSearch={handleSearch}></SearchBar>
                {isSearchOpen && (
                    <OrderOneSearch onClose={closeModal}>{searchText}</OrderOneSearch>
                )}
            </div>
        </Layout>
    );
};

export default OrderOne;