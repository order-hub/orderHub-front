import React, {useState} from "react";
import Layout from "../../../components/layout/Layout";
import SearchBar from "../../../components/common/SearchBar"
import SearchModal from "../../../components/common/SearchModal";
import Button from "../../../components/common/Button";

const OrderOne = () => {
    const [productName, setProductName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleProductNameChange = (text) => {
        setProductName(text);
        setIsSearchOpen(text.trim() !== "");
    };

    const closeModal = () => {
        setIsSearchOpen(false);
    };

    const handleSearchClick = () => {
        console.log("검색 실행:", {productName });
        setIsSearchOpen(false);
        setProductName("");
    };
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    단품 발주
                </div>
                <div className="relative mt-4 ml-4 items-center">
                    <SearchBar onChange={handleProductNameChange} value={productName}/>
                    {isSearchOpen && (
                        <SearchModal onClose={closeModal}>{productName}</SearchModal>
                    )}
                    <Button onClick={handleSearchClick}>검색</Button>
                </div>
            </div>
        </Layout>
    );
};

export default OrderOne;
