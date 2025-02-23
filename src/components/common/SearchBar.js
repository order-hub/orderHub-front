import React from "react";
import Button from "./Button";

const SearchBar = () => {
    return(
        <div className="flex m-2 items-center gap-4"> 
                    <input type="text" className="h-10 w-4/5 outline outline-1 mr-2 rounded p-2" />
                    <Button>검색</Button>
                </div>
    );
};

export default SearchBar;