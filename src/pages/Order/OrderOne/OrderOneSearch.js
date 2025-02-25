import React from "react";

const OrderOneSearch = ({children, onClose}) => {
    return(
        <div className="relative flex w-4/5 h-2/3 z-50">
            <button className="absolute top-2 right-2" onClick={onClose}>X</button>
            <div className="flex w-full h-full bg-white p-6 rounded shadow-lg items-center justify-center">
                <p className="text-center">{children}</p>
            </div>
        </div>
    );
};

export default OrderOneSearch;