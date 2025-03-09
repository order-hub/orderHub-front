import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96 ">
                <h1 className="text-center text-2xl font-bold mb-6">Order Hub</h1>
                <form>
                    <div className="mb-4 ">
                        <label for="username" class="mb-2">아이디</label>
                        <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" />
                    </div>
                    <div className="mb-6">
                        <label for="password" class="mb-2">비밀번호</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-1/2 bg-white py-2 rounded-xl focus:outline-none focus:ring-2" onClick={() => navigate("/")}>로그인</button>
                    </div>
                </form>
                <div className="text-center mt-2">
                    <a  className="text-sm text-gray-500 hover:underline">비밀번호 변경</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
