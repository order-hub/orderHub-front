import React from "react";

const SearchModal = ({ children, onClose }) => {
    return (
        <div className="absolute top-full left-0 w-4/5 bg-white border border-gray-300 rounded shadow-lg z-10">
            <div className="relative">
                {/* <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    X
                </button> */}
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
