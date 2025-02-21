import React from "react";

const Alarm = () => {
    return(
        <div className="fixed flex right-16 w-1/5 h-1/3">
            <div className="w-full h-full bg-white p-6 rounded shadow-lg z-50 flex items-center justify-center">
                <p className="items-center">현재 알람 없음</p>
            </div>
        </div>
    );
};

export default Alarm;