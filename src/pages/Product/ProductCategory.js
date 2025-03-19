import React, { useState } from "react";
import Layout from "../../components/layout/Layout";



const ProductCategory = () => {
    const [majorCategory, setMajorCategory] = useState([
        { id: 0, name: 'ff', detail: ['삼각김밥', '김밥', '도시락', '샌드위치','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'] },
        { id: 1, name: '유제품', detail: ['우유', '치즈'] },
        { id: 2, name: '냉장식품', detail: ['떡볶이', '면', '소세지'] }
    ]);

    const [mediumCategory, setMediumCategory] = useState([
        {name:'삼각김밥', detail: ['참치마요','고추장불고기','청양마요','스팸참치','떡갈비']},
        {name:'김밥', detail: ['스팸계란','혜자','청양참치마요']},
        {name:'우유', detail: ['서울우유 200','서울우유 500','매일 우유 200','남양 200']},
        {name:'면', detail: ['가쓰오우동','김치우동','볶음 우동']}
    ]);

    const [selectedMajor, setSelectedMajor] = useState(null);
    const [selectedMedium, setSelectedMedium] = useState(null);
    const [newMajorName, setNewMajorName] = useState(""); 
    const [newMediumName, setNewMediumName] = useState(""); 
    const [newSubName, setNewSubName] = useState(""); 
    const [isInputVisibleMajor, setIsInputVisibleMajor] = useState(false);
    const [isInputVisibleMedium, setIsInputVisibleMedium] = useState(false);
    const [isInputVisibleSub, setIsInputVisibleSub] = useState(false);

    
    const addNewMajor = () => {
        if (newMajorName.trim() === "") return; 
        const newMajor = {
            id: majorCategory.length, 
            name: newMajorName,
            detail: [] 
        };
        setMajorCategory([...majorCategory, newMajor]); 
        setNewMajorName("");
        setIsInputVisibleMajor(false); 
    };

    const addNewMedium = () => {
        if (newMediumName.trim() === "") return; 
        if (!selectedMajor) return; // 대분류가 선택되지 않았을 경우
    
        const updatedMajorCategory = majorCategory.map((cat) => {
            if (cat.id === selectedMajor.id) {
                return {
                    ...cat,
                    detail: [...cat.detail, newMediumName]
                };
            }
            return cat;
        });
    
        const newMediumCategory = {
            name: newMediumName,
            detail: []
        };
    
        setMajorCategory(updatedMajorCategory);
        setMediumCategory([...mediumCategory, newMediumCategory]);

        const newSelectedMedium = mediumCategory.find((cat) => cat.name === newMediumName);
        if (!newSelectedMedium) {
            setSelectedMedium({ name: newMediumName, detail: [] });
        } else {
            setSelectedMedium(newSelectedMedium);
        }
    
        setNewMediumName("");
        setIsInputVisibleMedium(false); 
    };
    
    
    

    const addNewSub = () => {
        if (newSubName.trim() === "") return; 
        if (!selectedMedium) return; // 중분류가 선택되지 않았을 경우
    
        const updatedMediumCategory = mediumCategory.map((cat) => {
            if (cat.name === selectedMedium.name) {
                return {
                    ...cat,
                    detail: [...cat.detail, newSubName]
                };
            }
            return cat;
        });
    
        const updatedSelectedMedium = updatedMediumCategory.find((cat) => cat.name === selectedMedium.name);
        setSelectedMedium(updatedSelectedMedium);
    
        setMediumCategory(updatedMediumCategory);
        setNewSubName("");
        setIsInputVisibleSub(false); 
    };

    return (
        <Layout>
            <div className="flex flex-col w-full container">
                <div className="flex flex-col w-full p-2 text-lg font-bold bg-gray-300 mb-6">
                    상품 품목 관리
                </div>
                <div className="flex justify-between items-start gap-4 w-full h-full p-4">
                    <div className="flex flex-col p-4 gap-4 w-1/3 h-full border border-gray-300 rounded-lg">
                        <p className="text-2xl border-b border-gray-400">대분류</p>
                        <ul className="m-2 max-h-[500px] overflow-y-auto">
                            {majorCategory.map((cat) => (
                                <li
                                    key={cat.id}
                                    onClick={() => setSelectedMajor(cat)}
                                    className={`p-1 cursor-pointer text-lg ${
                                        selectedMajor?.id === cat.id ? 'font-bold text-blue-500' : ''
                                    }`}
                                >
                                    {cat.name}
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
                        {selectedMajor ? (
                            <ul>
                                {mediumCategory.filter((cat) => selectedMajor.detail.includes(cat.name)).map((cat) => (
                                    <li
                                    key={cat.id}
                                    onClick={() => setSelectedMedium(cat)}
                                    className={`p-1 cursor-pointer text-lg ${
                                        selectedMedium?.name === cat.name ? 'font-bold text-blue-500' : ''
                                    }`}
                                >
                                    {cat.name}
                                </li>
                                ))}
                                <li className="p-1 text-lg cursor-pointer hover:bg-gray-300" onClick={() => setIsInputVisibleMedium(!isInputVisibleMedium)}>
                                    + 추가하기
                                </li>
                            </ul>
                        ) : (
                            <p className="p-1 text-gray-500">대분류를 선택하세요.</p>
                        )}
                        {isInputVisibleMedium && (
                            <div className="flex flex-cols-2 gap-4 mt-4 justify-center">
                                <input
                                    type="text"
                                    value={newMediumName}
                                    onChange={(e) => setNewMediumName(e.target.value)}
                                    placeholder="새 중분류 이름"
                                    className="border border-gray-500 rounded-lg p-2 w-full h-10"
                                />
                                <button
                                    onClick={addNewMedium}
                                    className="bg-gray-300 rounded-lg px-4 py-2 h-10 whitespace-nowrap"
                                >
                                    추가
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="overflow-y-auto flex flex-col p-4 gap-4 w-1/3 h-full border border-gray-300 rounded-lg">
                        <p className="text-2xl border-b border-gray-400">소분류</p>
                        {selectedMedium ? (
                            <ul className="m-2 max-h-[500px] overflow-y-auto">
                                {selectedMedium.detail.map((detail) => (
                                    <li key={detail} className="p-1 text-lg border-b">
                                        {detail}
                                    </li>
                                ))}
                                    <li className="p-1 text-lg cursor-pointer hover:bg-gray-300"  onClick={() => {setIsInputVisibleSub(!isInputVisibleSub)}}>
                                        + 추가하기
                                    </li>
                                </ul>
                            ) : (
                                <p className="p-1 text-gray-500">중분류를 선택하세요.</p>
                            )}
                            {isInputVisibleSub && (
                            <div className="flex flex-cols-2 gap-4 mt-4 justify-center">
                                <input
                                    type="text"
                                    value={newSubName}
                                    onChange={(e) => setNewSubName(e.target.value)}
                                    placeholder="새 소분류 이름"
                                    className="border border-gray-500 rounded-lg p-2 w-full h-10"
                                />
                                <button
                                    onClick={addNewSub}
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
