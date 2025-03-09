import React, { useState, useEffect } from 'react';
import { VscGear } from "react-icons/vsc";
import SideMenu from './SideMenu';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [editMenu, setEditMenu] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    // 초기 데이터 로드
    useEffect(() => {
        console.log("저장데이터 불러오기");
        const savedMenus = localStorage.getItem("sideMenus");
        if (savedMenus) {
            setMenuItems(JSON.parse(savedMenus));
        }
    }, []);

    // 상태 변경 시 로컬 스토리지에 저장
    const updateLocalStorage = (updatedMenuItems) => {
        localStorage.setItem("sideMenus", JSON.stringify(updatedMenuItems));
    };

    const openEditMenu = () => {
        setEditMenu(!editMenu);
    };

    const addMenuItem = (menuName, menuLink) => {
        console.log(menuName, menuLink);
    
        // 메뉴 이름이 이미 존재하는지 확인
        const isDuplicate = menuItems.some((menuItem) => menuItem.name === menuName);
    
        if (isDuplicate) {
            console.log(`"${menuName}"은(는) 이미 존재합니다.`);
            return; // 중복된 경우 추가하지 않음
        }
    
        // 중복이 아니면 새 메뉴 추가
        const newMenuItems = [...menuItems, { id: menuItems.length + 1, name: menuName, link: menuLink }];
        setMenuItems(newMenuItems);
        updateLocalStorage(newMenuItems); // 로컬 스토리지 업데이트
    };
    

    const removeMenuItem = (item) => {
        console.log(item);
        const updatedMenuItems = menuItems.filter((menuItem) => menuItem.id !== item.id);
        setMenuItems(updatedMenuItems);
        updateLocalStorage(updatedMenuItems); 
    };

    return (
        <div className="p-4 flex flex-col w-64 border-r border-gray-200">
            <div className="flex flex-cols-2 justify-between w-full mb-4">
                <div>Sidebar</div>
                <div onClick={openEditMenu}><VscGear /></div>
                {editMenu && <SideMenu onAddMenu={addMenuItem}></SideMenu>}
            </div>
            <div className='flex flex-col items-start ml-2'>
                {menuItems.map((item) => (
                    <div key={item.id} className="py-2 flex items-center justify-between w-full">
                        <Link to={item.link.startsWith('/') ? item.link : `/${item.link}`} className="hover:underline">
                            {item.name}
                        </Link>
                        {editMenu && (
                            <button onClick={() => removeMenuItem(item)} className="text-red-500">-</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
