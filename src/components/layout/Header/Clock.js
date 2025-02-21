import React, { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 60000); // 1분마다 업데이트
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일 ${days[date.getDay()]}요일`;
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div>
            <div>{formatDate(date)} {formatTime(date)}</div>
        </div>
    );
}

export default Clock;
