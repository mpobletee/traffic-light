import React, { useState } from "react";

//include images into your bundle
import trafficlight from "../../img/trafficlight.png";

//create your first component
const Home = () => {
	const [isSelected, setIsSelected] = useState('');
	const handleClick = e => {
		// e.currentTarget.classList.add('selected')
		
		if (e.currentTarget.classList == 'red-light') {
			setIsSelected(e.currentTarget.classList.add('selected'))
		} else if (e.currentTarget.classList == 'yellow-light') {
			setIsSelected(e.currentTarget.classList.add('selected'))
		} else if (e.currentTarget.classList == 'green-light') {
			setIsSelected(e.currentTarget.classList.add('selected'))
		}

	};
	return (
		<div className="container">
			<h1>Traffic Light</h1>
			<div className="lights">
				<div className='red-light' onClick={handleClick}></div>
				<div className='yellow-light' onClick={handleClick}></div>
				<div className='green-light' onClick={handleClick} ></div>
			</div >
			<div><img id="traffic" src={trafficlight} /></div>

		</div>
	);
};

export default Home;
