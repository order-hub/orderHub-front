import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { registerCategory, getAllActiveCategories, deleteCategory } from "../../service/ProductService";



const ProductCategory = () => {
    const [category, setCategory] = useState([]);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [selectedMiddle, setSelectedMiddle] = useState(null);
    const [newMajorName, setNewMajorName] = useState(""); 
    const [newMiddleName, setNewMiddleName] = useState(""); 
    const [newMinorName, setNewMinorName] = useState(""); 
    const [isInputVisibleMajor, setIsInputVisibleMajor] = useState(false);
    const [isInputVisibleMiddle, setIsInputVisibleMiddle] = useState(false);
    const [isInputVisibleMinor, setIsInputVisibleMinor] = useState(false);
    const [editCategory, setEditCategory] = useState(false);

    const fetchCategories = async () => {
        try {
            const categories = await getAllActiveCategories();
            setCategory(categories);
            console.log(categories);
        } catch (error) {
            console.error("카테고리 불러오기 실패", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []); // category가 바뀔 때마다 실행

    
    const addNewMajor = async () => {
        if (newMajorName.trim() === "") return;
    
        // 서버에 등록
        try {
            await registerCategory({
                name: newMajorName,
                categoryType: "MAJOR"
                // 대분류이므로 parentId는 null 또는 undefined
            });
            
            setNewMajorName("");
            setIsInputVisibleMajor(false);
            fetchCategories();
        } catch (e) {
            alert("대분류 등록 실패");
        }
    };
    

    const addNewMiddle = async () => {
        if (newMiddleName.trim() === "") return; 
        if (!selectedMajor) return; // 대분류가 선택되지 않았을 경우

        try {
            await registerCategory({
                name: newMiddleName,
                parentCategoryId: selectedMajor.id, // 대분류 id를 parentId로 전달
                categoryType: "MIDDLE"
            });
        
            setNewMiddleName("");
            setIsInputVisibleMiddle(false); 
            fetchCategories();

        } catch (e) {
            alert("중분류 등록 실패");
            console.log(e);
        }
    };
    
    
    

    const addNewMinor = async () => {
        console.log(selectedMiddle);
        if (newMinorName.trim() === "") return; 
        if (!selectedMiddle) return; // 중분류가 선택되지 않았을 경우
    
        try {
            await registerCategory({
                name: newMinorName,
                parentCategoryId: selectedMiddle.id, // 중분류 id를 parentId로 전달
                categoryType: "MINOR"
            });
            
            setNewMinorName("");
            setIsInputVisibleMinor(false);
            fetchCategories();
        } catch (e) {
            alert("소분류 등록 실패");
        } 
    };

    const handleDelete = async (categoryId) => {
        console.log(categoryId);
        try {
            await deleteCategory(categoryId);
            fetchCategories(); // 삭제 후 목록 갱신
        } catch (e) {
            alert("카테고리 삭제 실패");
        }
    };
    

    return (
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300 mb-6">
                    상품 품목 관리
                </div>
                <div className="flex justify-between items-start gap-4 w-full h-full p-4">
                    <div className="flex flex-col p-4 gap-4 w-1/3 h-full border border-gray-300 rounded-lg">
                    <div className="flex flex-col-2 justify-between">
                        <p className="text-2xl border-b border-gray-400">대분류</p> 
                        <div className="cursor-pointer" onClick={() => setEditCategory(!editCategory)}>편집</div>
                    </div>
                        <ul className="m-2 max-h-[500px] overflow-y-auto">
                            {category
                                .filter(cat => cat.categoryType === "MAJOR")
                                .map(cat => (
                                    <li
                                    key={cat.id}
                                    onClick={() => setSelectedMajor(cat)}
                                    className={`p-1 cursor-pointer text-lg ${
                                        selectedMajor?.id === cat.id ? 'font-bold text-blue-500' : ''
                                    }`}
                                    >
                                    {cat.name}
                                    {editCategory && (
                                        <button onClick={() => handleDelete(cat.id)} className="text-red-500">-</button>
                                    )}
                                    </li>
                            ))}

                            {/* 추가하기 버튼 */}
                            <li className="p-1 text-lg cursor-pointer hover:bg-gray-300"  onClick={() => setIsInputVisibleMajor(!isInputVisibleMajor)}>
                                + 추가하기
                            </li>
                        </ul>
                        {isInputVisibleMajor && (
                            <div className="flex flex-cols-2 gap-4 mt-4 justify-center">
                                <input
                                    type="text"
                                    value={newMajorName}
                                    onChange={(e) => setNewMajorName(e.target.value)}
                                    placeholder="새 대분류 이름"
                                    className="border border-gray-500 rounded-lg p-2 w-full h-10"
                                />
                                <button
                                    onClick={addNewMajor}
                                    className="bg-gray-300 rounded-lg px-4 py-2 h-10 whitespace-nowrap"
                                >
                                    추가
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col p-4 gap-4 w-1/3 h-full border border-gray-300 rounded-lg">
                        <p className="text-2xl border-b border-gray-400">중분류</p> 
                        {selectedMajor?.children ? (
                            <ul>
                                {selectedMajor.children.map((middleCat) => ( // 하위 항목 순회
                                    <li
                                    key={middleCat.id}
                                    onClick={() => {setSelectedMiddle(middleCat);}}
                                    className={`p-1 cursor-pointer text-lg ${
                                        selectedMiddle?.id === middleCat.id 
                                        ? 'font-bold text-blue-500' 
                                        : ''
                                    }`}
                                    >
                                    {middleCat.name} 
                                    {editCategory && (
                                        <button onClick={() => handleDelete(middleCat.id)} className="text-red-500">-</button>
                                    )}
                                    </li>
                                ))}
                                <li className="p-1 text-lg cursor-pointer hover:bg-gray-300" onClick={() => setIsInputVisibleMiddle(!isInputVisibleMiddle)}>
                                    + 추가하기
                                </li>
                            </ul>
                        ) : (
                            <p className="p-1 text-gray-500">대분류를 선택하세요.</p>
                        )}
                        {isInputVisibleMiddle && (
                            <div className="flex flex-cols-2 gap-4 mt-4 justify-center">
                                <input
                                    type="text"
                                    value={newMiddleName}
                                    onChange={(e) => setNewMiddleName(e.target.value)}
                                    placeholder="새 중분류 이름"
                                    className="border border-gray-500 rounded-lg p-2 w-full h-10"
                                />
                                <button
                                    onClick={addNewMiddle}
                                    className="bg-gray-300 rounded-lg px-4 py-2 h-10 whitespace-nowrap"
                                >
                                    추가
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="overflow-y-auto flex flex-col p-4 gap-4 w-1/3 h-full border border-gray-300 rounded-lg">
                        <p className="text-2xl border-b border-gray-400">소분류</p> 
                        {selectedMiddle?.children ? (
                            <ul>
                            {selectedMiddle.children.map((minorCat) => (
                                <li
                                key={minorCat.id}
                                >
                                {minorCat.name}
                                {editCategory && (
                                        <button onClick={() => handleDelete(minorCat.id)} className="text-red-500">-</button>
                                    )}
                                </li>
                                ))}
                                <li className="p-1 text-lg cursor-pointer hover:bg-gray-300" onClick={() => setIsInputVisibleMinor(!isInputVisibleMinor)}>
                                    + 추가하기
                                </li>
                            </ul>
                            ) : (
                                <p className="p-1 text-gray-500">중분류를 선택하세요.</p>
                            )}
                            {isInputVisibleMinor && (
                            <div className="flex flex-cols-2 gap-4 mt-4 justify-center">
                                <input
                                    type="text"
                                    value={newMinorName}
                                    onChange={(e) => setNewMinorName(e.target.value)}
                                    placeholder="새 소분류 이름"
                                    className="border border-gray-500 rounded-lg p-2 w-full h-10"
                                />
                                <button
                                    onClick={addNewMinor}
                                    className="bg-gray-300 rounded-lg px-4 py-2 h-10 whitespace-nowrap"
                                >
                                    추가
                                </button>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </Layout>
    );
};

export default ProductCategory;
