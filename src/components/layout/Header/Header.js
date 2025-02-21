import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { VscBell  } from "react-icons/vsc";
import Alarm from "./Alarm";
import Clock from "./Clock";


const Header = () => {
	const [alarm, setAlarm] = useState(false);

	const openAlarm = (e) => {
		e.preventDefault();
		setAlarm(!alarm);
	};

	return (
		<header className="max-w-[120rem] w-full mx-auto h-[8rem] flex justify-between items-center p-4">
			<Link to="/">
				<div className="text-2xl font-black">
					Order Hub
				</div>
			</Link>
			<div className="flex items-start gap-4">
				<div className="py-3 px-4">
				    <Clock></Clock>
				</div>
				<div className="py-3 px-4">
					<select>
						<option>1호점</option>
						<option>2호점</option>
					</select>
				</div>
				<div className="py-3 px-4">
                    유저 ID
				</div>
                <div className="py-3 px-4 cursor-pointer" onClick={openAlarm}>
					<VscBell className="text-2xl"></VscBell>
					{/* <VscBellDot  className=""></VscBellDot> */}
                    {alarm && <Alarm></Alarm>}
                </div>
			</div>
		</header>
	);
};


export default Header;