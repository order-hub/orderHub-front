import React, { useState } from "react";
import Button from "./Button";

const SearchBar = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(searchText); 
        }
        setSearchText("");
    };
    
    return(
        <div className="flex m-2 items-center gap-4"> 
                    <input 
                    value={searchText}
                    onChange={handleInputChange}
                    type="text" 
                    className="h-10 w-4/5 outline outline-1 mr-2 rounded p-2" />
                    <Button onClick={handleSearchClick}>검색</Button>
                </div>
    );
};

export default SearchBar;