import React from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from './../../components/common/SearchBar';

const WorkRegister = () => {
    return(
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300">
                    근무자 등록
                </div>
                <div className="flex flex-cols-2 p-4 gap-4 w-full h-full">
                    <div className="flex flex-col w-1/3 full h-full border border-gray-300 rounded-lg">
                        <p className="text-2xl border-b border-gray-400 m-2">근무자 명단</p>
                        현재 이 매장에 등록되어 있는 근무자 명단 및 근무자 아이디 리스트로 출력
                    </div>
                    <div  className="flex flex-col w-2/3 full h-full border border-gray-300 rounded-lg">
                        <p className="text-2xl border-b border-gray-400 m-2">근무자 추가</p>
                        <table className="h-full m-4 border border-gray-300">
                            <tr>
                                <th className="p-2 bg-gray-300 ">ID</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300 ">이름</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300 ">생년월일</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                                <th className="p-2 bg-gray-300 ">성별</th>
                                <th>
                                    <label className="p-2">
                                        <input type="checkbox" />남
                                    </label>
                                    <label className="p-2">
                                        <input type="checkbox" />여
                                    </label>
                                </th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300 ">연락처</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300 whitespace-nowrap">근무 시작 일자</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300 ">급여</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                                <th className="p-2 bg-gray-300 ">기타급</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300 ">근무시간</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                                <th className="p-2 bg-gray-300 whitespace-nowrap">휴게시간</th>
                                <th className="p-2"><SearchBar></SearchBar></th>
                            </tr>
                            <tr>
                                <th className="p-2 bg-gray-300">4대보험</th>
                                <th className="whitespace-nowrap" colSpan="3">
                                    <label className="p-2">
                                        <input type="checkbox" />국민연금
                                    </label>
                                    <label className="p-2">
                                        <input type="checkbox" />건강보험
                                    </label>
                                    <label className="p-2">
                                        <input type="checkbox" />고용보험
                                    </label>
                                    <label className="p-2">
                                        <input type="checkbox" />산재보험
                                    </label>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WorkRegister;