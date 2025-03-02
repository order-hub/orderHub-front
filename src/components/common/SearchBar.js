import React from "react";

const SearchBar = ({value, onChange}) => {
    return(
        <input 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text" 
        className="h-10 w-4/5 outline outline-1 mr-2 rounded p-2" />
    );
};

export default SearchBar;